---
title: Data Cube Result
---

To get the result in the data cube format, call the `getCube()` method on the
`Result` object. It returns the apex `CubeCell` that has no dimension, and thus
represents the entire data cube.

A `CubeCell` represents a single cell in the data cube. Each cell contains a
tuple of dimensions and measures. You can drill down from a cube cell into
a more specific cube by calling the `drillDown()` or `slice()` method.

:::

## Class Diagram

![Data cube result class diagram](./diagrams/cube.light.svg#light)
![Data cube result class diagram](./diagrams/cube.dark.svg#dark)

## Definition

A `CubeCell` contains a tuple and measures. A tuple is a collection of
dimensions, each of which is a property of the summary entity. Measures are
the properties that represent the aggregated values, such as `count`, `price`.

Example: A `CubeCell` can contain a tuple with dimensions like `time.year` =
`2023`, `customerCountry` = `DE`, and `itemCategory` = `electronics`. In such a
`CubeCell`, the measures might include `count` = `20` and `price` = `1000.00`.
It means that in the year 2023, there were 20 orders from Germany in the
electronics category, with a total price of 1000.00.

## Example Query

```php
use Doctrine\Common\Collections\Criteria;
use Rekalogika\Analytics\Contracts\SummaryManager;

/** @var SummaryManager $summaryManager */

$apexCube = $summaryManager
    ->createQuery()
    ->from(OrderSummary::class) // the summary entity class name
    ->groupBy('time.year', 'customerCountry', 'itemCategory') // dimensions
    ->select('price', 'count') // measures
    ->getResult()
    ->getCube();
```

## `drillDown()` method

The `drillDown()` method allows you to drill down into a specific dimension. It
returns the `CubeCells` object that contains all the resulting `CubeCell`.

```php
use Rekalogika\Analytics\Contracts\Result\CubeCell;

/** @var CubeCell $apexCube */

$customerCountryCubes = $apexCube->drillDown('customerCountry');
```

In the above example, if the `$apexCube` contains the number 20 as the count
value, the `$customerCountryCubes` might result in several `CubeCell` objects,
each having different customer countries, such as `DE`, `US`, and `FR`, with
their count values adding to exactly 20.

## `rollUp()` method

The `rollUp()` method allows you to roll up the data cube to a higher level of
aggregation. It returns the `CubeCell` that represents the rolled-up data.
`rollUp()` basically removes the specified dimension from the tuple and
aggregates the measures accordingly.

```php
use Rekalogika\Analytics\Contracts\Result\CubeCell;

/** @var CubeCell $cubeOfCountryAndYear */

$cubeOfYear = $cubeOfCountryAndYear->rollUp('country');
```

## `slice()` method

TBD