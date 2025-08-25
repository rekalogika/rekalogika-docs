---
title: Introduction
---

Allows the use of the more complex `GROUP BY` clauses in Doctrine ORM.
These include `GROUPING SETS`, `CUBE`, and `ROLLUP`.

If you are not familiar with these clauses, you can read more about them in the
[PostgreSQL documentation](https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-GROUPING-SETS).

## Supported Databases

Only PostgreSQL is currently supported. MS SQL Server support is possible in the
future. Other Doctrine-supported databases do not have the functionality and
cannot be supported, at least not completely.

## Installation

```bash
composer require rekalogika/doctrine-advanced-group-by
```

## License

MIT

## Contributing

Issues and pull requests should be filed in the GitHub repository [rekalogika/doctrine-advanced-group-by](https://github.com/rekalogika/doctrine-advanced-group-by).