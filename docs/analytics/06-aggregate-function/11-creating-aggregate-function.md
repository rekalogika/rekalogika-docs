---
title: Creating an Aggregate Functions
---

To create an aggregate function, you need to create an implementation of
the `AggregateFunction` or `SummarizableAggregateFunction` interface.

## Interfaces

![Aggregate function](./diagrams/aggregatefunction.light.svg#light)
![Aggregate function](./diagrams/aggregatefunction.dark.svg#dark)

### `AggregateFunction` Interface

```php
namespace Rekalogika\Analytics\Contracts\Summary;

use Rekalogika\Analytics\Contracts\Context\SummaryQueryContext;

interface AggregateFunction
{
    public function getAggregateToResultExpression(
        string $inputExpression,
        SummaryQueryContext $context,
    ): string;
}
```

Implement `AggregateFunction` if the function does not read any data from the
source directly, but gets its input from other aggregate functions. Example: the
`Average` aggregate function, it takes the sum and count from other aggregate
functions and uses them to calculate the average.

### `SummarizableAggregateFunction` Interface

```php
namespace Rekalogika\Analytics\Contracts\Summary;

use Rekalogika\Analytics\Contracts\Context\SourceQueryContext;

interface SummarizableAggregateFunction extends AggregateFunction
{
    public function getSourceToAggregateExpression(
        SourceQueryContext $context,
    ): string;

    public function getAggregateToAggregateExpression(
        string $inputExpression,
    ): string;

    /**
     * @return list<string>
     */
    public function getInvolvedProperties(): array;
}
```

Implement `SummarizableAggregateFunction` if the function reads data from the
source entity. You need to supply these logics using DQL expressions:

* `getSourceToAggregateExpression()` - How to transform a field from multiple
  source entities into a single aggregate value.
* `getAggregateToAggregateExpression()` - How to combine multiple
  aggregate values into a single aggregate value.
* `getAggregateToResultExpression()` - How to transform an aggregate value
  into the final result value.

## Division Consideration

When creating an aggregate function that involves division, you should
consider the case when the denominator is zero. To avoid division by zero, use
the DQL expression `NULLIF(<denominator>, 0)`. This will return `NULL` if the
denominator is zero, which is a safe way to handle division in DQL.