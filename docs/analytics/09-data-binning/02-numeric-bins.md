---
title: Numeric Bins
---

`NumericBinValueResolver` bins a number using a binning algorithm. Each bin is
identified by an integer index, which is stored in the summary table. In the
query result, the index is transformed into an `IndexedBin` object.

## Usage

```php
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Core\Entity\BaseSummary;
use Rekalogika\Analytics\Core\ValueResolver\PropertyValue;
use Rekalogika\Analytics\Metadata\Attribute as Analytics;
use Rekalogika\Analytics\Numeric\Bin\IndexedBin;
use Rekalogika\Analytics\Numeric\Binning\LinearBinning;
use Rekalogika\Analytics\Numeric\ValueResolver\NumericBinValueResolver;
use Symfony\Component\Translation\TranslatableMessage;

#[ORM\Entity()]
#[Analytics\Summary(
    sourceClass: Customer::class,
)]
class CustomerSummary extends BaseSummary
{
    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    #[Analytics\Dimension(
        // highlight-start
        source: new NumericBinValueResolver(
            binning: new LinearBinning(width: 10, min: 20, max: 70),
            input: new PropertyValue('age'),
        ),
        // highlight-end
        label: new TranslatableMessage('Age'),
        nullLabel: new TranslatableMessage('Unspecified'),
    )]
    private ?int $age = null;

    public function getAge(): ?IndexedBin
    {
        return $this->getContext()->getUserValue(
            property: 'age',
            class: IndexedBin::class,
        );
    }
}
```

The summary property stores the index of the bin, so it must be typed `?int`,
and mapped as an integer column. `SMALLINT` is enough unless the binning can
produce a very large number of bins.

The `input` is a [value resolver](../05-value-resolver/index.md) returning a
number. If it returns null, the dimension member is null.

Like with the [time dimension](../08-time-dimension/02-dimensions.md), the
getter uses `getContext()->getUserValue()` to return the bin as an `IndexedBin`
object, instead of the raw index.

## Binning Algorithms

The algorithms are in the `Rekalogika\Analytics\Numeric\Binning` namespace.

### `LinearBinning`

Bins of equal width.

```php
use Rekalogika\Analytics\Numeric\Binning\LinearBinning;

new LinearBinning(width: 10);
new LinearBinning(width: 10, min: 26, max: 66);
```

Without `min` and `max`, the bins extend indefinitely in both directions, and
are aligned to zero. With a width of 10, the bin with the index 0 is 0 to below
10, the index 1 is 10 to below 20, and the index -1 is -10 to below 0.

With `min`, the bins are aligned to `min` instead, and all the values below
`min` go to a single bin, with the index -1. With `max`, all the values from
`max` go to a single bin. For example, a width of 10, a `min` of 26, and a `max`
of 66 give six bins: below 26, 26 to below 36, 36 to below 46, 46 to below 56, 56
to below 66, and 66 and above. If `max - min` is not a multiple of the width,
the last bin before `max` is narrower.

The width must be positive, and `max` must be greater than `min`.

### `LogarithmicBinning`

Bins whose bounds grow geometrically. Suitable for values spanning several
orders of magnitude, like prices or quantities.

```php
use Rekalogika\Analytics\Numeric\Binning\LogarithmicBinning;

new LogarithmicBinning(); // base 10, min 1
new LogarithmicBinning(base: 2, min: 16, max: 128);
```

The bin with the index `i` is `min × base^i` to below `min × base^(i+1)`. All
the values below `min`, including zero and the negative numbers, go to a single
bin with the index -1. With the defaults, the bins are: below 1, 1 to below 10,
10 to below 100, 100 to below 1000, and so on.

With `max`, all the values from `max` go to a single bin. If `max` is not `min`
times a power of `base`, the last bin before `max` is narrower.

The base must be greater than 1, and `min` must be positive.

### `ThresholdBinning`

Bins with arbitrary bounds.

```php
use Rekalogika\Analytics\Numeric\Binning\ThresholdBinning;

new ThresholdBinning([31, 59, 109]);
```

The thresholds above give four bins, with the indexes 0 to 3: below 31, 31 to
below 59, 59 to below 109, and 109 and above. The thresholds must be in
strictly ascending order.

If you want to give the bins your own labels, use a [range
bin](./01-range-bins.md) instead.

## The `IndexedBin` Object

An `IndexedBin` is a member of the dimension in the query result. It has these
methods:

* `getIndex()` returns the index of the bin.
* `getBinning()` returns the binning algorithm that produced it.
* `getLowerBound()` and `getUpperBound()` return the range of the bin. The lower
  bound is inclusive, and the upper bound is exclusive. A null means the bin is
  unbounded on that side.
* `getNext()` and `getPrevious()` return the neighboring bins, or null at the
  ends of a bounded binning.

It is rendered as the interval in the mathematical notation, e.g. `< 26`,
`[26, 36)`, or `≥ 66`.

There is only one instance of `IndexedBin` for each binning and index at a
time, so the bins can be compared using `===`. Two binning instances with the
same parameters are considered the same binning.

The bins are sorted by their index in the query result. The framework fills in
the missing bins: if the binning is bounded on both sides, e.g. a
`LinearBinning` with both `min` and `max`, or a `ThresholdBinning`, every bin
appears in the result. Otherwise, the bins missing between the lowest and the
highest bins in the result are filled in.

## Querying

To filter by the dimension, create the bin using `IndexedBin::create()`, with
the same binning as the one in the summary class:

```php
use Doctrine\Common\Collections\Criteria;
use Rekalogika\Analytics\Numeric\Bin\IndexedBin;
use Rekalogika\Analytics\Numeric\Binning\LinearBinning;

$binning = new LinearBinning(width: 10, min: 20, max: 70);

// index -1 is below 20, 0 is 20 to below 30, 1 is 30 to below 40, and 2 is
// 40 to below 50
$bin = IndexedBin::create($binning, 2);

$result = $summaryManager
    ->createQuery()
    ->from(CustomerSummary::class)
    ->withDimensions('age')
    ->dice(Criteria::expr()->eq('age', $bin))
    ->getResult();
```

An exception is thrown if the index is outside the range of the binning.

## Changing the Binning

The summary table stores the index of the bin, and the meaning of the index
depends on the parameters of the binning. If you change them, the existing data
in the summary table no longer matches the definition. Truncate the summary
table, and refresh it again. See
[Refreshing](../03-housekeeping/02-refreshing.md#truncating-the-summary-table).

## Custom Binning Algorithms

To create your own algorithm, implement the `Binning` interface. It returns the
DQL expression computing the index of the bin from the input, the first and the
last indexes, and the bounds of each bin. The bins must be consecutive: the upper
bound of a bin is the lower bound of the next. The implementation must be
immutable and serializable, because two instances with the same serialized form
are considered the same binning.
