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

The result is an instance of `Result`. It presents the query result in two
shapes, for user convenience:

1. Data cube format
2. Table format.

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

## The `Result` Object

The `Result` object provides the user with methods to get the data in the
user's preferred format.

```php
use Rekalogika\Analytics\Contracts\Result\Result;

/** @var Result $result */

// Get the result in the data cube format
$tree = $result->getCube();

// Get the result in the table format
$table = $result->getTable();
```
