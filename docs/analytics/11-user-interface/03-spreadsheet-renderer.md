---
title: Spreadsheet Renderer
---

To render the query result as a spreadsheet, you can use the
`SpreadsheetRenderer::render()` method. It returns an instance of `Spreadsheet`
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

$spreadsheet = $spreadsheetRenderer->render($result);
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