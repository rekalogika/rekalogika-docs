---
title: Serialization
---

Passing around cube cells between different requests or different contexts is a
common use case. To facilitate this, this package provides tools to serialize
coordinates and deserialize the resulting data back into cells.

![Serialization](./diagrams/serialization.light.svg#light)
![Serialization](./diagrams/serialization.dark.svg#dark)

## Serialization

To serialize a cell coordinates, you can use `CoordinatesMapper::toDto()`
method.

```php
use Rekalogika\Analytics\Contracts\Serialization\CoordinatesMapper;
use Rekalogika\Analytics\Contracts\Result\Cell;

/** @var CoordinatesMapper $mapper */
/** @var Cell $cell */

// Transform the cell coordinates to a DTO.
$dto = $mapper->toDto($cell->getCoordinates());
$dto = $mapper->toDto($cell); // cell is also accepted

// Some of the serialization options you can use.
$serialized = serialize($dto);
$json = json_encode($dto);
$array = $dto->toArray();
```

The resulting `CoordinatesDto` instance contains all the necessary information
to reconstruct the original cell, and it is safe to serialize it. The
serialization method itself is left to you. You may use any serialization method
you prefer, including `serialize()`, `json_encode()`, Symfony Serializer, or
other methods. Also available is the `toArray()` method, which converts the DTO
to an associative array.

## Deserialization

To deserialize a `CoordinatesDto` back into a cell, you can use the
`CoordinatesMapper::fromDto()` method.

```php
use Rekalogika\Analytics\Contracts\Dto\CoordinatesDto;
use Rekalogika\Analytics\Contracts\Serialization\CoordinatesMapper;
use Rekalogika\Analytics\Contracts\Result\Cell;

/** @var CoordinatesMapper $mapper */
/** @var class-string $summaryClass */

// Deserialize the DTO from the serialized data.
$dto = unserialize($serialized);
$dto = json_decode($json, true);
$dto = CoordinatesDto::fromArray($array);

// Reconstruct the cell from the DTO.
/** @var CoordinatesDto $dto */
$cell = $mapper->fromDto($summaryClass, $dto);
```