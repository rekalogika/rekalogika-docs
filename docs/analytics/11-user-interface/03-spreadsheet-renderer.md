---
title: Spreadsheet Renderer
---

To render the query result as a spreadsheet, you can use the
`SpreadsheetRenderer` service. Its methods return an instance of `Spreadsheet`
from the `phpoffice/phpspreadsheet` package.

```php
use Rekalogika\Analytics\Contracts\SummaryManager;
use Rekalogika\Analytics\Frontend\Spreadsheet\SpreadsheetRenderer;

/** @var SummaryManager $summaryManager */
/** @var SpreadsheetRenderer $spreadsheetRenderer */

$result = $summaryManager
    ->createQuery()
    // ...
    ->getResult();

// render() returns a regular table
$spreadsheet = $spreadsheetRenderer->render(
    cell: $result,
    dimensions: ['time.year', 'category'],
    measures: ['price', 'count'],
);

// renderPivotTable() returns a pivot table
$spreadsheet = $spreadsheetRenderer->renderPivotTable(
    cube: $result,
    rows: ['time.year', 'category'],
    columns: ['@values'],
    measures: ['price', 'count'],
);
```

The two methods differ in the details:

* `render()` writes one row for each result row, and sets an autofilter on
  the table, so the user can filter and sort it in the spreadsheet
  application. If the result is empty, it returns an empty spreadsheet.
* `renderPivotTable()` does not set an autofilter, because the pivot table has
  multiple header rows and subtotal rows, which an autofilter would treat as
  data.

In both cases, the columns are sized automatically. Numbers are written as
numeric cells, and the other values as text, as described in [Formatter
Services](./11-formatter-services.md#default-stringification).

Then, you can save the spreadsheet to a file or output it to the browser:

```php
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

$writer = new Xlsx($spreadsheet);

// Save to a file
$writer->save('path/to/file.xlsx');

// Or output to the browser
$response = new StreamedResponse(
    function () use ($writer) {
        $writer->save('php://output');
    },
    200,
    [
        'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition' => 'attachment; filename="report.xlsx"',
    ]
);
```