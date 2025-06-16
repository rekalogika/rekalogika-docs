---
title: Dimensions
---

A summary table can have one or more dimensions. Dimensions are properties of
the source entity that are used to group the data. They have distinct, descriptive
values.


## Dimension Definition

In a summary table, a dimension is marked by the `#[Analytics\Dimension]`
attribute.

```php
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Contracts\Metadata as Analytics;
use Rekalogika\Analytics\Core\ValueResolver\PropertyValue;
use Symfony\Component\Translation\TranslatableMessage;

class YourSummary extends Summary
{
    #[ORM\Column(type: Types::STRING)]
    // highlight-start
    #[Analytics\Dimension(
        source: new PropertyValue('status'),
        label: new TranslatableMessage('Status'),
    )]
    // highlight-end
    private ?string $status = null;
}
```

Arguments:

* `source`: A [`ValueResolver`](../value-resolver) or a string that defines how
  to get the value from the source entity. A string will be converted to a
  `PropertyValue` internally.
* `label`: A label for the dimension. An output renderer will be able to use it
  as a column header or a chart legend. It can be a string or a
  `TranslatableInterface` instance, which allows it to be translated into
  different languages.
* `orderBy`: Can be `Order::Ascending` or `Order::Descending`. This
  defines how the dimension values are ordered in the summary table. If not
  specified, the default order is ascending.
* `nullLabel`: Describes the dimension value when the source value is `null`, so
  the final output can be made more readable.
* `sourceTimeZone`: The time zone of the source value.
* `summaryTimeZone`: The time zone of the summary value.
  
If the field type is time or date, `sourceTimeZone` and `summaryTimeZone`
defines the time zone of the source value and the summary value, respectively.
The framework will use the information for time zone conversion.

## Hierarchical Dimensions

A dimension can be hierarchical. A common example is the `time` dimension. The
`time` dimension can be further divided into `year`, `month`, `day`, and more.
The caller will then be able to decide whether to group the time by `year`,
`month`, or `day`, etc.

A hierarchical dimension is represented by a Doctrine embeddable. The following
example uses a `TimeDimensionHierarchy`.

```php
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Analytics\Contracts\Metadata as Analytics;
use Rekalogika\Analytics\Time\Hierarchy\TimeDimensionHierarchy;
use Rekalogika\Analytics\Core\ValueResolver\PropertyValue;

class YourSummary extends Summary
{
    #[ORM\Embedded()]
    #[Analytics\Dimension(
        source: new PropertyValue('time'),
        sourceTimeZone: new \DateTimeZone('UTC'),
        summaryTimeZone: new \DateTimeZone('Asia/Jakarta'),
    )]
    private TimeDimensionHierarchy $time;
}
```

The framework provides these predefined time hierarchies:

* `TimeDimensionHierarchy`
* `DateDimensionHierarchy`
* `SimpleTimeDimensionHierarchy`
* `SimpleDateDimensionHierarchy`