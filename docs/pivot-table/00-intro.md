---
title: Introduction
---

A PHP library for transforming multidimensional data into a pivot table.

## Features

* **Handles complex data**. Renders complex multi-dimensional data involving
  multiple dimensions and measures.
* **Flexible pivoting**: Configure which dimensions should be pivoted (in
  columns) vs unpivoted (in rows).
* **Measures are dimension**: Measures are regarded as a special dimension
  `@values` that can be flexibly positioned in the pivot structure.
* **Subtotals**: Renders subtotals if they exist in the source data.
* **Accepts simple array data**: Compatible with all result set formats. Does
  not require specific database and database access libraries.
* **Custom integration options**: Options for deeper integration with your
  application by providing your custom data structure in table-like data, or in
  data cube if your data is already in that format.
* **Customizable legends**: Define custom labels for dimensions, measures, and
  subtotals.
* **Does not require a specific data type**: Your dimension members and measure
  values can be of any type, including entity objects, money object pattern,
  etc. You can supply a custom renderer to format the output as required.

## Design Philosophy

The library only transforms the data into a pivot table, but does not perform
any calculations like sum, average, etc. This decision is taken because some
aggregation functions are only available on the database side and cannot be
easily performed using PHP.

If your data needs to be manually aggregated, then a custom aggregation/cubing
layer needs to be written.

## Installation

Install via Composer:

```bash
composer require rekalogika/pivot-table
```