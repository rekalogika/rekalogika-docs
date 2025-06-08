---
title: Standard Deviation
---

`StdDev` is an aggregate function that calculates the standard deviation of a
specified property. It requires these other measures to be defined on the
property:

* `Sum` - to calculate the sum of the property values.
* `Count` - to count the number of values.
* `SumSquare` - to calculate the sum of the squares of the property values.

`StdDev` is a virtual measure and does not store its value in the database.

## Example

```php
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\AggregateFunction\Count;
use Rekalogika\Analytics\AggregateFunction\StdDev;
use Rekalogika\Analytics\AggregateFunction\Sum;
use Rekalogika\Analytics\AggregateFunction\SumSquare;
use Rekalogika\Analytics\Attribute as Analytics;
use Rekalogika\Analytics\ValueResolver\IdentifierValueResolver;

class OrderSummary extends Summary
{
    #[ORM\Column(type: Types::INTEGER)]
    #[Analytics\Measure(
        function: new Sum('item.price'),
    )]
    private ?int $price = null;

    #[ORM\Column(type: Types::FLOAT)]
    #[Analytics\Measure(
        function: new SumSquare('item.price'),
        hidden: true,
    )]
    private ?float $priceSumSquare = null;

    #[ORM\Column(type: Types::INTEGER)]
    #[Analytics\Measure(
        function: new Count('id'),
    )]
    private ?int $count = null;

    #[Analytics\Measure(
        // highlight-start
        function: new StdDev(
            sumSquareProperty: 'priceSumSquare',
            countProperty: 'count',
            sumProperty: 'price',
        ),
        // highlight-end
    )]
    private ?int $priceStdDev = null;
}
```

:::note

It is not necessary to store the standard deviation value in the database, and
therefore the property does not need the `ORM\Column` attribute.

:::

## `SumSquare` Function

The `SumSquare` function is used to calculate the sum of the squares of the
specified property values. It is a building block for many statistical
functions, including `StdDev`. However, the end users are probably not
interested in the result of the `SumSquare` function itself, and you can hide it
from UI by using the `hidden` parameter in the `Measure` attribute like in the
example above.