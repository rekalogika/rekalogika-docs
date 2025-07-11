---
title: Basic Value Resolvers
---

Most of the time, we use either `PropertyValue` or `IdentifierValue` to get the
value from the source entity.

## `PropertyValue`

`PropertyValue` is used to get the value of a property. Example:

```php
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Core\Metadata as Analytics;
use Rekalogika\Analytics\Core\ValueResolver\PropertyValue;

#[ORM\Entity()]
#[Analytics\Summary(
    sourceClass: Order::class,
)]
class OrderSummary extends Summary
{
    #[ORM\Column(type: Types::STRING)]
    #[Analytics\Dimension(
        // highlight-start
        source: new PropertyValue('status'),
        // highlight-end
    )]
    private ?string $status = null;
}
```

## `IdentifierValue`

`IdentifierValue` is used to get the identifier of an entity. It must be used if
the value is not a simple property, but a related entity.

```php
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Core\Metadata as Analytics;
use Rekalogika\Analytics\Core\ValueResolver\IdentifierValue;

#[ORM\Entity()]
#[Analytics\Summary(
    sourceClass: Order::class,
)]
class OrderSummary extends Summary
{
    #[ORM\ManyToOne()]
    #[Analytics\Dimension(
        // highlight-start
        source: new IdentifierValue('country'),
        // highlight-end
    )]
    private ?Country $country = null;
}
```

## `IntegerValue`

`IntegerValue` is like `PropertyValue`, but implements `PartitionValueResolver`
and returns an integer value. Usually, it is used in partitions where the
source property key is an integer.

```php
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Core\Metadata as Analytics;
use Rekalogika\Analytics\Core\Partition\DefaultIntegerPartition;

#[ORM\Entity()]
#[Analytics\Summary(
    sourceClass: Order::class,
)]
class OrderSummary extends Summary
{
    #[ORM\Embedded()]
    // highlight-next-line
    #[Analytics\Partition(new IntegerValue('id'))]
    private DefaultIntegerPartition $partition;
}
```