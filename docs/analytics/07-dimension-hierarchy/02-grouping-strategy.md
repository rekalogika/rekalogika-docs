---
title: Grouping Strategy
---

A summary table stores pre-aggregated rows for a number of *grouping sets*. A
grouping set is a combination of dimensions. For example, the grouping set
`(year, country)` stores one row for each year and country, and the grouping
set `(country)` stores one row for each country, with all the years added
together.

A query reads the stored grouping set that contains every dimension involved in
the query, and aggregates it further if necessary. The grouping strategy
decides which grouping sets are stored.

## The Default: Every Combination

By default, a summary stores every combination of its dimensions. This is the
cube of the dimensions: each plain dimension is either present or absent, and
each dimension group contributes each of its own grouping sets.

This means any combination of dimensions can be queried. But the number of
grouping sets multiplies with every added dimension:

| Dimensions | Grouping sets |
| --- | --- |
| 4 plain dimensions | 2⁴ = 16 |
| 8 plain dimensions | 2⁸ = 256 |
| 8 plain dimensions and a time hierarchy with 6 levels | 2⁸ × 6 = 1,536 |
| 9 plain dimensions and two time hierarchies with 6 levels each | 2⁹ × 6 × 6 = 18,432 |

Each grouping set stores up to one row for every distinct combination of its
dimensions in each partition. With many dimensions, especially ones with many
distinct values, the summary table can become larger than the source table.
Refreshing it also becomes slow: grouping sets over 4,000 are split into
batches, and each batch scans the source data again.

## Dimension Groups

The grouping sets inside a dimension group are determined by the grouping
strategy of the group, specified in the `#[DimensionGroup]` attribute:

```php
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Core\Entity\BaseDimensionGroup;
use Rekalogika\Analytics\Core\GroupingStrategy\RollUpStrategy;
use Rekalogika\Analytics\Metadata\Attribute\DimensionGroup;

#[ORM\Embeddable()]
// highlight-next-line
#[DimensionGroup(groupingStrategy: new RollUpStrategy(['year', 'month', 'date']))]
class MyDate extends BaseDimensionGroup
{
    // dimensions: year, month, date
}
```

The built-in strategies, with the grouping sets they produce for the children
`a`, `b`, and `c`:

| Strategy | Grouping sets |
| --- | --- |
| `RollUpStrategy` | `(a, b, c)`, `(a, b)`, `(a)`, `()` |
| `CubeStrategy` | every combination of `a`, `b`, and `c`, 8 in total |
| `FieldSetStrategy` | `(a, b, c)` only |
| `GroupingSetStrategy` | `(a)`, `(b)`, `(c)`, each child separately |
| `ExplicitGroupingSetsStrategy` | only the listed sets, see below |

All the strategies are in the `Rekalogika\Analytics\Core\GroupingStrategy`
namespace.

A `RollUpStrategy` is the natural choice for a hierarchy: a month is always
stored together with its year, so `(month)` alone is never stored, but it can
be queried from `(year, month)`.

A `GroupingSetStrategy` is useful for alternative hierarchies that are never
combined, like the civil and ISO week calendars in `TimeGroup`. A query that
combines dimensions from two of the alternatives cannot be answered.

## Explicit Grouping Sets in a Summary

If a summary has many dimensions but is only queried in a few known ways,
specify the grouping sets to store in the `#[Summary]` attribute using
`ExplicitGroupingSetsStrategy`:

```php
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Core\Entity\BaseSummary;
use Rekalogika\Analytics\Core\GroupingStrategy\ExplicitGroupingSetsStrategy;
use Rekalogika\Analytics\Metadata\Attribute as Analytics;

#[ORM\Entity()]
#[Analytics\Summary(
    sourceClass: Order::class,
    // highlight-start
    groupingStrategy: new ExplicitGroupingSetsStrategy([
        ['time', 'customerCountry', 'customerType', 'itemCategory'],
        ['customerRegion'],
        ['customerGender', 'customerType'],
    ]),
    // highlight-end
)]
class OrderSummary extends BaseSummary
{
    // ...
}
```

Each set is a list of the root dimensions of the summary, by their property
names. An empty set `[]` stores the grand total.

A dimension group in a set keeps its own grouping strategy. If `time` is a
roll up of year, month, and date, then the set `['time', 'customerCountry']`
stores these grouping sets:

* `(year, month, date, customerCountry)`
* `(year, month, customerCountry)`
* `(year, customerCountry)`
* `(customerCountry)`

Duplicate grouping sets, from overlapping sets, are stored only once. An
unknown dimension name causes an error when the summary metadata is created.

### Choosing a Grouping Set During Query

A query can select any subset of a stored grouping set. The query engine picks
the smallest stored grouping set that contains every dimension involved in the
query, including the dimensions used in the query's filter, then aggregates the
rows to the requested dimensions.

With the example above:

| Query dimensions | Grouping set used |
| --- | --- |
| `customerType` | `(customerGender, customerType)` |
| `customerCountry`, `itemCategory` | `(customerCountry, customerType, itemCategory)` |
| `time.civil.year`, filtered by `itemCategory` | `(year, customerCountry, customerType, itemCategory)` |
| `customerRegion`, `customerGender` | none, an error |

If no stored grouping set contains all the dimensions, the query throws
`GroupingSetNotAvailable`. The exception is translatable, and the frontend
renderers display its message to the user.

### Guidelines

* Store one fine grouping set containing every dimension the queries need.
  Every query that is a subset of it can be answered. Its size is bounded by
  the number of distinct combinations of its dimensions in each partition,
  which is usually much smaller than the number of source rows.
* Add small grouping sets for frequent queries that only need a few
  dimensions, such as the list of choices in a filter. Otherwise, they are
  aggregated from the fine grouping set at query time.
* Keep dimension groups at the granularity the queries actually use. Each level
  in a hierarchy multiplies the grouping sets.
* With the default cube, every combination can be queried. With explicit
  grouping sets, a user interface that allows arbitrary combinations, like the
  pivot table panel, may produce a combination that is not available.
