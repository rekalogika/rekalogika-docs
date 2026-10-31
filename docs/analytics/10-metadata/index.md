---
title: Metadata
---

Analytics maintains a set of metadata that describes your summary classes. They
can be accessed from several places, including from some of the context objects.

## Caching

The metadata is built by reading the attributes of the summary classes. When
the kernel is not in debug mode, the result is cached in the `cache.system`
cache pool, and the cache is warmed up during `cache:warmup`, so the first
request after a deployment does not need to read the attributes. In debug mode,
the metadata is only cached in memory, so changes to the attributes take effect
immediately.

import DocCardList from '@theme/DocCardList';

## Sections

<DocCardList />