---
title: Dimension Groups
---

If you need to summarize your data by time, most of the time you will want to
use one of the pre-made time dimension groups. It allows you to break down your
data by year, month, day, hour, and other time units.

## Example

```php
use Doctrine\Common\Collections\Order;
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Core\Metadata as Analytics;
use Rekalogika\Analytics\Core\Entity\BaseSummary;
use Rekalogika\Analytics\Core\ValueResolver\PropertyValue;
use Rekalogika\Analytics\Time\Dimension\System\GregorianDateWithHour;
use Symfony\Component\Translation\TranslatableMessage;

class OrderSummary extends BaseSummary
{
    #[ORM\Embedded()]
    // highlight-start
    #[Analytics\Dimension(
        source: new PropertyValue('time'),
        label: new TranslatableMessage('Placed Time'),
        orderBy: Order::Ascending,
    )]
    #[TimeProperties(
        sourceTimeZone: new \DateTimeZone('UTC'),
        summaryTimeZone: new \DateTimeZone('Asia/Jakarta'),
    )]
    private GregorianDateWithHour $time;
    // highlight-end
}
```

In this example, the property `$time` in the `OrderSummary` class will be
summarized into the `GregorianDateWithHour` dimension group. You will be able to
select the time using the notation `time.year.year`, `time.month.month`,
`time.month.monthOfYear`, `time.date.date`, etc.

## Available Dimension Groups

You can use any of these pre-made dimension groups in your summaries, or use
these as a base to create your own custom dimension groups.

![Dimension groups](./diagrams/dimension-group.light.svg#light)
![Dimension groups](./diagrams/dimension-group.dark.svg#dark)

:::note

In the diagram above, inheritance is conceptual, and implemented using a trait.
Doctrine does not support inheritance in embedded objects, so any inheritance
must be done using traits and interfaces.

:::