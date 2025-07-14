---
title: Refresh Mechanism
---

## `DirtyFlag`

A `DirtyFlag` is an entity indicating a dirty partition, which is a partition in
a summary table that needs to be refreshed. `DirtyFlag` should be persisted and
flushed at the same time as the rest of the entities, during the `onFlush`
event. So if the flush fails, the flag will not be saved.

A `DirtyFlag` can have null partition information. In this case, it means there
are new persisted entities that need to be summarized. New entities need to be
handled differently because they are not guaranteed to have an ID before flush.

## `SourceEntityListener`

Listens on Doctrine's `onFlush` event. For every pending entities, it checks the
change set and determines if the change affects any summary tables. If a
property is changed, and that would affect one or more summary tables, it
creates the corresponding `DirtyFlag` objects for each of the partition that
needs to be refreshed.

:::warning

This automatic detection works only for simple cases: it only detects the change
of the properties in the entity itself. If the change that would affect the
summary is in a related entity, the framework cannot detect that.

:::

At the end of a flush, the listener will dispatch a `NewDirtyFlagEvent` event
for each of the created `DirtyFlag` objects, and also a `DirtySummaryEvent`
for each of the summary tables that need to be refreshed.

## `DirtySummaryEventListener`

Listens on the `DirtySummaryEvent` event. It calls
`RefreshAgentRunner::refresh()` to run the refresh agent for the summary table,
if one is not already running.
