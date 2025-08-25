---
title: Introduction
---

A PHP library for transforming multidimensional data into a pivot table.

## Features

* **Handles complex data**. Renders complex multi-dimensional data involving
  multiple dimensions and measures into equally complex pivot tables.
* **Flexible pivoting**: Configure which dimensions should be pivoted (in
  columns) vs unpivoted (in rows).
* **Measures are dimension**: Measures are regarded as a special dimension
  `@values` that can be flexibly positioned in the pivot structure.
* **Subtotals**: Renders subtotals if they exist in the source data.
* **Dimension ordering**: Honors the ordering of dimensions as specified in the
  `ORDER BY` clause of the SQL query.
* **Accepts simple array data**: Compatible with all result set formats. Does
  not require specific database and database access libraries.
* **Custom integration options**: Options for deeper integration with your
  application by providing your custom data structure in table-like data, or in
  data cube if your data is already in that format.
* **Customizable legends**: Define custom labels for dimensions, measures, and
  subtotals.
* **Does not require a specific data type**: Your dimension members and measure
  values can be of any type, including enums, entity objects, money-pattern
  objects, etc. You can supply a custom renderer to format the output as
  required.

## Design Philosophy

The library only transforms the data into a pivot table, but does not perform
any calculations like sum, average, etc, including for calculating subtotals.
This decision is taken because some aggregation functions, like Hyperloglog, are
database specific, and cannot be easily performed using PHP. Instead, it expects
the data to be already cubed.

If your data needs to be manually cubed, then it should be possible to use a
cubing layer, but it is not yet written.

## Requirements

PHP 8.2 or higher.

Technically, the library does not require a specific database software, it does
not even require a database at all. However, it works best if the data is
properly cubed. If you are getting the data from a database, the most convenient
way to accomplish that is to use a database server that supports the `GROUP BY
CUBE()` clause, like PostgreSQL and SQL Server.

## Installation

Install via Composer:

```bash
composer require rekalogika/pivot-table
```