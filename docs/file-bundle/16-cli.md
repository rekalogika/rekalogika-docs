---
title: Command Line Utilities
---

Currently there is one command line utility available in the bundle.

## `rekalogika:file:resolve`

This command is used to resolve the file path for a given property of an object
managed by Doctrine.

```bash
$ php bin/console rekalogika:file:resolve <entity> <id> <property> 

# Example:
$ php bin/console rekalogika:file:resolve 'App\Entity\Article' 01955f6c-f3ff-7830-b78b-1b06603c1c98 image
```