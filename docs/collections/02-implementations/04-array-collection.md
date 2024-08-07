---
title: ArrayCollection
---

Modification to Doctrine's `ArrayCollection`, so that it does `matching()`
against the private properties directly, not against the return values of their
getters.

## Installation

```bash
composer require rekalogika/collections-domain
```

## Usage

Simply substitute `Doctrine\Common\Collections\ArrayCollection` with
`Rekalogika\Domain\Collections\ArrayCollection`:

```diff-php
- use Doctrine\Common\Collections\ArrayCollection;
+ use Rekalogika\Domain\Collections\ArrayCollection;
```

It should be safe to do a mass find-and-replace in all of your entities.

## Description

Doctrine entities usually initialize a `Collection` using `ArrayCollection` in
their constructors. But when the entity is hydrated from the database, Doctrine
ORM will inject a `PersistentCollection` directly into the property.

If we call `matching()` against the `PersistentCollection`, it will be done
against the related entities' private properties directly. While
`ArrayCollection` does it against the return values of the getters.

Therefore, there will be a 'mismatching' in the collection's behavior between
when the owning entity is new and not yet persisted, and after it is hydrated
from the database.

The problem happens when, for example:

* The property does not have a getter, or
* The getter returns a different value or different type from the property's
  value, or
* The getter contains business logic, and does not return the property's value
  as is.

The problem usually happens with new, not-yet-persisted entities, and in unit
tests where the tests don't involve the database.

Our `ArrayCollection` changes the behavior so that it does the `matching()`
against the private properties directly, so that both `Collection`s will have
the same behavior.

## Limitation

This problem will also happen when `fetch` set to `EAGER`, or when the
collection is initialized before the `matching()` is called. Unfortunately, it
is impossible to work around this problem outside Doctrine.

However, if you can afford to fetch the collection eagerly, then you can afford
to use `filter()` instead. Unlike `matching()`, `filter()` is always consistent
in every cases.

## Example

The following classes implement the [null object
pattern](https://en.wikipedia.org/wiki/Null_object_pattern). If the
`nationality` property is `null`, it will return an instance of `Stateless`
instead of `null`:

```php
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

class Country {}
class Stateless extends Country {}

class Player
{
    public function __construct(
        private string $name,
        private Team $team,
        private ?Country $nationality = null,
    ) {
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getTeam(): Team
    {
        return $this->team;
    }

    public function getNationality(): Country
    {
        return $this->country ?? new Stateless();
    }
}

class Team
{
    /** @var Collection<int,Player> */
    private Collection $players;

    public function __construct()
    {
        $this->players = new ArrayCollection();
    }

    /**
     * @return Collection<int,Player>
     */
    public function getPlayers(): Collection
    {
        return $this->players;
    }

    public function getStatelessPlayers(): Collection
    {
        return $this->players->matching(
            Criteria::create()
                ->where(Criteria::expr()->isNull('nationality'))
        );
}
```

If the `Team` is not yet persisted, the `getStatelessPlayers()` method will
incorrectly return an empty collection every time. But if the `Team` object is
hydrated from the database, it will correctly return the players without a
nationality.

Changing the code to use `Rekalogika\Domain\Collections\ArrayCollection` will
resolve the problem.