---
title: Source Entities
---

When working with a cell, it is possible to easily access the source entities
that were previously aggregated into the cell. This functionality uses our
[`rekalogika/rekapager`](../../rekapager/index.md) package to efficiently handle
large datasets.

## Iterating Over the Source Entities

To iterate over the source entities of a cell, you can do something like this:

```php
use Doctrine\ORM\EntityManagerInterface;
use Rekalogika\Analytics\Contracts\Result\Cell;

/** @var EntityManagerInterface $entityManager */
/** @var Cell $cell */

$sourceEntities = $cell->getSourceEntities();

if ($sourceEntities === null) {
    // if the result is null, then the source entities are not available.
    throw new \RuntimeException('Source entities are not available.');
}

// Safely iterate over the source entities.
foreach ($sourceEntities->withItemsPerPage(1000)->getPages() as $page) {
    foreach ($page as $entity) {
        // Do something with $entity
    }

    // Flush changes to the database if needed.
    $entityManager->flush();
    // Clear the EntityManager to free up memory.
    $entityManager->clear();
}
```

## Pagination and Other Features

The returned `PageableInterface` object supports all the features provided by
the Rekapager package, including pagination, batch processing, and more. You can
refer to the [Rekapager documentation](../../rekapager/index.md) for more
details.