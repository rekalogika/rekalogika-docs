---
title: Count, Sum, Max, Min
---

These are self-decomposable aggregation functions, which are the simplest form
of aggregate functions. They all take a string or `ValueResolver` as an
argument, which must point to the property to be aggregated. A string will be
converted to a `PropertyValue`.

## Example

```php
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Types\Types;
use Rekalogika\Analytics\Core\AggregateFunction\Count;
use Rekalogika\Analytics\Core\AggregateFunction\Sum;
use Rekalogika\Analytics\Core\Metadata as Analytics;
use Rekalogika\Analytics\Core\Entity\Summary;
use Rekalogika\Analytics\Core\ValueResolver\PropertyValue;

class OrderSummary extends Summary
{
    #[ORM\Column(type: Types::INTEGER)]
    #[Analytics\Measure(
        // highlight-next-line
        function: new Sum(new PropertyValue('item.price'),
    )]
    private ?int $price = null;

    #[ORM\Column(type: Types::INTEGER)]
    #[Analytics\Measure(
        // highlight-next-line
        function: new Count('id'),
    )]
    private ?int $count = null;
}
```