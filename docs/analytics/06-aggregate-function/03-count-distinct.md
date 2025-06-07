---
title: Count Distinct
---

Count Distinct is an aggregate function that counts the number of distinct
values in a specified property. Analytics requires the
[postgresql-hll](https://github.com/citusdata/postgresql-hll) extension to be
installed in the database to use this function.

Example:

```php
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\AggregateFunction\CountDistinct;
use Rekalogika\Analytics\Attribute as Analytics;
use Rekalogika\Analytics\ValueResolver\EntityValueResolver;

class OrderSummary extends Summary implements HasQueryBuilderModifier
{
    // highlight-next-line
    #[ORM\Column(type: 'rekalogika_hll')]
    #[Analytics\Measure(
        // highlight-next-line
        function: new CountDistinct(new EntityValueResolver('customer')),
    )]
    private ?int $uniqueCustomers = null;
}
```

:::warning

Like with other implementations of Count Distinct in data warehousing and
parallel computing, this function returns an approximate count of distinct
values, not an exact count.

:::