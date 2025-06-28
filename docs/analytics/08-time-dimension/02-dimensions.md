---
title: Dimensions
---

To summarize a source time field to a single time dimension, you can use the
following pattern:

```php
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Core\Metadata as Analytics;
use Rekalogika\Analytics\Core\Entity\Summary;
use Rekalogika\Analytics\Core\ValueResolver\PropertyValue;
use Rekalogika\Analytics\Time\ValueResolver\TimeBinValueResolver;
use Rekalogika\Analytics\Time\Metadata\TimeProperties;
use Rekalogika\Analytics\Time\Bin\Date;
use Rekalogika\Analytics\Time\TimeBinType;

class OrderSummary extends Summary
{
    #[ORM\Column(type: TimeBinType::TypeDate, nullable: true)]
    #[Analytics\Dimension(
        source: new TimeBinValueResolver(
            input: new PropertyValue('time'),
            type: TimeBinType::Date,
        ),
    )]
    #[TimeProperties(
        sourceTimeZone: new \DateTimeZone('UTC'),
        summaryTimeZone: new \DateTimeZone('Asia/Jakarta'),
    )]
    private ?int $date = null;

    public function getDate(): ?Date
    {
        return $this->getContext()->getUserValue(
            property: 'date',
            class: Date::class,
        );
    }
}
```

The enum `TimeBinType` contains all the available time bin types, and all
their differences. Here, we use `TimeBinType::Date` to bin the input time to a
date.

`ORM\Column(type: TimeBinType::TypeDate`) is the Doctrine column type. The
enum `TimeBinType` contains the suitable Doctrine column type for each time
bin type, which may be `integer` or `smallint`, depending on the type.

The `source` is an instance of `TimeBinValueResolver`, which takes the input,
then bins it to the specified time bin type. Here we take the property `time`,
and bin it to a date.

The `TimeProperties` attribute is used to specify the source and summary time
zones. If the input expression does not contain a time zone, it will be assumed
to be in the source time zone. If the input contains a time zone, or if it is a
date, then the source time zone will be ignored. The summary time zone is used
to convert the input time to the summary time zone.

The property type hint of the time dimension must be `?int`.

The getter method `getDate()` returns the time dimension as an instance of
`Date`. The `getContext()->getUserValue()` method is used to automatically
get the value from the context. Internally, the context will get it from the
`TimeBinValueResolver`.

Technically, you can omit the smart getter, and return the integer value as is.
But the `Date` class and other `TimeBin`/`RecurringTimeBin` classes provide a
more convenient way to work with time dimensions. They provide descriptive
output, start and end times, and give the framework the ability to fill in
missing values in the output.

## Usage Inside a Dimension Group

If you want to use the time dimension inside a dimension group, you can do the
same as above with these changes:

* You don't need to supply the `input` parameter in the `TimeBinValueResolver`,
  as it will get the value from upstream.
* You should omit the `TimeProperties` attribute, so the user will be able to
  specify the time zone in the summary class.