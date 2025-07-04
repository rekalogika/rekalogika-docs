---
title: Creating Aggregate Functions
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

## User Value Transformer

The aggregate function can provide a way to transform the raw result value (as
returned by Doctrine) into a user-friendly object. This is done by implementing
the `UserValueTransformer` interface. The following is an example done for the
`CountDistinct` aggregate function.

```php
use Rekalogika\Analytics\Contracts\Context\ValueTransformerContext;
use Rekalogika\Analytics\Contracts\Summary\SummarizableAggregateFunction;
use Rekalogika\Analytics\Contracts\Summary\UserValueTransformer;

/**
 * @implements UserValueTransformer<int,ApproximateCount>
 */
final readonly class CountDistinct implements
    SummarizableAggregateFunction,
    UserValueTransformer
{
    // ...

    #[\Override]
    public function getUserValue(
        mixed $rawValue,
        ValueTransformerContext $context,
    ): mixed {
        if ($rawValue === null) {
            return null;
        }

        return new ApproximateCount($rawValue);
    }
}
```

Then in the summary class, the user will be able to do something like this:

```php
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Types\Types;
use Rekalogika\Analytics\Core\Metadata as Analytics;
use Rekalogika\Analytics\Core\Entity\BaseSummary;

#[ORM\Entity()]
#[Analytics\Summary(
    sourceClass: Order::class,
)]
class OrderSummary extends BaseSummary
{
    #[ORM\Column(type: 'rekalogika_hll')]
    #[Analytics\Measure(
        function: new CountDistinct(new IdentifierValue('customer')),
    )]
    private ?int $uniqueCustomers = null;

    public function getUniqueCustomers(): ?ApproximateCount
    {
        // highlight-start
        return $this->getContext()->getUserValue(
            property: 'uniqueCustomers',
            class: ApproximateCount::class,
        );
        // highlight-end
    }
}
```