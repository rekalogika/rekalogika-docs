---
title: Formatter Services
---

Formatter services are utility services that transform values in the query
result to the format expected by other parts of the framework. There are four
types of formatter services available:

* `Stringifier`: Converts a value to a string.
* `Numberifier`: Converts a value to an integer or float. Used by
  `ChartGenerator` to convert measures to numbers.
* `Htmlifier`: Converts a value to an HTML string. Used by anything that renders
  the result to HTML.
* `Cellifier`: Converts a value to a `CellProperties` object, which is an object
  that describes a cell in a spreadsheet. Used by `SpreadsheetRenderer`.

The default formatter services try to do the conversion on a best-effort basis,
but if they can't, you need to implement the formatter service for the types
you need. Your implementations are registered automatically if you use
autoconfiguration, and take precedence over the default ones.

## Default Stringification

Without a custom `Stringifier`, the values are converted to strings as follows:

* A `TranslatableInterface` is translated.
* An integer or a float measure value is formatted according to the current
  locale, e.g. `1,234.5`. A non-zero number between -1 and 1 is formatted with
  up to 3 significant digits, so that `0.000123` is not rendered as `0`.
* An integer dimension member, like a year, is not formatted as a number in the
  pivot table, the chart labels, and the filters, so `2024` is not rendered as
  `2,024`.
* A `Stringable` object is converted using its `__toString()` method.
* An enum is rendered as its case name.
* `null` is rendered as `-`.
* Any other object is rendered as `object`. The class name and the identifier
  are not shown, so internal details do not leak to the user interface.

Therefore, if a dimension uses an entity that is neither `Stringable` nor
`TranslatableInterface`, e.g. a `Country` entity, you should implement a
`Stringifier` for it. Otherwise, all of its members are rendered as `object`.

In a spreadsheet, integers and finite floats are written as numeric cells, so
they can be summed and sorted. Other values are written as text, using the
stringifier.

## Example: `MoneyNumberifier`

This is the numberifier for the `Money` object of the `brick/money` package. The
`Money::__toString()` does not return a number, but a string with the currency
code, so the framework cannot automatically convert it to a number. This is how
you can implement the `Numberifier` for the `Money` object:

```php
use Brick\Money\Money;
use Rekalogika\Analytics\Frontend\Formatter\Numberifier;
use Rekalogika\Analytics\Frontend\Formatter\ValueNotSupportedException;

final class MoneyNumberifier implements Numberifier
{
    #[\Override]
    public function toNumber(mixed $input): float
    {
        if (!$input instanceof Money) {
            throw new ValueNotSupportedException();
        }

        return $input->getAmount()->toFloat();
    }
}
```

## Example: `CountryWithFlagHtmlifier`

Suppose you have a `Country` object, and it would be nice to render it with a
flag emoji. You can implement the `Htmlifier` for the `Country` object like this:

```php
use Rekalogika\Analytics\Frontend\Formatter\Htmlifier;
use Rekalogika\Analytics\Frontend\Formatter\ValueNotSupportedException;
use App\Entity\Country;

final class CountryHtmlifier implements Htmlifier
{
    #[\Override]
    public function toHtml(mixed $input): string
    {
        if (!$input instanceof Country) {
            throw new ValueNotSupportedException();
        }

        $emoji = $this->countryCodeToEmojiFlag($input->getCode());

        return \sprintf(
            '%s %s',
            $emoji,
            $input->getName() ?? '',
        );
    }

    /**
     * @see https://nick.blog/2018/07/27/php-display-country-flag-emoji-from-iso-3166-1-alpha-2-country-codes/
     */
    private function countryCodeToEmojiFlag(string $countryCode): string
    {
        $countryCode = strtoupper($countryCode); // Ensure uppercase
        $flag = '';

        foreach (str_split($countryCode) as $char) {
            /** @psalm-suppress PossiblyFalseOperand */
            $flag .= mb_convert_encoding('&#' . (127397 + \ord($char)) . ';', 'UTF-8', 'HTML-ENTITIES');
        }

        return $flag;
    }
}
```