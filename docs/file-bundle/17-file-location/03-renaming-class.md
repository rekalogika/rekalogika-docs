---
title: Renaming Class
---

If you rename a class, the framework will not be able to find the existing files
associated with the class. This is because the framework uses the class name to
determine where to store the files.

By default, the framework uses the SHA-1 hash of the class name to determine the
file location. If you rename the class, the SHA-1 hash will change, and the
location of the files will change as well.

To avoid this, you can use the `WithFileAssociation` attribute on the class to
specify a custom class signature. This will allow you to rename the class
without changing the file location.

```php
use Rekalogika\File\Attribute\WithFileAssociation;

#[WithFileAssociation('ffa87ef3fc5388bc8b666e2cec17d27cc493d0c1')]
class Product
{
    // ...
}
```

To obtain the class signature of the old class, you can apply SHA-1 to the old
class name. For example, you can use a command line like this:

```bash
$ echo -n 'App\Entity\Product' | sha1sum
de668c84f52045975aafef2fc0cd7913dee79056
```