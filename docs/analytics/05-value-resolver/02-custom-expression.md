---
title: Custom Expression
---

The `CustomExpression` value resolver allows you to define a custom DQL
expression to get the value from the source entity. This is useful when you need
to perform complex calculations to get the value.

```php
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Contracts\Metadata as Analytics;
use Rekalogika\Analytics\Core\ValueResolver\CustomExpression;

#[ORM\Entity()]
#[Analytics\Summary(
    sourceClass: Order::class,
)]
class OrderSummary extends Summary
{
    #[ORM\Column(enumType: Gender::class, nullable: true)]
    #[Analytics\Dimension(
        // highlight-start
        source: new CustomExpression("
            CASE
                WHEN [customer.*] INSTANCE OF Rekalogika\Analytics\Tests\App\Entity\IndividualCustomer
                THEN [customer(Rekalogika\Analytics\Tests\App\Entity\IndividualCustomer).gender]

                ELSE NULLIF('a','a')
            END
        "),
        // highlight-end
    )]
    private ?Gender $customerGender = null;
}
```

With the above code, if the `customer` is an `IndividualCustomer`, it will record
their gender. Otherwise, gender is not applicable, and we set it to null.

The expressions enclosed in square brackets `[...]` are [property
paths](./property-path), and will be replaced by the real DQL expression.