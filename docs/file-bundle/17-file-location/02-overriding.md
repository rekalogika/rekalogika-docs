---
title: Overriding the Algorithm
---

There are services that you can override to change the way the framework
determines where to store the files. The default implementation is usually
sufficient, but you can override it if you need to.

## File Location Resolver

To override the general algorithm that determines where to store the files, you
can create your own implementation of `ClassBasedFileLocationResolverInterface`.
It takes the class name of the object, the ID, and the property name; then
returns a `FilePointerInterface`.

For an example, see the class `DefaultClassBasedFileLocationResolver`.

## Object ID Resolver

`ClassBasedFileLocationResolverInterface` takes the object's ID as a string. To
determine the ID, the framework uses `ObjectIdResolverInterface`.

You can create an `ObjectIdResolverInterface` if you need to override how the
framework obtains an object's identifier. This is usually only necessary if your
object's ID cannot be serialized to string, which should never happen in
practice.

## Class Signature Resolver

The framework calls `ClassSignatureResolverInterface` to convert the class name
into its signature. This is done so that the class name does not appear in the
file path. The default implementation is `DefaultClassSignatureResolver` which
converts the class name into its SHA-1 hash.

Also available is `AttributeClassSignatureResolver`, it looks for the
`WithFileAssociation` attribute on the class and uses the value of its argument
as the class signature. This is useful if you are renaming a class as it would
result in a different SHA-1 hash, and the framework would not be able to find
previously stored files.

## Manual Service Configuration

If you are not using autoconfiguration, you have to tag the services you created
in the service container. Example:

```yaml
services:
    App\MyClassBasedFileLocationResolver:
        tags:
            - { name: 'rekalogika.file.association.class_based_file_location_resolver' }

    App\MyObjectIdResolver:
        tags:
            - { name: 'rekalogika.file.association.object_id_resolver' }

    App\MyClassSignatureResolver:
        tags:
            - { name: 'rekalogika.file.association.class_signature_resolver' }
```
