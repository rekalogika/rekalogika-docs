---
title: Data Binning
---

Data binning groups a continuous value into a small number of ranges, called
bins. For example, it can group the age of a customer into age groups, or the
price of an order into price ranges, so that the bins can be used as the members
of a dimension.

The [time dimension](../08-time-dimension/index.md) is a kind of data binning:
it groups a date and time into bins like days, months, or hours of the day. This
section describes the binning of numbers. Two value resolvers are available,
both in the `Rekalogika\Analytics\Numeric` namespace:

* [`RangeBinValueResolver`](./01-range-bins.md) bins a number into the cases of
  a backed enum that you define. Use it if you want to name each bin yourself.
* [`NumericBinValueResolver`](./02-numeric-bins.md) bins a number using an
  algorithm: bins of equal width, bins growing geometrically, or bins with
  arbitrary thresholds. Use it if the bins follow a pattern, or if there are
  many of them.

Both kinds of bins cover a half-open interval, from the lower bound (inclusive)
to the upper bound (exclusive). They are sorted by their range in the query
result, not by their names, and the framework fills in the bins missing from the
result, like it does with the time bins. In SQL, they are computed with a `CASE`
expression or arithmetic, so you do not need to write a `CustomExpression` for
them.

import DocCardList from '@theme/DocCardList';

## Sections

<DocCardList />
