---
title: Introduction
---

`rekalogika/mapper` is an object mapper for PHP and Symfony, also commonly known
as an automapper. It maps an object to another object. Primarily used to map an
entity to a DTO, but also useful for other mapping purposes. It removes the
complexity of mapping an object to another object, and even an object graph to
another object graph.

## Synopsis

```php
use App\Entity\Book;
use Rekalogika\Mapper\MapperInterface;

/** @var MapperInterface $mapper */
/** @var Book $book */

$result = $mapper->map($book, BookDto::class);

// or map to an existing object

$bookDto = new BookDto();
$mapper->map($book, $bookDto);
```

## Why Use a Mapper?

Why do we need to use a mapper to save a few keystrokes, and not just use
something simple like this?

```php
class BookDto
{
    public static function create(Book $book): self
    {
        $dto = new self();
        // ...

        return $dto;
    }
}
```

Everyone must have that idea at some point. However, as the project grows, the
target classes (DTOs) may start to reference each other, and become a rich
object graph. Your code will start to have many special cases, and is no longer
as simple as you thought it would be. It becomes harder to maintain, and then
eventually forces you to sit back and try to resolve the problem. When (if?) you
successfully engineer a solution, you will end up with something that resembles
a mapping framework anyway.

Mapping can be simple, but can also become a highly complex task. A mapper is
created out of necessity to handle the complexity, not just as a means of saving
a few keystrokes.

## Features

### General

* Automatically lists the properties of the source and target, detects their
  types, and maps them accordingly.
* Reads the type from PHP type declaration and PHPDoc annotations, including
  the type of the nested objects.
* Does not attempt to circumvent your class constraints. Reads only from and
  writes only to public properties, getters, setters. Does not instantiate
  objects without their constructor.
* Constructor initialization.
* Supports immutable setters, also known as wither methods.
* Handles nested objects.
* Handles recursion and circular references.
* Inheritance support. Maps to abstract classes and interfaces using an
  inheritance map attribute.
* Maps to and from `stdClass`, objects extending `stdClass`, and other objects
  with dynamic properties (`#[AllowDynamicProperties]`).
* Specify the source or target using property path.
* Maps an object to an array, and vice versa.
* Support for variadic setters and constructors.
* Support for third-party objects: Doctrine Collections, Symfony Uid, Ramsey
  UUID.
* DateTime timezone and format conversion.
* Cache pre-warming for busy workloads and read-only deployments.

### Custom Mapping

* Override the mapping of a specific property using a custom property mapper.
* Override the mapping between two specific classes using a custom object
  mapper.
* Extend the mapper by creating new transformers, or decorating the existing
  ones.
* Match classes using attributes in your transformers, in addition to using
  class names.
* Preset mapping. Provide a table of predetermined mappings that the mapper can
  use.

### Object Lazy-Loading

* If possible, target objects are lazy-loaded. The mapping does not take place
  until the target is accessed, and will never take place if it is never
  accessed.
* Attempts to detect identifier properties on the source side. Those properties
  will be mapped eagerly to the target side, as they should not trigger the
  hydration of the source. As an example, API Platform will be able to generate
  IRIs without causing Doctrine to hydrate the entire object graph.
* Uses native PHP > 8.4 lazy objects if available, and falls back to
  `symfony/var-exporter` if not available.

### Arrays and Array-Like Objects

* Handles the mapping between `array` or array-like objects.
* Handles adder and remover methods on the target side.
* Supports immutable adders and removers, where the methods return a new
  instance of the host object.
* Handles non-string & non-integer keys in array-like objects, including
  `SplObjectStorage`.
* Option to remove existing items from the target if they are not present in the
  source.

### Array-Like Lazy-Loading

* Lazy loading if the target is type-hinted with `ArrayAccess`, `Traversable` or
  `CollectionInterface`. The target will not iterate the source object until it
  is accessed, or never if it is never accessed.
* Stream mapping. Maps the source members to the target side as they are being
  iterated. This may consume less memory.
* With lazy loading, if the source is a `Countable`, then the target will also
  be a `Countable`. With an extra-lazy Doctrine Collection, the consumer will be
  able to count the target without causing a full hydration of the source.

### Development Experience (DX)

* Helpful exception messages.
* Console commands for debugging.
* Data collector and profiler integration.
* Coded from the start using PHP 8, strict types, and maxed-out PHPStan and
  Psalm level.

## To-Do List

* Option to read & write to private properties.
* Migrate engine to `symfony/type-info`.
* Auto-detect static factory method.
* Improve non-framework usage.

## License

MIT

## Contributing

Issues and pull requests should be filed in the GitHub repository
[rekalogika/mapper](https://github.com/rekalogika/mapper).