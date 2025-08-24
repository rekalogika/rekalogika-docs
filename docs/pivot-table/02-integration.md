---
title: Integration
---

When creating a pivot table, first the data source is converted into a `Table`
instance, usually using the provided `ArrayTable` adapter. Then the `Table` is
transformed into a `Cube` instance, which is then used by the framework to
generate the pivot table in the `HtmlTable\Table` instance. Finally, the
`HtmlTable\Table` instance is rendered into the desired output format, usually a
HTML string.

![Flow](./diagrams/flow.light.svg#light)
![Flow](./diagrams/flow.dark.svg#dark)

## Integration Options

If you already have the data in an array format, or can be converted into an
array, you can use the `ArrayTable` adapter to create a `Table` instance. The
array must be in the format of `iterable<array<string,mixed>>`.

If you have the data in a different format, you can create an adapter to a
`Table` by implementing the `Rekalogika\PivotTable\Contracts\Table\Table`
interface.

If your data is already in the form of a data cube, it might be possible to
directly create an adapter to a `Cube` by implementing the
`Rekalogika\PivotTable\Contracts\Cube\Cube` interface.