---
title: Pager and PagerItem
---

A `PagerInterface` represents navigation through a collection of items. A view
layer can use it to render a pagination control. 

A pager works at a higher level than a `PageableInterface`. It needs to be able
to determine the current page from the context of the request, and to be able to
generate URLs for each page. A framework integration will give you a way to
transform a `PageableInterface` object into a `PagerInterface` object.

Currently, we provide integration for
[Symfony](./05-framework-integration/01-symfony.md) and [API
Platform](./05-framework-integration/02-api-platform.md). Check out these pages
to see how to transform a `PageableInterface` object into a `PagerInterface` in
the framework you are using.

A pager has many pager items. A pager item is an extended page object that
contains a URL.

![Pager](./diagrams/pager.light.svg#light)
![Pager](./diagrams/pager.dark.svg#dark)

