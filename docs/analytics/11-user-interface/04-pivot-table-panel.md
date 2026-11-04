---
title: Pivot Table Panel
---

The `rekalogika/analytics-ux-panel` package provides a [Symfony
UX](https://ux.symfony.com/) panel that lets users build a pivot table
interactively. They drag the dimensions to the rows, columns, and filters, and
the measures to the values. Then they narrow down the data using the filter
controls below the panel.

The [quickstart](../01-quickstart.md#creating-the-pivot-table-page) has a
complete working example. This page describes the parts in more detail.

## Requirements

* `rekalogika/analytics-bundle`.
* Symfony StimulusBundle, with AssetMapper or Webpack Encore.
* [Turbo](https://ux.symfony.com/turbo). The panel uses Turbo Frames and Turbo
  Streams to update the output without reloading the page.

## Installation

```bash
composer require rekalogika/analytics-ux-panel
```

Symfony Flex registers the bundle, and adds the Stimulus controllers and their
JavaScript dependencies to your application. Without Flex, register the bundle
manually:

```php title="config/bundles.php"
return [
    // ...
    Rekalogika\Analytics\UX\PanelBundle\RekalogikaPanelBundle::class => ['all' => true],
];
```

With AssetMapper, install the JavaScript dependencies:

```bash
php bin/console importmap:install
```

## The Controller

The panel keeps its state in the URL, as a JSON-encoded query parameter. In
the controller, `PivotAwareQueryFactory` turns that state into a
`PivotAwareQuery`:

```php
use App\Entity\OrderSummary;
use Rekalogika\Analytics\Contracts\SummaryManager;
use Rekalogika\Analytics\Frontend\Html\TableRenderer;
use Rekalogika\Analytics\UX\PanelBundle\PivotAwareQueryFactory;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\MapQueryParameter;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/analytics/orders')]
public function index(
    SummaryManager $summaryManager,
    PivotAwareQueryFactory $pivotAwareQueryFactory,
    TableRenderer $tableRenderer,
    #[MapQueryParameter] ?string $parameters = null,
): Response {
    $parameters = json_decode($parameters ?? '', true);

    if (!\is_array($parameters)) {
        $parameters = [];
    }

    $query = $pivotAwareQueryFactory->createFromParameters(
        query: $summaryManager->createQuery()->from(OrderSummary::class),
        parameters: $parameters,
    );

    $pivotTable = $tableRenderer->renderPivotTable(
        cube: $query->getResult(),
        rows: $query->getRows(),
        columns: $query->getColumns(),
        measures: $query->getValues(),
    );

    return $this->render('analytics/orders.html.twig', [
        'query' => $query,
        'pivotTable' => $pivotTable,
    ]);
}
```

You can set up the query before passing it to the factory, e.g. to restrict
the data that the user can see using `dice()`. The filters chosen by the user
are added to it using `andDice()`.

The parameters have this structure:

```json
{
    "rows": ["time.civil.year"],
    "columns": ["@values"],
    "values": ["revenue", "count"],
    "filters": ["status"],
    "filterExpressions": {
        "status": { "values": ["paid"] }
    }
}
```

`@values` is a placeholder for the measures, so that they can be placed in the
rows or the columns. The parameters come from the browser, so they are
validated: unknown and hidden dimensions and measures are ignored, and a
dimension cannot be in both the rows and the columns.

`PivotAwareQuery` provides these methods, among others:

* `getRows()`, `getColumns()`, `getValues()`, and `getFilters()`: the items
  chosen by the user.
* `getResult()`: executes the query, and returns the result as a `CubeCell`.

Besides a pivot table, you can use the result for anything else, e.g. a
[chart](./02-chart-generator.md) using `getDimensions()` and `getValues()`.

## The Template

`analytics_render_control()` renders the panel:

```twig
{{ analytics_render_control(
    query: query,
    output: pivotTable,
    target: 'pivot-table',
    urlParameter: 'parameters',
) }}

<div id="pivot-table"></div>
```

| Argument       | Description                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------- |
| `query`        | The `PivotAwareQuery`.                                                                             |
| `output`       | The HTML to show, e.g. the rendered pivot table.                                                   |
| `target`       | The ID of the element where the output is shown.                                                   |
| `urlParameter` | The name of the URL query parameter holding the state of the panel. It must match the parameter read by the controller. |

When the user changes the panel, it updates the URL parameter, and fetches the
page again using Turbo. The new output is put in the `target` element, and the
filter controls are updated, without reloading the page. Because the state is
in the URL, the user can bookmark or share the page, and use the back button.

The panel is styled using Bootstrap 5.

### Several Panels on the Same Page

You can have several panels on the same page, e.g. for different summaries. Give
each of them its own `urlParameter` and `target`:

```twig
{{ analytics_render_control(
    query: ordersQuery,
    output: ordersTable,
    target: 'orders-table',
    urlParameter: 'orders',
) }}

<div id="orders-table"></div>

{{ analytics_render_control(
    query: customersQuery,
    output: customersTable,
    target: 'customers-table',
    urlParameter: 'customers',
) }}

<div id="customers-table"></div>
```

In the controller, read each parameter, and create a `PivotAwareQuery` for
each of them.

## Filters

Every dimension in the rows, columns, or filters gets a filter control. The type
of the control depends on the dimension:

| Dimension                                   | Filter                                                                     |
| ------------------------------------------- | -------------------------------------------------------------------------- |
| A time bin, e.g. a year, a month, or a date | Number ranges, e.g. `2020-2022,2024`. The control shows the expected format. |
| A related entity                            | A choice of the first 100 distinct values.                                 |
| An enum                                     | A choice of the cases of the enum.                                         |
| Anything else                               | No filter.                                                                 |

In the choice filter, the user can also select the null value, shown using the
`nullLabel` of the dimension.

### Custom Filter Resolvers

The filter of a dimension is determined by the `FilterResolver` services. To
choose another filter for some of your dimensions, implement a
`FilterResolver`. It returns a `FilterSpecification`, which consists of the
filter class and its options, or throws `DimensionNotSupportedByFilter` to let
the next resolver decide.

For example, to use a date picker for the dimensions using the `Date` time
bin:

```php
use Rekalogika\Analytics\Metadata\Summary\DimensionMetadata;
use Rekalogika\Analytics\Time\Bin\Gregorian\Date;
use Rekalogika\Analytics\Time\Filter\TimeBinDateRangeFilterOptions;
use Rekalogika\Analytics\Time\ValueResolver\TimeBinValueResolver;
use Rekalogika\Analytics\UX\PanelBundle\DimensionNotSupportedByFilter;
use Rekalogika\Analytics\UX\PanelBundle\Filter\DateRange\DateRangeFilter;
use Rekalogika\Analytics\UX\PanelBundle\FilterResolver;
use Rekalogika\Analytics\UX\PanelBundle\FilterSpecification;

final readonly class DateFilterResolver implements FilterResolver
{
    #[\Override]
    public function getFilterFactory(DimensionMetadata $dimension): FilterSpecification
    {
        $valueResolver = $dimension->getValueResolver();

        if (
            !$valueResolver instanceof TimeBinValueResolver
            || $valueResolver->getTypeClass() !== Date::class
        ) {
            throw new DimensionNotSupportedByFilter();
        }

        return new FilterSpecification(
            DateRangeFilter::class,
            new TimeBinDateRangeFilterOptions(
                timeBinClass: Date::class,
                label: $dimension->getLabel(),
                help: null,
            ),
        );
    }
}
```

With autoconfiguration, your resolver is registered automatically, and is
consulted before the built-in ones.

The date range filter accepts a start date, an end date, or both. The dates
must be in the `YYYY-MM-DD` format used by the date picker. Anything else, e.g.
an invalid date like `2024-02-30`, is ignored.

The available filters are:

* `ChoiceFilter`, with a `ChoiceFilterOptions` providing the choices, e.g.
  `DefaultChoiceFilterOptions`.
* `DateRangeFilter`, with a `DateRangeFilterOptions`, e.g.
  `TimeBinDateRangeFilterOptions`.
* `NumberRangesFilter`, with a `NumberRangesFilterOptions`.
* `NullFilter`, which does not filter.
