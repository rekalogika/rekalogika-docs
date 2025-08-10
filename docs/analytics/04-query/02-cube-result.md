---
title: Data Cube Result
---

To get the result in the data cube format, call the `getCube()` method on the
`Result` object. It returns the apex `CubeCell` that has no dimension, and thus
represents the entire data cube.

A `CubeCell` represents a single cell in the data cube. Each cell contains a
tuple of dimensions and measures. You can drill down from a cube cell into
a more specific cube by calling the `drillDown()` or `slice()` method.

## Class Diagram

![Data cube result class diagram](./diagrams/cube.light.svg#light)
![Data cube result class diagram](./diagrams/cube.dark.svg#dark)

## Definition

A `CubeCell` contains a tuple and measures. A tuple is a collection of
dimensions, each of which is a property of the summary entity. Measures are
the properties that represent the aggregated values, such as `count`, `price`.

Example: A `CubeCell` may contain a tuple with dimensions like:

 * `time.year` = `2023`
 * `country` = `DE`
 * `category` = `electronics`

In such a `CubeCell`, the measures might contain values of:

* `count` = `20`
* `price` = `1000.00`

It means that in the year 2023, there were 20 orders from Germany in the
electronics category, with a total price of 1000.00.

:::info

The dimensions in the tuple are not in a particular order. The order of
dimensions in the tuple does not matter.


:::

## Example Query

```php
use Doctrine\Common\Collections\Criteria;
use Rekalogika\Analytics\Contracts\SummaryManager;

/** @var SummaryManager $summaryManager */

$apexCube = $summaryManager
    ->createQuery()
    ->from(OrderSummary::class) // the summary entity class name
    ->groupBy('time.year', 'country', 'category') // dimensions
    ->select('price', 'count') // measures
    ->getResult()
    ->getCube();
```

The `getCube()` method of the query result returns the apex `CubeCell` that
contains the entire data cube. You can then drill down into this cube to get
more specific cubes.

## `drillDown()` method

The `drillDown()` method allows you to drill down into a specific dimension. It
adds a new dimension to the tuple and returns all the possible `CubeCell`, each
with a unique value for the specified dimension.

```php
use Rekalogika\Analytics\Contracts\Result\CubeCell;

/** @var CubeCell $year2025Cube */

$year2025WithCountryCubes = $year2025Cube->drillDown('customerCountry');
```

In the above example, if the `$year2025Cube` contains the number 20 as the count
value, the `$customerCountryCubes` might result in several `CubeCell` objects,
each having different customer countries, such as `DE`, `US`, and `FR`, with
their count values adding to exactly 20.

![drillDown()](./diagrams/drillDown.light.svg#light)
![drillDown()](./diagrams/drillDown.dark.svg#dark)

## `rollUp()` method

The `rollUp()` method allows you to roll up the data cube to a higher level of
aggregation. It returns the `CubeCell` that represents the rolled-up data.
`rollUp()` basically removes the specified dimension from the tuple and
aggregates the measures accordingly.

```php
use Rekalogika\Analytics\Contracts\Result\CubeCell;

/** @var CubeCell $france2025 */

$france = $france2025->rollUp('time.year');
```

![rollUp()](./diagrams/rollUp.light.svg#light)
![rollUp()](./diagrams/rollUp.dark.svg#dark)

## `slice()` method

The `slice()` method allows you to slice the data cube by a specific dimension
and value. It adds a new dimension to the tuple and returns the corresponding
`CubeCell`.

```php
use Rekalogika\Analytics\Contracts\Result\CubeCell;

/** @var CubeCell $year2025Cube */

$year2025WithCountryCube = $franceCube->slice('time.year', 2025);
```

![slice()](./diagrams/slice.light.svg#light)
![slice()](./diagrams/slice.dark.svg#dark)