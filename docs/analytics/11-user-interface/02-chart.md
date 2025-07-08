---
title: Chart
---

To render the query result as a chart, you can use the `ChartBuilder` service.
It returns a `Chart` instance of the `symfony/ux-chartjs` package.

`ChartBuilder` is meant to be a simple service that tries to automatically
build a chart from a query result without requiring too much configuration.
While it is convenient, it is currently not very flexible.

Example:

```php
use Rekalogika\Analytics\Contracts\SummaryManager;
use Rekalogika\Analytics\Frontend\Chart\ChartBuilder;
use Rekalogika\Analytics\Frontend\Chart\ChartType;

/** @var SummaryManager $summaryManager */
/** @var ChartBuilder $chartBuilder */

$result = $summaryManager
    ->createQuery()
    // ...
    ->getResult();

$chart = $chartBuilder->createChart(
    result: $result,
    chartType: ChartType::Auto,
);
```

Then, in your Twig template, you can render the chart using the `render_chart()`
function provided by the `symfony/ux-chartjs` package:

```twig
{{ render_chart(chart) }}
```