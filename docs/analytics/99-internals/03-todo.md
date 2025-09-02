---
title: Current To-do List
---

## Bugs

Currently none.

## Features

* Support for MS SQL Server
* Configurable event timing (`RefreshClassPropertiesResolver`)
* Allow customized generation of dirty flag (see `DirtyFlagGenerator`)
* It should be possible for `DirtyFlagGenerator` to generate dirty partition
  signals for non-`IDENTITY` entities, bypassing 'new entity' phase.
* Binning value resolver
* Auto-dashboard
* Lower & upper bound limit in queries.

## Performance

* Metadata caching

## Limitations

* Postgres `GROUP BY` maximum grouping set limit of 4096, can be circumvented by
  using multiple queries (done, but has massive performance penalty, look into
  this further).
* to-many joins are not yet supported. It can be implemented using subselects in
  the SELECT clause (not very efficient), or subselects in the LEFT JOIN clause
  (not supported by Doctrine, needs a custom output walker).

## Spinoffs

* Spin off UI to its own package (including `DistinctValuesResolver`)
* SimpleQueryBuilder

## Tests

Currently too many to list.