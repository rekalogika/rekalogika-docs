---
title: Property Path
---

Basically all `ValueResolver`s accept property path. This allows you to specify
a path to a specific property from the root entity, traversing through related
entities. The framework will automatically make the necessary joins behind the
scenes.

## Example of Using a Property Path in a Dimension

This is how you can use a property path in a dimension:

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
        source: new PropertyValueResolver('customer.country.name'),
        // highlight-end
    )]
    private ?string $countryName = null;
}
```

In this example, from the root `Order` object, we traverse the `customer`
relation, and then the `country` relation to get the `name` property.

In the following sections, we will only include how to use property paths in
`ValueResolver` objects, omitting the rest of the code for brevity.

## Resolve to a Property

The most common usage is to resolve to a property:

```php
use Rekalogika\Analytics\ValueResolver\PropertyValueResolver;

$valueResolver = new PropertyValueResolver('customer.country.name');
```

## Getting the Alias of a Related Entity

Some DQL clauses expect the alias of a related entity to be passed as an
argument, including the `INSTANCE OF` clause. You can use the `*` symbol to get
the alias of a related entity:

```php
use Rekalogika\Analytics\ValueResolver\CustomDQLValueResolver;

$valueResolver = new CustomDQLValueResolver("
    CASE
        // highlight-start
        WHEN [customer.*] INSTANCE OF App\Entity\IndividualCustomer
        // highlight-end
        THEN [customer(App\Entity\IndividualCustomer).gender]

        ELSE NULLIF('a','a')
    END
");
```

## Casting to a Class

It is possible to cast a related entity to a specific class using parentheses.
This is useful if you need to access a property that is not defined in the root
entity. This is an advanced feature, and probably only makes sense if you are
using `CustomDQLValueResolver`.

```php
use Rekalogika\Analytics\ValueResolver\CustomDQLValueResolver;

$valueResolver = new CustomDQLValueResolver("
    CASE
        WHEN [customer.*] INSTANCE OF App\Entity\IndividualCustomer
        // highlight-start
        THEN [customer(App\Entity\IndividualCustomer).gender]
        // highlight-end

        ELSE NULLIF('a','a')
    END
");
```

:::info

To implement the class casting, the framework will create an additional join
using the `WITH` clause:

```php
use Doctrine\ORM\QueryBuilder;

/** @var QueryBuilder $queryBuilder */

$queryBuilder
    ->from(Order::class, '_a0')
    ->leftJoin('_a0.customer', '_a1') // Customer::class
    // highlight-start
    ->leftJoin(
        IndividualCustomer::class,
        '_a2',
        'WITH',
        '_a2.id = _a1.id',
    );
    // highlight-end
```

:::

