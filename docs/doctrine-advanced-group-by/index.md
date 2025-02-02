---
title: rekalogika/doctrine-advanced-group-by
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

## Usage

```php
use Doctrine\ORM\QueryBuilder;
use Rekalogika\DoctrineAdvancedGroupBy\GroupBy;
use Rekalogika\DoctrineAdvancedGroupBy\GroupingSet;
use Rekalogika\DoctrineAdvancedGroupBy\FieldSet;
use Rekalogika\DoctrineAdvancedGroupBy\Field;

/** @var QueryBuilder $queryBuilder */

$queryBuilder
    ->from(SomeEntity::class, 'e')
    ->select('e.a AS a')
    ->addSelect('e.b AS b')
    ->addSelect('e.c AS c')
    ->addSelect('e.d AS d');

// highlight-start
$groupBy = new GroupBy(
    new GroupingSet(
        new FieldSet(
            new Field('a'),
            new Field('b'),
        ),
        new FieldSet(
            new Field('c'),
            new Field('d'),
        ),
    ),
);
// highlight-end

$query = $queryBuilder->getQuery();
// highlight-next-line
$groupBy->apply($query);
$result = $query->getResult();
```

## Flattening

It is possible to flatten a `GroupBy` object into another instance of `GroupBy`
with a single level of grouping sets.

```php
$groupBy1 = new GroupBy(
    new RollUp(
        new Field('a'),
        new Field('b'),
    ),
);

$groupBy2 = new GroupBy(
    new GroupingSet(
        new FieldSet(),
        new FieldSet(
            new Field('a'),
        ),
        new FieldSet(
            new Field('a'),
            new Field('b'),
        ),
    ),
);
```

In the example above, `$groupBy2` is the flattened version of `$groupBy1`.
You can transform `$groupBy1` into `$groupBy2` using the `flatten` method.

```php
$flattened = $groupBy1->flatten();
```

This is useful if you need to know if the `GroupBy` generates more than
4096 grouping sets, which is the limit of the database. Or, you can use it
to split the query into multiple smaller queries.

## Limitations

Works using a custom SQL walker; therefore it is not possible if you need to use
a custom SQL walker for another purpose.

## License

MIT

## Contributing

Issues and pull requests should be filed in the GitHub repository [rekalogika/doctrine-advanced-group-by](https://github.com/rekalogika/doctrine-advanced-group-by).