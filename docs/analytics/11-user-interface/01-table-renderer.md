---
title: Table Renderer
---

To transform the query result into a table or a pivot table, you can use the
`TableRenderer` service.

## Rendering a Pivot Table or Regular Table

The `renderPivotTable()` and `renderTable()` methods will return a pivot table
and regular table, respectively, in HTML string that you can use in your view.

```php
use Rekalogika\Analytics\Contracts\SummaryManager;
use Rekalogika\Analytics\Frontend\Exception\AnalyticsFrontendException;
use Rekalogika\Analytics\Frontend\Html\TableRenderer;
use Symfony\Contracts\Translation\TranslatorInterface;

/** @var SummaryManager $summaryManager */
/** @var TableRenderer $tableRenderer */
/** @var TranslatorInterface $translator */

$result = $summaryManager
    ->createQuery()
    // ...
    ->getResult();

// renderPivotTable() returns a pivot table (or throws an exception if it cannot)
$table = $tableRenderer->renderPivotTable(
    cube: $result->getCube(),
    rows: ['time.year', 'category'],
    columns: ['@values'],
    measures: ['price', 'count'],
);

// renderTable() returns a regular table
$table = $tableRenderer->renderTable(
    table: $result->getTable(),
    measures: ['price', 'count'],
);
```

`@values` is a special dimension value that represents the measures of the
query.

## Exception Handling

By default, any error message will be rendered in the resulting HTML. If you
want to handle exceptions yourself, you can add the argument `throwException:
true` to the `renderPivotTable()` or `renderTable()` methods.

The rendering methods may throw an `AnalyticsFrontendException` if the rendering
fails. `AnalyticsFrontendException` is guaranteed to have a user-friendly,
translatable error message that can be safely displayed to the user. Other
exceptions are not guaranteed to have a user-friendly message, and should not be
displayed to the user directly.

## Changing the Theme

By default, these methods will use a plain table output. To have a themed
table, you can change the default theme in the configuration:

```yaml title="config/packages/rekalogika_analytics.yaml"
rekalogika_analytics:
    table_theme: "@RekalogikaAnalyticsFrontend/bootstrap_5_renderer.html.twig"
```

Alternatively, the methods above also accept the `theme` parameter, which allows
you to specify a different theme for the table:

```php
use Rekalogika\Analytics\Frontend\Html\TableRenderer;

/** @var TableRenderer $tableRenderer */

$table = $tableRenderer->renderPivotTable(
    cube: $cube,
    // highlight-next-line
    theme: '@RekalogikaAnalyticsFrontend/bootstrap_5_renderer.html.twig'
);
```

## Creating a Custom Theme

You can create a custom theme by extending the
`RekalogikaAnalyticsFrontend/renderer.html.twig` file. Read
`bootstrap_5_renderer.html.twig` for an example of how to do this.