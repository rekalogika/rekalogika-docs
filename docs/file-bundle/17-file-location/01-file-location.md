---
title: Where The Files Are Stored
---

The service `ChainedClassBasedFileLocationResolver` decides where to store the
file. It takes the entity class, identifier, and the name of the property
holding the file and outputs a `FilePointer` pointing to the location where the
file in that property will be stored.

## Default Algorithm

The default implementation `DefaultClassBasedFileLocationResolver`
stores files into the filesystem with the identifier 'default' and the key
similar to the following:

```
entity/ffa87ef3fc5388bc8b666e2cec17d27cc493d0c1/image/e5/80/72/6d/31337
╰----╯ ╰--------------------------------------╯ ╰---╯ ╰---------╯ ╰---╯
  A                      B                        C        D        E
```

* A: Prefix, defaults to 'entity'.
* B: The class signature, by default it is the SHA-1 hash of the entity's
  fully-qualified class name.
* C: Property name.
* D: Hashed directories of the entity's ID. The ID is hashed using SHA-1, then
  split by 2 characters each. Then, the first four of them are taken to form
  the directory structure.
* E: The entity ID.

This default should be sufficient in most cases, for all entities, and all
types of file system. It is chosen with the following objectives in mind:

* It masks internal details (entity class names) because we may need to expose
  the name to the Internet.
* It does not store too many files in a single directory because some
  file system types struggle with a huge number of files in a directory.
* The ordering is chosen to make it easier for manual administration tasks.

To obtain the entity's ID, `DefaultFileLocationResolver` calls
`ObjectIdResolverInterface`. By default, it is `DoctrineObjectIdResolver` which
obtains the ID from Doctrine Entity Manager.

`DefaultFileLocationResolver` then uses
`ClassBasedFileLocationResolverInterface` to determine the location of the file
which ultimately provides the above logic.

## Determining the File Location

To determine the location of a file, you can use the `rekalogika:file:resolve`
command. The command takes the entity class, the identifier, and the property
name of the file in the class, in that order:

```bash
$ php bin/console rekalogika:file:resolve \
      'App\Entity\Article' \
      01955f6c-f3ff-7830-b78b-1b06603c1c98 \
      image
```

The information will also appear in Symfony's profiler panel.

## About File Names

Like modern key-value cloud storage services, this framework uses the concept of
'keys', not 'paths'. The file name is not used as the name of the key but is
stored in the metadata, along with other properties of the file (file size,
type, etc.). The original file name is never considered when determining where to
store the file.

The metadata itself is stored in a sidecar file. Using the example above, the
metadata will be stored in this location:

```
entity/ffa87ef3fc5388bc8b666e2cec17d27cc493d0c1/image/e5/80/72/6d/31337.metadata
```

The caller can obtain the file name using the appropriate methods:

```php
$imageFilename = $entity->getImage()?->getName();
```

When possible, the framework should copy the file name of the original file to
the destination metadata when the file was first associated with the entity.

## How It Works

The storage key of the file is deterministic. It is determined only by the
object's class name, the object's ID, and the name of the property containing the
file. As long as those don't change, the key will remain the same.

When persisting an entity, the framework will calculate the destination storage
key of every applicable property of the entity, and compare it to the current
file residing on each property:

* If both are the same, the framework leaves it alone.
* If they are different, the framework will copy the file from the entity to the
  storage destination.
* If null, the framework will attempt to remove the file from the storage,
  irrespective of whether the file exists or not.

## Architecture

In a nutshell: Doctrine Unit Of Work ➡️ Doctrine Events ➡️
`rekalogika/reconstitutor` ➡️ `InterfaceReconstitutor` &
`AttributeReconstitutor` ➡️ `ObjectManagerInterface` ➡️
`PropertyManagerInterface` ➡️ `FileRepository` (from rekalogika/file).

`InterfaceReconstitutor` & `AttributeReconstitutor` are the entry points of this
package. They execute methods of `ObjectManagerInterface` which calls
`PropertyManagerInterface`, which in turn  works with the entities and
`FileRepository` to manage the association between the entities and files.

`InterfaceReconstitutor` & `AttributeReconstitutor` are registered to the
service container so that they are called by our `rekalogika/reconstitutor` when
the relevant events are being emitted by Doctrine. The service configuration is
done by the package `rekalogika/file-bundle`.
