---
title: GROUP BY Usage
---

We add the advanced `GROUP BY` functionality to Doctrine ORM queries by using an
SQL walker.

## Example Usage

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

## Class Diagram

![GroupBy](./diagrams/groupby.light.svg#light)
![GroupBY](./diagrams/groupby.dark.svg#dark)
