---
title: Range Bins
---

A range bin is a bin defined by a backed enum, one case for each bin. Use it when
there are only a few bins, and you want to give each of them a name, e.g. age
groups or customer tiers.

## Defining the Bins

The enum implements `RangeBin`, and uses `RangeBinTrait` for the
implementation. It declares the cases in ascending order, and the thresholds
between them in `getThresholds()`:

```php
namespace App\Analytics;

use Rekalogika\Analytics\Numeric\Bin\Trait\RangeBinTrait;
use Rekalogika\Analytics\Numeric\RangeBin;
use Symfony\Contracts\Translation\TranslatableInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

enum AgeGroup: string implements RangeBin, TranslatableInterface
{
    use RangeBinTrait;

    case UpTo25 = 'up-to-25';
    case From26To35 = '26-to-35';
    case From36To45 = '36-to-45';
    case From46To55 = '46-to-55';
    case From56To65 = '56-to-65';
    case Over65 = 'over-65';

    public static function getThresholds(): array
    {
        return [26, 36, 46, 56, 66];
    }

    public function trans(
        TranslatorInterface $translator,
        ?string $locale = null,
    ): string {
        return match ($this) {
            self::UpTo25 => $translator->trans('Up to 25', locale: $locale),
            self::From26To35 => $translator->trans('26 to 35', locale: $locale),
            self::From36To45 => $translator->trans('36 to 45', locale: $locale),
            self::From46To55 => $translator->trans('46 to 55', locale: $locale),
            self::From56To65 => $translator->trans('56 to 65', locale: $locale),
            self::Over65 => $translator->trans('Over 65', locale: $locale),
        };
    }
}
```

The thresholds are the lower bounds of every case except the first. Therefore,
there must be exactly one threshold fewer than the cases, and the thresholds
must be in strictly ascending order. In the example above, `UpTo25` gets the
values below 26, `From26To35` gets the values from 26 to below 36, and so on,
and `Over65` gets 66 and above.

The enum can be backed by strings or integers. The bins are ordered by the order
in which the cases are declared, not by their backing values.

Implementing `TranslatableInterface` is optional. It provides the labels of the
bins in the user interface.

`RangeBinTrait` provides the methods needed by the framework. They are also
useful in your own code: `getLowerBound()` and `getUpperBound()` return the
range of a case, with null for an unbounded side, and `getNext()` and
`getPrevious()` return the neighboring cases.

## Using the Bins in a Dimension

Use `RangeBinValueResolver` as the source of the dimension. The summary property
is typed with the enum, and mapped as a column with the enum as its `enumType`:

```php
use App\Analytics\AgeGroup;
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Core\Entity\BaseSummary;
use Rekalogika\Analytics\Core\ValueResolver\PropertyValue;
use Rekalogika\Analytics\Metadata\Attribute as Analytics;
use Rekalogika\Analytics\Numeric\ValueResolver\RangeBinValueResolver;
use Symfony\Component\Translation\TranslatableMessage;

#[ORM\Entity()]
#[Analytics\Summary(
    sourceClass: Customer::class,
)]
class CustomerSummary extends BaseSummary
{
    #[ORM\Column(enumType: AgeGroup::class, nullable: true)]
    #[Analytics\Dimension(
        // highlight-start
        source: new RangeBinValueResolver(
            binClass: AgeGroup::class,
            input: new PropertyValue('age'),
        ),
        // highlight-end
        label: new TranslatableMessage('Age group'),
        nullLabel: new TranslatableMessage('Unspecified'),
    )]
    private ?AgeGroup $ageGroup = null;

    public function getAgeGroup(): ?AgeGroup
    {
        return $this->ageGroup;
    }
}
```

The `input` is a [value resolver](../05-value-resolver/index.md) returning a
number. If it returns null, the dimension member is null.

The enum is validated when the value resolver is created. An exception is
thrown if it does not implement `RangeBin`, if its thresholds are not in
strictly ascending order, or if the number of thresholds does not match the
number of cases.

## Querying

In the query result, the members of the dimension are the cases of the enum.
Every case appears in the result, including the ones without any data, in the
order of declaration.

To filter by the dimension, use the cases in the expression:

```php
use App\Analytics\AgeGroup;
use Doctrine\Common\Collections\Criteria;

$result = $summaryManager
    ->createQuery()
    ->from(CustomerSummary::class)
    ->withDimensions('ageGroup')
    ->dice(Criteria::expr()->in('ageGroup', [AgeGroup::UpTo25, AgeGroup::Over65]))
    ->getResult();
```

## Changing the Bins

The summary table stores the backing value of the case. If you change the
thresholds, or the cases, the existing data in the summary table no longer
matches the definition. Truncate the summary table, and refresh it again. See
[Refreshing](../03-housekeeping/02-refreshing.md#truncating-the-summary-table).
