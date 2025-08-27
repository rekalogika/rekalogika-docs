---
title: Data Cube Result
---

To get the result in the data cube format, call the `getCube()` method on the
`Result` object. It returns the apex `CubeCell` that has no dimension and thus
represents the entire data cube.

A `CubeCell` represents a single cell in the data cube. Each cell contains
coordinates of dimensions and measures. You can drill down from a cube cell into
a more specific cube by calling the `drillDown()` or `slice()` method.

## Class Diagram

![Data cube result class diagram](./diagrams/cube.light.svg#light)
![Data cube result class diagram](./diagrams/cube.dark.svg#dark)

## Definition

A `CubeCell` contains coordinates of dimension and measures. Coordinates are a
collection of dimensions, each of which is a property of the summary entity.
Measures are the properties that represent the aggregated values, such as
`count`, `price`.

Example: A `CubeCell` may contain coordinates with dimensions like:

 * `time.year` = `2023`
 * `country` = `DE`
 * `category` = `electronics`

In such a `CubeCell`, the measures might contain values of:

* `count` = `20`
* `price` = `1000.00`

It means that in the year 2023, there were 20 orders from Germany in the
electronics category, with a total price of 1000.00.

:::info

The dimensions in the coordinates are not in a particular order. The order of
dimensions in the coordinates does not matter.

:::

## Example Query

```php
use Doctrine\Common\Collections\Criteria;
use Rekalogika\Analytics\Contracts\SummaryManager;

/** @var SummaryManager $summaryManager */

$apexCube = $summaryManager
    ->createQuery()
    ->from(OrderSummary::class) // the summary entity class name
    ->withDimensions('time.year', 'country', 'category') // dimensions
    ->getResult()
    ->getCube();
```

The `getCube()` method of the query result returns the apex `CubeCell` that
aggregates the entire data cube. The apex `CubeCell` has no dimensions in its
coordinates. You can then drill down or slice to get more specific cube cells.

## `drillDown()` method

The `drillDown()` method allows you to drill down into a specific dimension. It
adds a new dimension to the coordinates and returns all the possible `CubeCell`,
each with a unique value for the specified dimension.

```php
use Rekalogika\Analytics\Contracts\Result\CubeCell;

/** @var CubeCell $year2025 */

$year2025Count = $year2025->getMeasures()->get('count')->getValue(); // e.g. 20
// highlight-next-line
$year2025InCountries = $year2025->drillDown('customerCountry');

$totalCount = 0;

foreach ($year2025InCountries as $year2025InACountry) {
    $totalCount += $year2025InACountry->getMeasures()->get('count')->getValue();
}

assert($totalCount === $year2025Count);
```

In the above example, if the `$year2025Cube` contains the number 20 as the count
value, the `$year2025InCountries` might contain several `CubeCell` objects,
each having a different country, such as `DE`, `US`, and `FR`, with
their count values adding to exactly 20.

![drillDown()](./diagrams/drillDown.light.svg#light)
![drillDown()](./diagrams/drillDown.dark.svg#dark)

## `rollUp()` method

The `rollUp()` method is the reverse of `drillDown()`. It allows you to roll up
the data cube to a higher level of aggregation. It returns the `CubeCell` that
represents the rolled-up data. `rollUp()` basically removes the specified
dimension from the coordinates and aggregates the measures accordingly.

```php
use Rekalogika\Analytics\Contracts\Result\CubeCell;

/** @var CubeCell $year2025InGermany */

$germany = $year2025InGermany->rollUp('time.year');
```

![rollUp()](./diagrams/rollUp.light.svg#light)
![rollUp()](./diagrams/rollUp.dark.svg#dark)

## `slice()` method

The `slice()` method allows you to slice the data cube by a specific dimension
and member. It adds a new dimension to the coordinates and returns the
corresponding `CubeCell`.

```php
use Rekalogika\Analytics\Contracts\Result\CubeCell;

/** @var CubeCell $year2025 */
/** @var Country $france */

$year2025InFrance = $year2025->slice('country', $france);
```

![slice()](./diagrams/slice.light.svg#light)
![slice()](./diagrams/slice.dark.svg#dark)

## `fuzzySlice()` method

`fuzzySlice()` is similar to `slice()`, but it matches the value using a
"fuzzy", non-exact comparison.

```php
use Rekalogika\Analytics\Contracts\Result\CubeCell;

/** @var CubeCell $year2025 */

$year2025InFrance = $year2025->fuzzySlice('country', 'fr');
```

In the above example, the entity `Country` has its `__toString()` method defined
to return the country code. Therefore, the `fuzzySlice()` method will match the
value 'fr' to the `Country` entity representing France.