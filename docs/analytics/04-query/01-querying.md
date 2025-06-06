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
    ->groupBy('time.year', 'customerCountry') // property names of the dimension
    ->select('price', 'count') // property names of the measures
    ->where(Criteria::expr()->eq('time.year', 2023))
    ->getResult();
```

The result is an instance of `Result`. It presents the query result in three
shapes, for user convenience:

1. Table format, similar to a SQL result set. A record contains one or more
   measures.

2. Normal table format, similar to the table format, but only contains one
   measure per record.

3. Tree format.

## Query Methods

The methods of the `Query` object are modeled after the Doctrine `QueryBuilder`
methods. The methods are chainable, so you can write the query in a fluent
style.

### `from`

The `from` method is used to specify the summary entity class that you want to
query.

### `groupBy` and `addGroupBy`

The `groupBy` method is used to specify the dimensions of the query. The
dimension name is the same as the property name of your summary class. The order
in `groupBy` is important, and will be used to determine the order of the
dimensions in the result.

### `select` and `addSelect`

The `select` method is used to specify the measures of the query. Again, the
measure name is the name of the property in the summary class.

### `where` and `andWhere`

The `where` method is used to filter the data. The method accepts a Doctrine
Criteria `Expression` object.

## The `Result` Object

The `Result` object provides the user with methods to get the data in the
user's preferred format.

```php
use Rekalogika\Analytics\Contracts\Result\Result;

/** @var Result $result */
// Get the result in the table format
$table = $result->getTable();

// Get the result in the normal table format
$normalTable = $result->getNormalTable();

// Get the result in the tree format
$tree = $result->getTree();
```
