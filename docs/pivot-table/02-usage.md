---
title: Usage
---

This section explains how to use the library.

## SQL Query

Usually, we will need to get the data from a database. For maximum
functionality, the result must be cubed. The query should look like the
following example for PostgreSQL.

```sql
SELECT
    -- Here, name, country, and month are the dimensions. ArrayTable works with
    -- field names, so use aliases if necessary.
    name,
    country,
    month,

    -- count and sum are the measures. Again, ArrayTable works with field names,
    -- use aliases to resolve ambiguity.
    COUNT(*) AS count,
    SUM(price) AS sum,

    -- the grouping function determines if a field is 'rolled-up'.
    GROUPING(name, country, month) AS grouping
FROM items

-- The library works best with a CUBEd result, although it can work without it
-- in a degraded mode.
GROUP BY DISTINCT CUBE(name, country, month)

-- ORDER BY clause determines the order of the dimensions in the output table.
ORDER BY
    name,
    country,
    month
```

:::tip

The library can work with `ROLLUP` or even without any grouping, but some
functionality will be lost. See [Grouping Strategies](04-grouping.md) for more
information.

:::

## Getting the Data

The library does not care how you get the data, but `ArrayTable` needs the data
to be in the form of `iterable<array<string,mixed>>`. You can use whatever means
to get the data, including PDO, a database abstraction library, or an ORM.

Also note the data type is `mixed`, you can use raw strings or numbers as
returned by the database, or it can also be in higher-level types as returned by
an ORM or database abstraction layer, including enums, entity objects, value
objects, etc. You may need to provide a [custom renderer](03-rendering.md) to
render the high-level types.

## Transforming the Raw Data to a Cube

The library works with a `Cube` instance. So, we need to transform the raw data
into a `Cube`. The library provides `ArrayTableFactory` that you can use to create a
`Cube` from the raw data.

```php
use Rekalogika\PivotTable\ArrayTable\ArrayTableFactory;

/** @var iterable<array<string,mixed>> $data The raw data from the database */

$cube = ArrayTableFactory::createCube(
    input: $data,

    // dimension fields must be in the same order as the GROUPING() function in
    // the SQL query:
    dimensionFields: ['name', 'country', 'month'],
    measureFields: ['count', 'sum'],
    groupingField: 'grouping',

    // Legends for dimensions and measures. The special dimension '@values'
    // represents the grouped measures.
    legends: [
        '@values' => 'Values',
        'name' => 'Item Name',
        'country' => 'Country',
        'month' => 'Month',
        'count' => 'Count',
        'sum' => 'Sum',
    ],

    // The labels to use for dimension subtotals.
    subtotalLabels: [
        'name' => 'All Names',
        'country' => 'All Countries',
        'month' => 'All Months',
    ],
);
```

## Transforming the Cube to a Pivot Table

Next, we need to transform the `Cube` into a pivot table. This is done by
`PivotTableTransformer`.

```php
use Rekalogika\PivotTable\PivotTableTransformer;
use Rekalogika\PivotTable\Contracts\Cube\Cube;

/** @var Cube $cube The data cube from the previous step */

$htmlTable = PivotTableTransformer::transform(
    cube: $cube,

    // Unpivoted dimensions go to the rows
    unpivoted: ['country', 'month'],

    // Pivoted dimensions go to the columns.
    pivoted: ['@values', 'name'],

    // Which measures to include
    measures: ['count', 'sum'],

    // A dimension in this list will not get a legend in the output table. Only
    // makes sense if the dimension is pivoted.
    skipLegends: ['@values'],

    // Add subtotals for these dimensions. Subtotals will only be added if they
    // exist here.
    withSubtotal: ['name', 'country'],
);
```

## Rendering the Pivot Table

Finally, we need to render the pivot table. The library provides a default
renderer `BasicTableRenderer` that renders the pivot table into an HTML string.

```php
use Rekalogika\PivotTable\TableRenderer\BasicTableRenderer;
use Rekalogika\PivotTable\HtmlTable\Table;

/** @var Table $htmlTable The pivot table from the previous step */

$html = BasicTableRenderer::render($htmlTable);
echo $html;
```