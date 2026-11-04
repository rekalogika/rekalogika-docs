---
title: Summary Class
---

A summary entity is an entity that contains pre-aggregated data from the source
entity. To work with this package, you need to create one or more summary
entities for each source entity that you want to analyze.

## Example Source Entity

This is the example of an entity that we would like to analyze. Here, we have an
`Order`:

```php
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity()]
class Order
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne()]
    private ?Item $item = null;

    #[ORM\ManyToOne()]
    private ?Customer $customer = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $time = null;

    // setters, getters and other logic are omitted for brevity
}
```

The source entity must have a key field that has the following properties:

* Permanent, the value should not change in the lifetime of the entity. If it
  is changed through the ORM, both the old and the new partition are refreshed,
  but a change made outside the ORM is not detected.
* Monotonic, new entities get increasing values. Entities committed slightly
  out of order, e.g. by concurrent transactions, are still summarized.

Most of the time, you should be able to use the primary key of the entity as the
key field.

The source entity and its summary entities must be managed by the same entity
manager. Otherwise, a `MetadataException` is thrown when the metadata of the
summary is built.

## The Summary Entity

This is an example summary entity for the above `Order` entity. A summary table
is a standard Doctrine entity with additional attributes that define how the
data is rolled up from the source entity:

```php
use Brick\Money\Money;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Core\AggregateFunction\Count;
use Rekalogika\Analytics\Core\AggregateFunction\Sum;
use Rekalogika\Analytics\Metadata\Attribute as Analytics;
use Rekalogika\Analytics\Core\Partition\DefaultIntegerPartition;
use Rekalogika\Analytics\Core\Entity\BaseSummary;
use Rekalogika\Analytics\Core\ValueResolver\IdentifierValue;
use Rekalogika\Analytics\Core\ValueResolver\IntegerValue;
use Rekalogika\Analytics\Core\ValueResolver\PropertyValue;
use Rekalogika\Analytics\Time\Dimension\System\GregorianDateWithHour;
use Rekalogika\Analytics\Time\Metadata\TimeProperties;
use Symfony\Component\Translation\TranslatableMessage;

#[ORM\Entity()]
#[Analytics\Summary(
    sourceClass: Order::class,
    label: new TranslatableMessage('Orders'),
)]
class OrderSummary extends BaseSummary
{
    // 1. Partition

    #[ORM\Embedded()]
    #[Analytics\Partition(new IntegerValue('id'))]
    private DefaultIntegerPartition $partition;

    // 2. Dimensions

    #[ORM\Embedded()]
    #[Analytics\Dimension(
        source: new PropertyValue('time'),
        label: new TranslatableMessage('Time'),
    )]
    #[TimeProperties(
        sourceTimeZone: new \DateTimeZone('UTC'),
        summaryTimeZone: new \DateTimeZone('Asia/Jakarta'),
    )]
    private GregorianDateWithHour $time;

    #[ORM\ManyToOne()]
    #[Analytics\Dimension(
        source: new IdentifierValue('customer.country'),
        label: new TranslatableMessage('Customer Country'),
    )]
    private ?Country $customerCountry = null;

    #[ORM\ManyToOne()]
    #[Analytics\Dimension(
        source: new IdentifierValue('customer.country.region'),
        label: new TranslatableMessage('Customer Region'),
    )]
    private ?Region $customerRegion = null;

    #[ORM\Column(enumType: Gender::class, nullable: true)]
    #[Analytics\Dimension(
        source: new PropertyValue('customer.gender'),
        label: new TranslatableMessage('Customer Gender'),
    )]
    private ?Gender $customerGender = null;

    // 3. Measures

    #[ORM\Column(type: Types::INTEGER)]
    #[Analytics\Measure(
        function: new Sum('item.price'),
        label: new TranslatableMessage('Price'),
    )]
    private ?int $price = null;

    #[ORM\Column(type: Types::INTEGER)]
    #[Analytics\Measure(
        function: new Count('id'),
        label: new TranslatableMessage('Count'),
    )]
    private ?int $count = null;

    // 4. An example getter with business logic

    public function getPrice(): ?Money
    {
        if ($this->price === null) {
            return null;
        }

        return Money::ofMinor($this->price, 'EUR');
    }
}
```

## Sections

### 1. Partition

The `partition` attribute is used to define how the data is partitioned. The
default `DefaultIntegerPartition` here should be sufficient for
auto-incrementing primary key of the source entity.

Read more about partitions in the [partitioning](partitioning) section.

### 2. Dimensions

These are the properties that have distinct, descriptive values. You will use
these properties to filter and group the data. Using SQL as an analogy, these
are the fields that you would use in a `GROUP BY` and/or `WHERE` clause.

All dimensions are indicated by the `#[Analytics\Dimension]` attribute. The most
important argument is the `source` argument. This argument is used to resolve
the value of the dimension from the source entity. A `PropertyValue`
points to the value of a property in the source entity. An `IdentifierValue`
points to a related entity.

A dimension can be hierarchical, like the `time` dimension above. A hierarchical
dimension is modeled using a Doctrine embeddable. Inside the class, the time
dimension is further divided into `year`, `month`, `day`, and more.

Read more about dimensions in the [dimensions](dimensions) section.

### 3. Measures

These are the properties that you want to aggregate. Using SQL as an analogy,
you would use these fields in a `SUM`, `COUNT`, and other aggregate functions.

Measures are indicated by the `#[Analytics\Measure]` attribute. The most
important argument is the `function` argument. It is used to define the
aggregation function.

Read more about measures in the [measures](measures) section.

## 4. Getters

Just like a regular Doctrine entity, you can define getters in the summary
entity. You can also have simple business logic in these getters. For example,
the `getPrice()` getter above converts the price to a `Money` object.

## Labels and Translations

All the items in the summary entity have a `label` attribute that accepts a
string or a `TranslatableInterface`. These labels are used in the user interface
to identify the item, for example in a table header or a chart legend.

If a `TranslatableInterface` is used, the label will be translated using the
Symfony translation component.

## Indexing

The framework automatically creates indexes for the summary table. You don't
need to create any indexes manually.

## Changing Summary Entity

A summary entity should not be changed after it is created and populated.

If you need to change the summary entity, you should create a new one, refresh
the data and wait until it is completed, and then retire the old one. If you
anticipate that you will have to change the summary entity, we suggest
date-coding the summary entity class name, for example `OrderSummary20250115`.

## Summary Entity is an Entity but not an Entity

A summary entity is defined as a Doctrine entity. But it is mainly for defining
the structure of the summary table and the summarization behavior. You will
never interact with a real instance of the summary entity. Instead, you query
the summary table using the `SummaryManager`, and get the result not in the
form of a summary entity.

An event listener is installed to prevent you from accidentally persisting,
updating, or deleting a summary entity.

## Filtering the Source Entities

By default, a summary covers every source entity. To summarize only some of
them, use the `filter` argument of the `Summary` attribute. It takes a Doctrine
Collections expression whose fields are [property
paths](../05-value-resolver/05-property-path.md) of the source entity:

```php
use Doctrine\Common\Collections\Expr\Comparison;

#[ORM\Entity()]
#[Analytics\Summary(
    sourceClass: Order::class,
    // highlight-next-line
    filter: new Comparison('status', '<>', 'cancelled'),
)]
class OrderSummary extends BaseSummary
{
    // ...
}
```

Use `CompositeExpression` to combine several conditions. A condition that is
not a comparison, e.g. `INSTANCE OF` or a comparison between two properties,
can be written in DQL using `SourceCondition`. As in a
[`CustomExpression`](../05-value-resolver/02-custom-expression.md), property
paths go in square brackets:

```php
use Doctrine\Common\Collections\Expr\Comparison;
use Doctrine\Common\Collections\Expr\CompositeExpression;
use Rekalogika\Analytics\Core\Filter\SourceCondition;

#[ORM\Entity()]
#[Analytics\Summary(
    sourceClass: Order::class,
    // highlight-start
    filter: new CompositeExpression(CompositeExpression::TYPE_AND, [
        new Comparison('status', '<>', 'cancelled'),
        new Comparison('customer.country.id', 'IN', ['ID', 'SG']),
        new SourceCondition('[customer.*] INSTANCE OF App\Entity\IndividualCustomer'),
        new SourceCondition('[paidAt] > [createdAt]'),
    ]),
    // highlight-end
)]
class OrderSummary extends BaseSummary
{
    // ...
}
```

PHP attribute arguments must be constant expressions, so build the expression
with `new Comparison(...)` and `new CompositeExpression(...)`.
`Criteria::expr()` cannot be used here. The values must be constants.

A `Comparison` supports the operators `=`, `<>`, `<`, `<=`, `>`, `>=`, `IN`,
`NIN`, `CONTAINS`, `STARTS_WITH`, and `ENDS_WITH`. Other operators and
expression types cause a `MetadataException`.

The filter applies to every query the framework makes against the source
entities. That includes rolling up the data into the summary table,
determining the key range to refresh, and
[getting the source entities](../13-source-entities/index.md) of a cell.

### Change Detection

The properties the filter reads are [tracked](../03-housekeeping/01-change-detection.md)
in the same way as the properties used by the dimensions and measures. If a
change moves a source entity into or out of the filter, the affected partition
is refreshed.

In a `SourceCondition`, only the paths in square brackets are tracked. If you
write a path without brackets, for example inside a subquery, changes to it are
not detected.

### Limitations

* A comparison through an association, e.g. `customer.country.id`, excludes
  the source entities whose association is null, unless the filter allows null
  explicitly.
* A filter cannot read a path through a to-many association, because the join
  would count a source entity more than once. Such a filter causes a
  `MetadataException`. Use a `SourceCondition` with an `EXISTS` subquery
  instead.
