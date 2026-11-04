---
title: Change Detection
---

A summary table is only useful if it reflects the current state of its source.
Instead of recalculating everything periodically, the framework detects the
changes that affect a summary and marks the affected partitions as dirty. Then
the refresh agent refreshes only those partitions, as described in
[Refreshing](./02-refreshing.md).

This page describes which changes are detected, which are not, and how to deal
with the ones that are not.

## What a Summary Depends On

A summary depends on the property paths of the source entity that it reads:

* the source of the [partition](../02-summary-entity/02-partitioning.md),
* the value resolvers of the
  [dimensions](../02-summary-entity/03-dimensions.md),
* the aggregate functions of the
  [measures](../02-summary-entity/04-measures.md),
* the [filter](../02-summary-entity/01-summary-class.md#filtering-the-source-entities),
  if any.

Each value resolver and aggregate function reports the paths it reads using its
`getInvolvedProperties()` method. In a `CustomExpression` or a
`SourceCondition`, these are the paths written in square brackets. If you
[create your own value
resolver](../05-value-resolver/06-creating-value-resolvers.md) or [aggregate
function](../06-aggregate-function/11-creating-aggregate-functions.md), make
sure `getInvolvedProperties()` returns every path it reads. Otherwise, changes
to the missing paths are not detected.

Take this summary as an example:

```php
#[ORM\Entity()]
#[Analytics\Summary(
    sourceClass: Order::class,
    filter: new Comparison('status', '<>', 'cancelled'),
)]
class OrderSummary extends BaseSummary
{
    #[ORM\Embedded()]
    #[Analytics\Partition(new IntegerValue('id'))]
    private DefaultIntegerPartition $partition;

    #[ORM\ManyToOne()]
    #[Analytics\Dimension(
        source: new IdentifierValue('customer.country.region'),
    )]
    private ?Region $customerRegion = null;

    #[ORM\Column(type: Types::INTEGER)]
    #[Analytics\Measure(
        function: new Sum('item.price'),
    )]
    private ?int $price = null;

    // ...
}
```

It depends on `id`, `status`, `customer`, and `item` of the `Order`. Through
the associations, it also depends on `country` of the `Customer`, `region` of
the `Country`, and `price` of the `Item`.

## Changes to the Source Entities

When source entities are flushed using Doctrine, the framework creates the
dirty flags in the same flush:

* **Insertion.** The partition of a new entity is marked dirty, so the entity is
  summarized in the next refresh.
* **Modification.** The partition of the entity is marked dirty, but only if
  the summary depends on one of the modified properties. Changes to other
  properties are ignored. If the partitioning key changes, both the old and the
  new partition are marked dirty.
* **Deletion.** The partition of the deleted entity is marked dirty.

The dirty flags are written in the same transaction as the changes. If the
flush fails, the flags are discarded with it.

How each kind of path is matched against the changes Doctrine reports:

| Path                                  | A change is detected when                        |
| ------------------------------------- | ------------------------------------------------ |
| `status`                              | `status` of the source entity changes            |
| `customer.country`                    | the source entity refers to another `customer`*  |
| `customer.*`, `customer(Class).name`  | the source entity refers to another `customer`*  |
| `address.city` (embeddable)           | the `city` field of the `address` embeddable changes |
| `(IndividualCustomer).gender`         | `gender` of the source entity changes            |
| `*`, `(Class).*`                      | never, the identity of an entity does not change |

\* Changes inside the related entity are covered in the next section.

## Changes to Related Entities

A summary often reads data through to-one associations, like
`customer.country.region` above. When a customer moves to another country, the
`Order` itself does not change, but every order of that customer must now be
counted under another region. The framework also detects these changes:

* **Modification of a related entity.** If a property that a summary reads
  through an association changes, the partitions of the source entities that
  refer to the related entity are marked dirty. In the example, changing the
  `country` of a `Customer` refreshes the orders of that customer, and changing
  the `region` of a `Country` refreshes the orders of every customer in that
  country.
* **Deletion of a related entity.** When a `Customer`, a `Country`, or a
  `Region` is deleted, the database may delete the referring orders or set
  their references to null because of a foreign key action, without the ORM
  knowing. The partitions of the source entities that refer to the deleted
  entity are marked dirty before the deletion takes place.

To find the affected source entities, the framework runs extra queries during
the flush, one for each summary and association path involved. A change to a
related entity that many source entities refer to can mark many partitions
dirty.

Only to-one associations are followed. Casts on the path, e.g.
`customer(IndividualCustomer).gender`, and embeddables of related entities are
supported.

### Disabling Association Tracking

If the related entities change often, and each of them is referred to by many
source entities, tracking them can be expensive. You can disable it for a
summary:

```php
#[Analytics\Summary(
    sourceClass: Order::class,
    // highlight-next-line
    trackAssociations: false,
)]
class OrderSummary extends BaseSummary
{
    // ...
}
```

The summary still detects when a source entity refers to another related
entity, e.g. when the `customer` of an `Order` changes. It does not detect the
changes inside the related entities, or their deletion. Report those changes
using [`markDirty()`](#reporting-changes-using-markdirty) where needed.

## Changes That Are Not Detected

The detection works on the changes that Doctrine's unit of work computes during
a flush. These changes are not detected:

* Changes made outside the unit of work, e.g. using DQL `UPDATE` or `DELETE`,
  native SQL, database migrations, database cascades triggered by a deletion
  that is not made through the ORM, or another application writing to the same
  database.
* Changes to the data read through a to-many association by a dimension or a
  measure. They are ambiguous: it is not clear which source entities are
  affected. A filter cannot use such a path at all. Note that [to-many
  joins](../06-aggregate-function/05-to-many-joins.md) are not supported in
  aggregations either.
* Changes to related entities of a summary with `trackAssociations: false`.
* Changes to paths that a value resolver or an aggregate function does not
  report in `getInvolvedProperties()`, including the paths that are not in
  square brackets in a `CustomExpression` or a `SourceCondition`.

Use the methods below to deal with them.

## Reporting Changes Using `markDirty()`

If you change the source data in a way the framework cannot detect, report the
change using `SummaryManager::markDirty()`. It takes the partitioning keys of
the affected source entities, usually their identifiers:

```php
use App\Entity\Order;
use App\Entity\OrderSummary;
use Doctrine\ORM\EntityManagerInterface;
use Rekalogika\Analytics\Contracts\SummaryManager;

/** @var EntityManagerInterface $entityManager */
/** @var SummaryManager $summaryManager */
/** @var list<int> $ids */

$entityManager->wrapInTransaction(
    function () use ($entityManager, $summaryManager, $ids): void {
        $entityManager
            ->createQuery(\sprintf(
                'UPDATE %s o SET o.status = :status WHERE o.id IN (:ids)',
                Order::class,
            ))
            ->setParameter('status', 'cancelled')
            ->setParameter('ids', $ids)
            ->execute();

        // highlight-next-line
        $summaryManager->markDirty(OrderSummary::class, $ids);
    },
);
```

To mark every partition from the one containing a key to the one containing
another key, use `markDirtyRange()`:

```php
$summaryManager->markDirtyRange(OrderSummary::class, 1000, 2000);
```

`markDirtyRange()` creates one dirty flag for each lowest-level partition in
the range. For a large range, refreshing it directly using
`rekalogika:analytics:refresh:range` or `SummaryManager::refresh()` is more
efficient.

Both methods insert the dirty flags using the connection of the summary's
entity manager, without flushing it. If a transaction is active, the flags are
part of it. They then schedule the refresh agent like a flush does. The refresh
agent processes the flags according to the
[refresh timing](./02-refreshing.md#automatic-refresh).

The methods work on one summary class. If several summaries share the same
source class, call them for each of the summaries.

## Database Triggers

If changes outside the ORM are common, or you cannot control where they are
made, the framework can generate PostgreSQL triggers that create the dirty
flags in the database itself:

```bash
# print the SQL, to be put in a migration
php bin/console rekalogika:analytics:trigger:dump

# print the SQL dropping the existing triggers
php bin/console rekalogika:analytics:trigger:dump --drop

# in development: install and drop the triggers directly
php bin/console rekalogika:analytics:trigger:install
php bin/console rekalogika:analytics:trigger:drop
```

The triggers are installed on the tables of the source entities, and on the
tables of the entities that the summaries read through an association:

* On a source table, an insertion, an update, or a deletion marks the affected
  partitions dirty. An update only marks a row if a column that a summary reads
  has changed.
* On the table of a related entity, an update marks the partitions of the
  source rows referring to the modified rows. A deletion affects the source
  rows only through a foreign key action, which fires the triggers of the
  source table.

The triggers are statement-level and use transition tables, so a statement
costs one `INSERT … SELECT` for each summary, regardless of the number of rows
affected.

Keep in mind:

* The triggers only create the dirty flags. They do not dispatch the refresh
  agent. Run `rekalogika:analytics:sweep` periodically, e.g. every minute, to
  dispatch the refresh agent for the summaries that have dirty flags but no
  pending refresh.
* The triggers write the time of the flags in the time zone PHP uses when the
  SQL is generated. This must be the time zone the application runs with.
* The triggers are generated from the summary metadata. Regenerate them after
  changing a summary.
* Class table inheritance, composite identifiers, `TRUNCATE`, and updates of
  primary keys are not supported.

## Verifying a Summary

To find out whether a summary has missed some changes, compare it against its
source:

```bash
# the whole summarized range
php bin/console rekalogika:analytics:verify 'App\Entity\OrderSummary'

# a range of source keys
php bin/console rekalogika:analytics:verify 'App\Entity\OrderSummary' 1000 2000

# 20 random partitions
php bin/console rekalogika:analytics:verify 'App\Entity\OrderSummary' --sample=20
```

The command rolls up the source data again, compares the result with the
summary table, and reports the partitions that differ. With `--repair`, it also
marks those partitions dirty, so that the refresh agent refreshes them. Use
`--batchsize` to roll up and compare more than one partition in a query.

The command fails if a partition differs, so you can run it periodically as a
check. It skips the partitions that are already dirty, and the ones containing
source entities that are not summarized yet. Floating-point measures are
compared in single precision, and HyperLogLog measures by their cardinality.

## Inspecting the Tracked Properties

To see which changes to a class refresh which summaries:

```bash
php bin/console rekalogika:analytics:debug:source 'App\Entity\Order'
```

If you omit the class, the command shows every source class. The output can
include these sections:

* **Tracked Properties**: the properties of the class whose changes refresh the
  summaries.
* **Read Through Associations**: for a class that summaries read through an
  association, e.g. `Customer`. It lists the properties whose changes refresh
  the source entities referring to it, and the path from the source class.
* **Untracked Related Paths**: the paths read through an association by a
  summary with `trackAssociations: false`.
* **Untracked To-Many Paths**: the paths read through a to-many association,
  whose changes are not detected.
