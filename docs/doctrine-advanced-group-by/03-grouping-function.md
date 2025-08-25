---
title: GROUPING() Function
---

If you are using `ROLLUP`, `CUBE`, or `GROUPING SETS`, you also probably need to
use the `GROUPING()` function. This package provides a DQL function for the
`GROUPING()` function that you can use in a DQL `Query` or `QueryBuilder`.

## Function Registration

### Registration without framework

```php
use Doctrine\ORM\Configuration;
use Rekalogika\DoctrineAdvancedGroupBy\Function\GroupingFunction;

$configuration = new Configuration();
$configuration->addCustomNumericFunction('GROUPING', GroupingFunction::class);
```

### Registration with Symfony

```yaml
# config/packages/doctrine.yaml
doctrine:
    orm:
        dql:
            numeric_functions:
                GROUPING: Rekalogika\DoctrineAdvancedGroupBy\Function\GroupingFunction
```

### Ad-Hoc Registration

```php
use Doctrine\ORM\EntityManagerInterface;

/** @var EntityManagerInterface $entityManager */

$entityManager
    ->getConfiguration()
    ->addCustomNumericFunction('GROUPING', GroupingFunction::class);
```

## Example Usage

```php
use Doctrine\ORM\EntityManagerInterface;

/** @var EntityManagerInterface $entityManager */

$queryBuilder = $entityManager
    ->createQueryBuilder()
    ->from(SomeEntity::class, 'e')
    ->select('e.a AS a')
    ->addSelect('e.b AS b')
    ->addSelect('GROUPING(e.a, e.b)');
```