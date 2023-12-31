---
title: Loading Prevention in Extra Lazy Collections
---

Suppose you have an entity that has a one-to-many relation with a million of
related entities. The solution is to use [`fetch: 'EXTRA_LAZY'`](https://www.doctrine-project.org/projects/doctrine-orm/en/latest/tutorials/extra-lazy-associations.html) and `indexBy:
'id'`.

This will allow working with some of the methods of the collection without
loading the whole collection into memory. As long as you don't call the other
methods, you will be fine.

But then one of your team members forgets about it and inadvertently calls one of
the methods that triggers a full load of the collection. In their development
environment, it appears fine because of the much smaller dataset. It would pass
CI and be deployed to production. But in production, everything immediately
grinds to a halt because it tries to load a million records into memory.

A solution to prevent this problem is to decorate the collection to throw an
exception if an unsafe method is called.

The list of safe methods is listed in the documentation of [Extra Lazy
Association](https://www.doctrine-project.org/projects/doctrine-orm/en/current/tutorials/extra-lazy-associations.html).
They are: `contains()`, `containsKey()`, `count()`, `get()`, `slice()`, `add()`,
and `offsetSet()` if the first argument is null. We also add `matching()` to
that list.

## The Decorator Class

This package already comes with `ExtraLazyCollection` for this purpose.

:::info

While `ExtraLazyCollection` only allows the safe methods, they still implement
the `Collection` interface so that the object can still be used in places where
a `Collection` is expected.

:::

## Usage Example in Entities

```php
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Rekalogika\Collections\Decorator\ExtraLazy\ExtraLazyCollection;

#[ORM\Entity()]
class BookShelf
{
    // our bookshelf has a million of books...
    #[ORM\OneToMany(
        targetEntity: Book::class,
        fetch: 'EXTRA_LAZY', // needs this, or the safe methods become unsafe
        indexBy: 'id', // needs this, or containsKey() & get() become unsafe
    )]
    private Collection $books;

    public function getBooks(): Collection
    {
        return new ExtraLazyCollection($this->books);
    }
}
```
