---
title: Data Cube
---

The result of a `Query` is the apex `CubeCell` that aggregates all the data in
the result.

## Class Diagram

![Data cube result class diagram](./diagrams/cube.light.svg#light)
![Data cube result class diagram](./diagrams/cube.dark.svg#dark)

## Definition

A `CubeCell` contains coordinates of dimension and a collection of measures.

Coordinates are a collection of dimensions, each of which is a property of the
summary entity. The coordinates instance also contains the dice predicate, which
is the filter expression applied to the query.

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

## Example Query

```php
use Doctrine\Common\Collections\Criteria;
use Rekalogika\Analytics\Contracts\SummaryManager;

/** @var SummaryManager $summaryManager */

$apexCube = $summaryManager
    ->createQuery()
    ->from(OrderSummary::class) // the summary entity class name
    ->withDimensions('country', 'category') // dimensions
    ->dice(Criteria::expr()->gte('time.year', 2023)) // filter expression
    ->getResult();
```

The `getResult()` method above returns the apex `CubeCell` that aggregates all
data in the year 2023 and beyond. Then, you can drill down or slice the cube to
get more specific `CubeCell` objects that involve the country and category
dimensions.

Because the query above only specifies the `country` and `category` dimensions,
you may only drill down or slice by those dimensions. If you try to drill down
or slice by a dimension that is not included in the query, it will throw an
exception.

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
value, the `$year2025InCountries` might contain several `CubeCell` objects, each
having a different country, such as `DE`, `US`, and `FR`, with their count
values adding to exactly 20.

![drillDown()](./diagrams/drillDown.light.svg#light)
![drillDown()](./diagrams/drillDown.dark.svg#dark)

:::tip

The `drillDown()` method can also accept an array of dimension names to drill
down multiple dimensions at once. You will get a cartesian product of all the
possible combinations of the specified dimensions.

:::

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

:::tip

The `rollUp()` method can also accept an array of dimension names to roll up
multiple dimensions at once.

:::

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

## `find()` method

`find()` is similar to `slice()`, but it matches the value using a
"fuzzy", non-exact comparison.

```php
use Rekalogika\Analytics\Contracts\Result\CubeCell;

/** @var CubeCell $year2025 */

$year2025InFrance = $year2025->find('country', 'fr');
```

In the above example, if the entity `Country` has its `__toString()` method
defined to return the country code, `find()` will try to match the value 'fr' to
that.

`find()` also accepts a callable as the second argument. The callable should
take a single argument and return a boolean value indicating whether the value
matches the criteria.

## `pivot()` method

The `pivot()` method allows you to change the order of dimensions in the
coordinates. It takes one or more dimension names as arguments and rearranges
the dimensions in the specified order.

![pivot()](./diagrams/pivot.light.svg#light)
![pivot()](./diagrams/pivot.dark.svg#dark)

## `dice()` method

The `dice()` method is meant to allow you to remove or update the dice predicate. However, it is not implemented yet.