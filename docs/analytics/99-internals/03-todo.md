---
title: Current To-do List
---

## Bugs

Currently none.

## Features

* Support for MS SQL Server
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
* Inserting a related entity on the inverse side of a one-to-one association,
  or attaching it to another source entity, is not detected. With the database
  triggers, deleting it is not detected either.

## Spinoffs

* Spin off UI to its own package (including `DistinctValuesResolver`)
* SimpleQueryBuilder

## Tests

Currently too many to list.