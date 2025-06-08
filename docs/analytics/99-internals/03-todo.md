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
* Subtotals
* From a result, create a `Collection` containing entities from source.
* Auto-dashboard
* Lower & upper bound limit in queries.

## Performance

* Metadata caching

## Limitations

* Postgres `GROUP BY` maximum grouping set limit of 4096, can be circumvented by
  using multiple queries.

## Spinoffs

* Spin off pivot table to its own package.
* Spin off UI to its own package (including `DistinctValuesResolver`)
* SimpleQueryBuilder

## Tests

Currently too many to list.