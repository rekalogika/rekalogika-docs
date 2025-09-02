---
title: Querying
---

To work with the summary entities, we interact with the service
`SummaryManager`.

## Querying the Summary

You can query the summary entity using the `createQuery` method. The method
returns an instance of `Query` that you can use to build your query.

```php
use Doctrine\Common\Collections\Criteria;
use Rekalogika\Analytics\Contracts\SummaryManager;

/** @var SummaryManager $summaryManager */

$result = $summaryManager
    ->createQuery()
    ->from(OrderSummary::class) // the summary entity class name
    ->withDimensions('time.year', 'customerCountry') // property names of the dimension
    ->dice(Criteria::expr()->eq('time.year', 2023))
    ->getResult();
```

## Query Methods

The methods of the `Query` object are modeled after the Doctrine `QueryBuilder`
methods. The methods are chainable, so you can write the query in a fluent
style.

### `from`

The `from` method is used to specify the summary entity class that you want to
query.

### `withDimensions` and `addDimension`

These methods are used to specify the dimensions to include in the result. The
dimension name is the same as the property name of your summary class.

### `dice` and `andDice`

These methods are used to filter the data. They accept a Doctrine Criteria
`Expression` object.

## The `CubeCell` Object

The method `Query::getResult()` returns a `CubeCell` instance, which is the apex
cell that aggregates all the data in the result.