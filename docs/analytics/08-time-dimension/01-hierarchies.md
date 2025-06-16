---
title: Hierarchies
---

If you need to summarize your data by time, most of the time you will want to
use one of the pre-made time dimension hierarchies. It allows you to break
down your data by year, month, day, hour, and other time units.

## Example

```php
use Doctrine\Common\Collections\Order;
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Contracts\Metadata as Analytics;
use Rekalogika\Analytics\Core\Entity\Summary;
use Rekalogika\Analytics\Core\ValueResolver\PropertyValue;
use Rekalogika\Analytics\Time\Hierarchy\TimeDimensionHierarchy;
use Symfony\Component\Translation\TranslatableMessage;

class OrderSummary extends Summary
{
    #[ORM\Embedded()]
    // highlight-start
    #[Analytics\Dimension(
        source: new PropertyValue('time'),
        label: new TranslatableMessage('Placed Time'),
        sourceTimeZone: new \DateTimeZone('UTC'),
        summaryTimeZone: new \DateTimeZone('Asia/Jakarta'),
        orderBy: Order::Ascending,
    )]
    private TimeDimensionHierarchy $time;
    // highlight-end
}
```

In this example, the property `$time` in the `OrderSummary` class will be
summarized into the `TimeDimensionHierarchy` hierarchy. You will be able to
select the time using the notation `time.year`, `time.month`, `time.day`, etc.

## Available Hierarchies

These are the available time dimension hierarchies and their corresponding
properties:

<table>
<thead>
<tr>
<th>Field</th>
<th class="text-vertical">`TimeDimensionHierarchy`</th>
<th class="text-vertical">`TimeWithoutWeekDimensionHierarchy`</th>
<th class="text-vertical">`DateDimensionHierarchy`</th>
<th class="text-vertical">`DateWithoutWeekDimensionHierarchy`</th>
<th>Trait</th>
</tr>
</thead>

<tbody>

<!-- year -->

<tr>
<td>year</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
<td>`YearTrait`</td>
</tr>

<!-- weekYear -->

<tr>
<td>weekYear</td>
<td>✔️</td>
<td>❌</td>
<td>✔️</td>
<td>❌</td>
<td>`WeekYearTrait`</td>
</tr>

<!-- quarter -->

<tr>
<td>quarter</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
<td rowspan="2">`QuarterTrait`</td>
</tr>

<tr>
<td>quarterOfYear</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
</tr>

<!-- month -->

<tr>
<td>month</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
<td rowspan="2">`MonthTrait`</td>
</tr>

<tr>
<td>monthOfYear</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
</tr>

<!-- week -->

<tr>
<td>week</td>
<td>✔️</td>
<td>❌</td>
<td>✔️</td>
<td>❌</td>
<td rowspan="3">`WeekTrait`</td>
</tr>

<tr>
<td>weekOfYear</td>
<td>✔️</td>
<td>❌</td>
<td>✔️</td>
<td>❌</td>
</tr>

<tr>
<td>weekOfMonth</td>
<td>✔️</td>
<td>❌</td>
<td>✔️</td>
<td>❌</td>
</tr>

<!-- date -->

<tr>
<td>date</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
<td rowspan="5">`DayTrait`</td>
</tr>

<tr>
<td>weekdate</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
</tr>
<tr>
<td>dayOfWeek</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
</tr>
<tr>
<td>dayOfMonth</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
</tr>
<tr>
<td>dayOfYear</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
</tr>

<!-- hour -->

<tr>
<td>hour</td>
<td>✔️</td>
<td>✔️</td>
<td>❌</td>
<td>❌</td>
<td rowspan="2">`HourTrait`</td>
</tr>

<tr>
<td>hourOfDay</td>
<td>✔️</td>
<td>✔️</td>
<td>❌</td>
<td>❌</td>
</tr>

</tbody>

</table>

## Traits

The traits listed in the last column of the table above are useful if you
want to create a custom time dimension hierarchy. Read the existing hierarchies
to see how they are used.