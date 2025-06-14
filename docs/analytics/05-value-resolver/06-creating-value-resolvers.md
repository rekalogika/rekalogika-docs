---
title: Creating Value Resolvers
---

To create a value resolver, you only need to implement the `ValueResolver`
interface.

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

If you need the value resolver to be usable in a hierarchy context, you also
need to implement the `HierarchyAware` interface. It allows the framework to
supply the input value defined in the parent summary object.

```php
namespace Rekalogika\Analytics\Contracts\Hierarchy;

use Rekalogika\Analytics\Contracts\Summary\ValueResolver;

interface HierarchyAware
{
    public function withInput(ValueResolver $input): static;
}
```