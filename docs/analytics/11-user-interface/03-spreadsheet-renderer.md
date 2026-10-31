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