---
title: Creating Value Resolvers
---

A `ValueResolver` basically returns a DQL expression. Usually, we need to take
user input using the constructor and then return the DQL expression in the
`getExpression()` method.

A `ValueResolver` can be used to get a value from a property in the source
entity, or it can take another `ValueResolver` as input and return a transformed
value.

## Interfaces

![Aggregate function](./diagrams/valueresolver.light.svg#light)
![Aggregate function](./diagrams/valueresolver.dark.svg#dark)

## Implementing `ValueResolver`

To create a value resolver, you need to implement the `ValueResolver` interface.

```php
namespace Rekalogika\Analytics\Contracts\Summary;

use Rekalogika\Analytics\Contracts\Context\SourceQueryContext;

interface ValueResolver
{
    public function getExpression(SourceQueryContext $context): string;

    /**
     * @return list<string>
     */
    public function getInvolvedProperties(): array;
}
```

## Hierarchy Awareness

If you need the value resolver to be usable in a hierarchy context, you also
need to implement the `HierarchyAware` interface. It allows the framework to
inject the input `ValueResolver` defined in the parent summary object.

```php
namespace Rekalogika\Analytics\Contracts\Hierarchy;

use Rekalogika\Analytics\Contracts\Summary\ValueResolver;

interface HierarchyAware
{
    public function withInput(ValueResolver $input): static;
}
```

## Usage in Partitions

A partition also uses a value resolver. If you want to use your value resolver
for a partition, you need to implement the `PartitionValueResolver` interface.

```php
namespace Rekalogika\Analytics\Contracts\Summary;

interface PartitionValueResolver extends ValueResolver
{
    public function getInvolvedProperties(): array;

    public function transformSourceValueToSummaryValue(mixed $value): int;

    public function transformSummaryValueToSourceValue(int $value): mixed;
}
```

## Context Object

The `SourceQueryContext` object is passed to the `getExpression()` method. It
contains the context of the query, including the metadata, and the `resolve()`
method to access the source entity properties.

The `resolve()` method takes a property path as its argument and returns the DQL
expression for that property. Read more about property paths in the
[Property Paths](property-path) section.

## User Value Transformer

After a query, the framework will instantiate the summary entity using the
result values. Rather than getting the value as returned by Doctrine, the user
has the option to create a getter method that transforms the value into a format
more suitable for the caller.

However, doing that manually can be a very tedious task. You have the option to
streamline this process by embedding the logic into the value resolver itself,
so the user can use the same logic every time they use the same value resolver.
To achieve that, you need to make your value resolver implement the
`UserValueTransformer` interface.

```php
use Rekalogika\Analytics\Contracts\Summary\ValueResolver;
use Rekalogika\Analytics\Contracts\Summary\UserValueTransformer;
use Rekalogika\Analytics\Contracts\Context\SourceQueryContext;

final readonly class QualityValueResolver implements ValueResolver, UserValueTransformer
{
    public function getExpression(SourceQueryContext $context): string
    {
        // ...
    }

    public function getInvolvedProperties(): array
    {
        // ...
    }

    public function transformUserValue(mixed $value): mixed
    {
        // $value is the value returned by Doctrine

        return new Quality($value);
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
    #[ORM\Column(type: Types::INTEGER)]
    #[Analytics\Dimension(
        source: new QualityValueResolver('quality'),
    )]
    private ?int $quality = null;

    public function getQuality(): ?Quality
    {
        // highlight-start
        return $this->getContext()->getUserValue(
            property: 'quality',
            class: Quality::class,
        );
        // highlight-end
    }
}
```