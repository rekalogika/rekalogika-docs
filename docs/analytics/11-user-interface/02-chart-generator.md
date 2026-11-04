---
title: Chart Generator
---

To render the query result as a chart, you can use the `ChartGenerator` service.
It returns a `Chart` instance from the `symfony/ux-chartjs` package.

`ChartGenerator` is meant to be a simple service that tries to automatically
build a chart from a query result without requiring too much configuration.
While it is convenient, it is also not very flexible.

Example:

```php
use Rekalogika\Analytics\Contracts\SummaryManager;
use Rekalogika\Analytics\Frontend\Chart\ChartGenerator;
use Rekalogika\Analytics\Frontend\Chart\ChartType;

/** @var SummaryManager $summaryManager */
/** @var ChartGenerator $chartGenerator */

$cube = $summaryManager
    ->createQuery()
    // ...
    ->getResult();

$chart = $chartGenerator->createChart(
    cube: $cube,
    dimensions: ['time.month'],
    measures: ['price'],
    chartType: ChartType::Auto,
);
```

Then, in your Twig template, you can render the chart using the `render_chart()`
function provided by the `symfony/ux-chartjs` package:

```twig
{{ render_chart(chart) }}
```
## Chart Types

The `chartType` argument accepts one of the `ChartType` cases:

| Chart type   | Dimensions                  | Measures                     |
| ------------ | --------------------------- | ---------------------------- |
| `Bar`        | The first one               | All                          |
| `Line`       | The first one               | All                          |
| `GroupedBar` | The first two, at least two | The first one                |
| `StackedBar` | The first two, at least two | The first one                |
| `Pie`        | The first one               | The first one                |
| `Auto`       | Chosen automatically        | Depends on the chosen type   |

With `Auto`, the generator chooses the chart type from the dimensions:

* With one dimension, it creates a line chart if the members of the dimension
  form a sequence, like the members of a time dimension. Otherwise, it creates a
  bar chart.
* With two or more dimensions, it creates a grouped bar chart.

## Behavior

* In bar and line charts, measures with different units are plotted on separate
  y axes. The additional axes alternate between the right and the left side of
  the chart.
* The title of a y axis is the label of the measure, followed by its unit if it
  has one. If several measures share the axis, the title is their common unit,
  or no title if they have no unit.
* A missing value, e.g. for a member added to fill a gap in a sequence, or a
  non-finite value like `INF` or `NAN`, is shown as a gap, not as zero.

## Errors

If the chart cannot be created from the input, the generator throws
`UnsupportedData`, for example if no dimension or no measure is given, if a
grouped or stacked bar chart is given only one dimension, or if the result is
empty. You can catch it to show a message instead of the chart:

```php
use Rekalogika\Analytics\Frontend\Chart\UnsupportedData;

try {
    $chart = $chartGenerator->createChart(
        cube: $cube,
        dimensions: ['time.month'],
        measures: ['price'],
    );
} catch (UnsupportedData) {
    $chart = null;
}
```
