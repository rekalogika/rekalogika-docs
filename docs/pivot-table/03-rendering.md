---
title: Rendering a Pivot Table
---

Rendering a pivot table is done by an instance of `TableVisitor`. The framework
provides a default implementation `BasicTableRenderer`, which renders the pivot
table into an HTML string.

To customize the rendering, the easiest way is to extend the
`BasicTableRenderer` class and override the relevant methods. Usually you will
want to override the `visitContent()` method to customize the rendering of any
cell content.