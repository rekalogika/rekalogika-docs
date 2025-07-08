---
title: Formatter Services
---

Formatter services are utility services that transforms values in the query
result to the format expected by other parts of the framework. There are four
types of formatter services available:

* `Stringifier`: Converts a value to a string.
* `Numberifier`: Converts a value to an integer or float. Used by `ChartBuilder`
  to convert measures to numbers.
* `Htmlifier`: Converts a value to an HTML string. Used by anything that renders
  the result to HTML.
* `Cellifier`: Converts a value to a `CellProperties` object, which is an object
  that describes a cell in a spreadsheet. Used by `SpreadsheetRenderer`.

The default formatter services try to do the conversion in a best-effort basis,
but if they can't, you need to implement the formatter service for the types
you need.

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
use Rekalogika\Analytics\Tests\App\Entity\Country;

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