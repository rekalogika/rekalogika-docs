---
title: Basic Value Resolvers
---

Most of the time, we will use either `PropertyValueResolver` or
`IdentifierValueResolver` to get the value from the source entity.

## `PropertyValueResolver`

`PropertyValueResolver` is used to get the value of a property. Example:

```php
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Attribute as Analytics;
use Rekalogika\Analytics\ValueResolver\PropertyValueResolver;

#[ORM\Entity()]
#[Analytics\Summary(
    sourceClass: Order::class,
)]
class OrderSummary extends Summary
{
    #[ORM\Column(type: Types::STRING)]
    #[Analytics\Dimension(
        // highlight-start
        source: new PropertyValueResolver('status'),
        // highlight-end
    )]
    private ?string $status = null;
}
```

## `IdentifierValueResolver`

`IdentifierValueResolver` must be used if the value is not a simple property, but a
related entity.

```php
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Attribute as Analytics;
use Rekalogika\Analytics\ValueResolver\IdentifierValueResolver;

#[ORM\Entity()]
#[Analytics\Summary(
    sourceClass: Order::class,
)]
class OrderSummary extends Summary
{
    #[ORM\ManyToOne()]
    #[Analytics\Dimension(
        // highlight-start
        source: new IdentifierValueResolver('country'),
        // highlight-end
    )]
    private ?Country $country = null;
}
```