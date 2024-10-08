---
title: Mapping Arrays & Array-Like Objects
---

This chapter describes how to map arrays and array-like objects.

## Mapping to an Array

Suppose you have these entities:

```php
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

class Post
{
    /** @var Collection<int,Comment> */
    private Collection $comments;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
    }

    /**
     * @return Collection<int,Comment>
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }
}

class Comment
{
    private string $text;

    public function __construct(string $text)
    {
        $this->text = $text;
    }

    public function getText(): string
    {
        return $this->text;
    }
}
```

To map those entities to the corresponding DTOs, you can simply create the DTOs
like the following. Notice the type-hint of the `$comments` property:

```php
class PostDto
{
    // highlight-next-line
    /** @var ?array<int,CommentDto> */
    public ?array $comments = null;
}

class CommentDto
{
    public string $text;
}
```

Then, you can map between the two objects:

```php
/** @var MapperInterface $mapper */

$postDto = $mapper->map($post, PostDto::class);
```

:::info

Without the type-hint, the mapper will copy the source objects to the target
array as-is.

:::

The source side must be an iterable: an array or a `Traversable` object, i.e.
anything that you can `foreach()` over.

## Mapping to an Array-Like Object

You can also map to an array-like object. Example:

```php
class PostDto
{
    /** @var ?\ArrayObject<int,CommentDto> */
    public ?\ArrayObject $comments = null;
}
```

Supported types of the target side:

* `ArrayAccess`
* `ArrayObject`
* `ArrayIterator`
* Doctrine `ReadableCollection`
* Doctrine `Collection`
* Doctrine `ArrayCollection`
* `CollectionInterface`

## Mapping Using Adder and Remover Methods

Mapper supports mapping using adder and remover method on the target side.
Example:

```php
class PostDto
{
    /** @var array<int,CommentDto> */
    private array $comments = [];

    /**
     * @return array<int,CommentDto>
     */
    public function getComments(): array
    {
        return $this->comments;
    }

    public function addComment(CommentDto $comment): void
    {
        $this->comments[] = $comment;
    }

    public function removeComment(CommentDto $comment): void
    {
        $key = array_search($comment, $this->comments, true);

        if ($key !== false) {
            unset($this->comments[$key]);
        }
    }
}
```

## `Generator`-Backed Mapping

If the target is type-hinted with `Traversable`, the mapper will map to a
`Generator` object.

```php
class PostDto
{
    /** @var ?\Traversable<int,CommentDto> */
    public ?\Traversable $comments = null;
}
```

With this approach, no values are stored on the target side. Instead, the target
will transform the source values to the desired type on-the-fly as you iterate
over it.

If the source is an array or an object that implements `Countable`, the result
will also be a `Countable`, i.e. that you can `count()` or `->count()`. In
addition, if your source is an extra-lazy Doctrine Collection, the consumer will
be able to `count()` the target without causing a full hydration of the source.

:::note

For this to work, the target must be null or unset.

:::

## Non-Integer and Non-String Keys

The mapper supports non-integer and non-string keys if the underlying objects
support it, including `SplObjectStorage`. The key value will be transformed to the
target key type-hint, just like the values. Example:

```php
class RelationshipMap
{
    /** @var \ArrayAccess<Person,Person> */
    public \ArrayAccess $spouseMap;

    public function __construct()
    {
        $this->spouseMap = new \SplObjectStorage();
    }
}

class RelationshipMapDto
{
    /** @var ?\ArrayAccess<PersonDto,PersonDto> */
    public ?\ArrayAccess $spouseMap = null;
}

$jack = new Person('Jack');
$jill = new Person('Jill');

$map = new RelationshipMap();
$map->spouseMap[$jack] = $jill;
$map->spouseMap[$jill] = $jack;

$mapDto = $mapper->map($map, RelationshipMapDto::class);
```

:::warning

For this to work, the type-hint of the target side cannot be `SplObjectStorage`
or other concrete class. Use `ArrayAccess` instead. Also it must be initially
null, not pre-initialized. The mapper uses a custom `HashTable` object on the
target side to accomplish this.

Using `Traversable` type hint also works.

:::

## Lazy Loading

The mapper supports lazy-loading, and will instantiate a lazy-loading object on
the target size if the conditions are met.

* The target must be type-hinted using `Traversable`, `ArrayAccess`, the special
  `CollectionInterface`, or Doctrine's `Collection` or `ReadableCollection`.
* If the target is `ArrayAccess` or `CollectionInterface`, the source must be an
  array, or an array-like object that implements `ArrayAccess`, `Traversable`,
  and `Countable` (pretty much all of them do).
* The target side cannot be a simple array.
* The target variable must not be pre-initialized. It must be null or
  uninitialized.
* The target property must not be using an adder method.
* Non-integer, non-string keys are not supported.

If lazy loading is active on the target side, and the source supports lazy
loading (like Doctrine `PersistentCollection`), the source will not be hydrated
unless the consumer actually uses the mapped property on the target side. This
might be useful, like if you are using the DTOs in a view, where you don't
always need to use the property.

## Deleting Items on the Target Side Not Present in Source

By default, the mapper will not remove items already existing on the target
side.

To change this behavior, you can add the `AllowDelete` attribute to the target
property, or the `AllowTargetDelete` attribute to the source property. Mapper
will remove existing items from the target side that are not present in the
source.

The following example maps a `Post` entity to a `PostDto` DTO.

```php
use Doctrine\Common\Collections\Collection;
use Rekalogika\Mapper\MapperInterface;
use Rekalogika\Mapper\Attributes\AllowDelete;
use Rekalogika\Mapper\Attributes\AllowTargetDelete;

class Post
{
    /** @var Collection<int,Comment> */
    // highlight-next-line
    #[AllowTargetDelete]
    private Collection $comments;
}

class PostDto
{
    /** @var ?array<int,CommentDto> */
    // highlight-next-line
    #[AllowDelete]
    public ?array $comments = null;
}

/** @var MapperInterface $mapper */
/** @var Post $post */
$dto = $mapper->map($post, PostDto::class);
```

:::tip Protip

If your property is virtual (i.e. a getter method without an actual property),
you may attach the `AllowDelete` attribute to to the getter or remover method,
and the `AllowTargetDelete` attribute to the getter method.

:::

:::note

The identity check is done on the items, after transformation. If you are
mapping a DTO to a persisted Doctrine entity, you need to use an object mapper
to map the DTO to the persisted Doctrine entity.

For an example on how to accomplish this, see [Mapping a DTO to a Persisted
Doctrine Entity](cookbook/doctrine-entity).

:::

## Mapping Between Object and Array

Mapping between an object and an array follows the same semantics as [mapping
involving an `stdClass`
object](object#classes-with-dynamic-properties-including-stdclass).

Internally, Mapper will convert the array to `stdClass`, and convert the result
back to an array if necessary.

## Attributes Handling

Some attributes are used to control the mapping between two objects. These
attributes can be attached to array or array-like objects, and will affect the
transformation between the members of the array or array-like object.

```php
use Rekalogika\Mapper\Attributes\DateTimeOptions;

class SomeObject
{
    /**
     * Array of dates in DateTimeInterface
     * 
     * @var array<int,\DateTimeInterface> */
    public array $dates;
}

class SomeObjectDto
{
    /**
     * Array of dates in string, in Y-m-d format
     * 
     * @var array<int,string>
     */
    #[DateTimeOptions(format: 'Y-m-d')]
    public array $dates = [];
}
```

With the above example, the mapper will transform the array of
`DateTimeInterface` to an array of string in `Y-m-d` format.