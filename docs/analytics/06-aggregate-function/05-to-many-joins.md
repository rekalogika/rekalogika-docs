---
title: To-Many Joins Are Not Yet Supported
---

While our property paths fully supports one-to-many and many-to-many joins, it
requires subqueries in the resulting SQL query. This is not yet supported by
Analytics. Doing so right now will result in the wrong results being returned.
Specifically, aggregation functions in the source entity will get the same field
multiple times, resulting in a higher result than the correct one.