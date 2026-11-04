---
title: Current To-do List
---

## Bugs

Currently none.

## Features

* Support for MS SQL Server
* Binning value resolver
* Auto-dashboard
* Lower & upper bound limit in queries.

## Limitations

* Postgres `GROUP BY` maximum grouping set limit of 4096, can be circumvented by
  using multiple queries (done, but has massive performance penalty, look into
  this further). Can be avoided by limiting the stored grouping sets using
  `ExplicitGroupingSetsStrategy`.
* to-many joins are not yet supported. It can be implemented using subselects in
  the SELECT clause (not very efficient), or subselects in the LEFT JOIN clause
  (not supported by Doctrine, needs a custom output walker).
* Changes read through a to-many association are not detected, and a summary
  filter cannot use a to-many path.
* The database triggers do not support class table inheritance, composite
  identifiers, `TRUNCATE`, and updates of primary keys.

## Spinoffs

* Spin off UI to its own package (including `DistinctValuesResolver`)
* SimpleQueryBuilder

## Tests

Currently too many to list.