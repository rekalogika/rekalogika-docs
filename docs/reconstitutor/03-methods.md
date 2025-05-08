---
title: Methods
---

There are several methods that you can override in your reconstitutor classes.
Most of the time, you will be working with the `onSave()`, `onLoad()`, and
`onRemove()` methods.

## `onCreate()`

Executed when the object is added to the persistence layer, e.g. when you first
call Doctrine's `EntityManager::persist()` on the object.

:::warning

Implementors should generally avoid using this method for initializing the
object, and instead initialize the object using a factory. Changing the object's
behavior in this method can be surprising to the caller and can be considered
anti-pattern.

:::

## `onLoad()`

Called when the object is loaded from the database. For example, when you call
`EntityManager::find()` or `EntityManager::findAll()`, or when you use `Query`
to load the object.

:::note

If the object is a proxy, `onLoad()` will be called only after the object is
initialized. Calling `EntityManager::getReference()` by itself does not trigger
`onLoad()`.

:::

## `onSave()`

Called after the object is saved to the database. For example, when you call
`EntityManager::flush()`.

:::note

`onSave()` will be called for all initialized objects in the unit of
work, even if the object is not dirty.

If the object is an uninitialized proxy, `onSave()` will not be called on that
object.

:::

## `onRemove()`

Called when the object is removed from the database. For example, when you
mark the object to be removed using `EntityManager::remove()`, then call
`EntityManager::flush()`.

:::note

If the object is an uninitialized proxy when you call `EntityManager::remove()`,
the framework will initialize the object before calling `onRemove()`. So
`onRemove()` will always get an initialized object, but already removed from
database by Doctrine.

:::

## `onClear()`

Called when the object is cleared from the persistence layer. For example, when
you call `EntityManager::clear()`, and also when you call
`EntityManager::detach()` then `EntityManager::flush()`.

:::note

We cannot call `onClear()` right on `EntityManager::detach()`, because Doctrine
does not provide the necessary event. We can know they are being detached only
after `EntityManager::flush()` is called because we track the objects as they go
through their lifecycle.

:::