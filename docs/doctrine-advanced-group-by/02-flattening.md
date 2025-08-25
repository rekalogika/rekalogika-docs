---
title: Flattening
---

It is possible to flatten a `GroupBy` object into another instance of `GroupBy`
with a single level of grouping sets.

```php
$groupBy1 = new GroupBy(
    new RollUp(
        new Field('a'),
        new Field('b'),
    ),
);

$groupBy2 = new GroupBy(
    new GroupingSet(
        new FieldSet(),
        new FieldSet(
            new Field('a'),
        ),
        new FieldSet(
            new Field('a'),
            new Field('b'),
        ),
    ),
);
```

In the example above, `$groupBy2` is the flattened version of `$groupBy1`.
You can transform `$groupBy1` into `$groupBy2` using the `flatten` method.

```php
$flattened = $groupBy1->flatten();
```

This is useful if you need to know if the `GroupBy` generates more than
4096 grouping sets, which is the limit of the database. Or, you can use it
to split the query into multiple smaller queries.