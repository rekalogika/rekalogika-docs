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
`dice()` replaces the existing filter, while `andDice()` combines the new
expression with the existing one using `AND`. An `in()` with an empty list
matches nothing, while a `notIn()` with an empty list matches everything.

## The `CubeCell` Object

The method `Query::getResult()` returns a `CubeCell` instance, which is the apex
cell that aggregates all the data in the result.
## Freshness of the Result

The summary table is refreshed asynchronously, so a query result might not
reflect the latest changes to the source yet. `CubeCell::getValidAsOf()` tells
how fresh the result is:

```php
use Rekalogika\Analytics\Contracts\Result\CubeCell;

/** @var CubeCell $result */

$validAsOf = $result->getValidAsOf();

if ($validAsOf === null) {
    // unknown, e.g. the summary has never been refreshed
} else {
    echo 'Includes all the changes made before ' . $validAsOf->format('c');
}
```

The result includes every change to the source made before the returned time.
The changes made after it may or may not be included, so the result is not
necessarily the state of the source at that time. If every change is already
reflected in the summary table, it is the time of the query. Otherwise, it is
earlier, down to the time of the earliest change not reflected yet.

The time is the same for every cell of the result. It is in UTC, with a
precision of one second.

The pending changes are known from their dirty flags, see [Change
Detection](../03-housekeeping/01-change-detection.md). New source records are
also taken into account, even if they have no dirty flags, e.g. because they
were inserted using native SQL without the database triggers. Other changes
without dirty flags, e.g. a native SQL `UPDATE` without the triggers, and not
reported using `markDirty()`, are not taken into account.

`getValidAsOf()` returns null if the time cannot be determined. It happens if
the source has records that are not summarized yet, and the refresh has never
checked the source for new records, e.g. because the summary has never been
refreshed.
