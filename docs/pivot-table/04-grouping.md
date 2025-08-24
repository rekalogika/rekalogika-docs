---
title: Grouping Strategies
---

The framework expects the data to be already 'cubed' by the database.
Nevertheless, it attempts to accommodate less comprehensive grouping strategies
as explained below.

## CUBE Strategy

The preferred grouping strategy is `CUBE`, which means that the data is
pre-aggregated for all combinations of dimensions. By using `CUBE`, you will get
accurate ordering, all the possible subtotals, and no wasted cells on pivoted
dimensions.

```sql
SELECT name, country, month, COUNT(*) AS count, SUM(price) AS sum,
    GROUPING(name, country, month) AS grouping
FROM items
-- highlight-next-line
GROUP BY CUBE(name, country, month)
ORDER BY name, country, month
```

:::tip

Even if the database does not support `CUBE`, it may be possible to emulate
`CUBE`. The technique is beyond the scope of this documentation, but if you can
do it, the result will be the same as using `CUBE`.

:::

## ROLLUP Strategy

If your database does not support `CUBE`, but supports `ROLLUP`, you can use it
instead. But note that with `ROLLUP`, some subtotals are not possible. And in
some cases, the ordering may not follow the specified `ORDER BY` clause.

```sql
SELECT name, country, month, COUNT(*) AS count, SUM(price) AS sum,
    GROUPING(name, country, month) AS grouping
FROM items
-- highlight-next-line
GROUP BY ROLLUP(name, country, month)
ORDER BY name, country, month
```

## No Grouping

The framework can also work with data that is only grouped by the full set of
dimensions. In this case, no subtotals are possible, and like `ROLLUP`, the
ordering may not follow the specified `ORDER BY` clause.

```sql
SELECT name, country, month, COUNT(*) AS count, SUM(price) AS sum
FROM items
-- highlight-next-line
GROUP BY name, country, month
ORDER BY name, country, month
```
