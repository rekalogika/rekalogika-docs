---
title: Measures
---

Measures are quantitative values that are aggregated in a summary table. In SQL,
these are fields that you would use in a `SUM`, `COUNT`, and other aggregate
functions.

Measures are defined using the `#[Analytics\Measure]` attribute.

## Measure Definition

```php
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Brick\Money\Money;
use Rekalogika\Analytics\Core\Metadata as Analytics;
use Symfony\Component\Translation\TranslatableMessage;

class YourSummary extends Summary
{
    #[ORM\Column(type: Types::INTEGER)]
    // highlight-start
    #[Analytics\Measure(
        function: new Sum('price'),
        label: new TranslatableMessage('Total Price'),
    )]
    // highlight-end
    private ?int $price = null;

    // The getter allows you to optionally transform the property above if needed
    public function getPrice(): ?Money
    {
        return $this->price !== null ? Money::ofMinor($this->price, 'USD') : null;
    }
}
```

Arguments of the `#[Analytics\Measure]` attribute:

* `function`: An instance of an [`AggregateFunction`](../aggregate-function) that
  defines how to aggregate the measure.
* `label`: A label for the measure. An output renderer will be able to use it
  as a column header or a chart legend. It can be a string or a
  `TranslatableInterface` instance, which allows it to be translated into
  different languages.
* `unit`: A string or a `TranslatableInterface` instance that describes the unit
  of the measure. A user interface may use it to determine if two measures can
  be plotted together in the same chart axis.
* `hidden`: If set to `true`, user interface may choose to hide this measure
  from the user.

## Pseudo-Measures

It is also possible to define pseudo-measures. Currently, the only supported
pseudo-measure is `CoordinatesMeasure`, which uses the `Coordinates` of the cell
as the measure value. This can be used to add clickable actions to each cell in
a pivot table.

```php
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Brick\Money\Money;
use Rekalogika\Analytics\Core\Metadata as Analytics;
use Rekalogika\Analytics\Core\PseudoMeasure\CoordinatesMeasure;
use Symfony\Component\Translation\TranslatableMessage;

class YourSummary extends Summary
{
    #[Analytics\Measure(
        function: new CoordinatesMeasure(),
        label: new TranslatableMessage('Actions'),
    )]
    public ?Coordinates $actions = null;
}
```