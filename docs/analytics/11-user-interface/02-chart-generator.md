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
    ->getResult()
    ->getCube();

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