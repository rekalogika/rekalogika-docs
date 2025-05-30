---
title: Using Pageable for Batch Processing
---

Any `PageableInterface` objects can be used to iterate its underlying data page
by page. Rather than loading the entire data set into memory, you can process
the data in multiple batches (or pages, or chunks, or slices).

## Prerequisites

When using the library only for batch processing, you only need to [install the
adapters](../adapters) you need. Framework integration is not required.

## Batch Processing

To iterate over a large amount of data, you can use the following pattern:

```php
use Doctrine\ORM\EntityManagerInterface;
use Rekalogika\Rekapager\PageableInterface;

/** @var PageableInterface $pageable */
/** @var EntityManagerInterface $entityManager */

foreach ($pageable->withItemsPerPage(1000)->getPages() as $page) {
    foreach ($page as $item) {
        // Do something with the item
    }

    // Do something after each page here
    // With Doctrine, you'd usually want to flush() and clear() here
    $entityManager->flush(); // if required
    $entityManager->clear();
}
```

## Always Use Keyset Pagination

While it is possible to use traditional offset pagination, you should always use
keyset pagination for batch processing:

* With offset pagination you risk missing items, or processing the same items
multiple times, if the underlying data changes while you are processing it.

* Offset pagination will become slower and slower as you go further away from
  the first page.

## Comparison to `Query::toIterable()`

Doctrine's documentation [recommends using
`Query::toIterable()`](https://www.doctrine-project.org/projects/doctrine-orm/en/latest/reference/batch-processing.html#iterating-results)
to iterate over large result sets. This, however, has several drawbacks:

* Contrary to what one might expect, `toIterable()` actually runs the query only
  once, then loads the entire result into memory, which can be problematic for
  large result sets. It only saves us memory and time in the hydration phase, in
  the sense that it does not hydrate the result into entities all at once.

* Even when you don't care about memory usage, queries with large results will be
  much slower to execute. The application must wait for the query to finish, and
  depending on the application, it may affect interactivity and user experience.

* With `toIterable()`, during the `postLoad` event, the state of the entity is
  [not guaranteed to be
  consistent](https://www.doctrine-project.org/projects/doctrine-orm/en/latest/reference/events.html#postload)
  as when loading the entity normally. So, if you have `postLoad` listener on
  your entities, your entities might not behave the same way as when you load
  them normally.

Using `PageableInterface` for batch processing should solve these issues.

## Running the Batch Process

The most common way to run a batch process is to create a console command. Read
the [Simple Batch Command](./batch-command) documentation for more information.