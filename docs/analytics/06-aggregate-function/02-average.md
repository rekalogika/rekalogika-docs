---
title: Average
---

`Average` calculates the average value of a specified property. It requires
that other measures are defined for the sum and count of the property. The
average is computed as the sum divided by the count. `Average` is a virtual
measure and does not store its value in the database.

## Example

```php
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Types\Types;
use Rekalogika\Analytics\AggregateFunction\Average;
use Rekalogika\Analytics\AggregateFunction\Count;
use Rekalogika\Analytics\AggregateFunction\Sum;
use Rekalogika\Analytics\Attribute as Analytics;
use Rekalogika\Analytics\Model\Summary;
use Rekalogika\Analytics\ValueResolver\PropertyValueResolver;

class OrderSummary extends Summary
{
    #[ORM\Column(type: Types::INTEGER)]
    #[Analytics\Measure(
        function: new Sum(new PropertyValueResolver('item.price'),
    )]
    private ?int $price = null;

    #[ORM\Column(type: Types::INTEGER)]
    #[Analytics\Measure(
        function: new Count('id'),
    )]
    private ?int $count = null;

    #[Analytics\Measure(
        // highlight-start
        function: new Average(
            sumProperty: 'price',
            countProperty: 'count',
        ),
        // highlight-end
    )]
    private ?int $averageOrderValue = null;
}
```

In this example, the `Average` function uses the previously defined `price` and
`count` measures to compute the average order value. The `sumProperty` and
`countProperty` parameters specify which properties to use for the sum and count
calculations, respectively.

Note that it is not necessary to store the average value in the database, and
therefore the property does not have the `ORM\Column` attribute.