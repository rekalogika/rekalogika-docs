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

Listens on Doctrine's `onFlush` event. For every pending entity, it checks the
change set and determines if the change affects any summary tables. If a
property is changed, and that would affect one or more summary tables, it
creates the corresponding `DirtyFlag` objects for each of the partitions that
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

## Refresh Agent

The refresh agent runs in the background, in a separate process from the one
that modified the source entities. It is dispatched by `RefreshAgentRunner` as
a `RefreshAgentStartCommand` to be executed by `RefreshAgent`. Only one refresh
agent can run for a summary class at a time. This is enforced by
`RefreshAgentLock`. The lock is always released after the agent finishes, even
if the refresh fails. The manual refresh commands and `SummaryManager::refresh()`
also wait for and hold the same lock, because concurrent refreshes of the same
partition produce duplicate rows.

### Debouncing Source Changes

Refreshing a partition every time its source records change would be wasteful
if the records are changed frequently. Instead, the refresh of the lowest-level
partitions is debounced according to the `RefreshAgentStrategy`:

* `minimumAge`: a dirty partition is not refreshed until its oldest dirty flag
  is at least this old. Defaults to 10 minutes.
* `minimumIdleDelay`: a dirty partition is not refreshed until there have been
  no new dirty flags for it for this long. Defaults to 5 minutes.
* `maximumAge`: once the oldest dirty flag of a partition is this old, the
  `minimumIdleDelay` requirement is waived, so that a partition that is
  continuously receiving changes is not postponed indefinitely. Defaults to 30
  minutes.

Multiple changes to the same partition are coalesced into a single refresh. In
a busy table, a partition receiving continuous changes is refreshed at most
once every `maximumAge`, and its summary lags behind the source by at most the
same amount.

New records are recorded as dirty flags without partition information, because
they might not have an ID before the flush. The refresh agent converts them to
dirty flags of the partitions of the new records. The converted flags inherit
the creation time of the original flags, so the debouncing is based on the
time the records were created, not the time the agent converts them.

### Scheduling

The refresh agent runs only when there is something to refresh:

* After source changes are flushed, `RefreshAgentRunner` schedules the agent
  to run when the new dirty flags will satisfy the strategy, unless the agent
  is already scheduled to run before that.
* Before exiting, the agent determines the earliest time one of the remaining
  dirty partitions will be ready to be refreshed, and schedules itself to run
  again at that time, unless it is already scheduled to run before that.
  Therefore, a refresh is never lost even if no more changes are made to the
  source.
* If the agent cannot acquire the lock because another refresh is running, it
  schedules itself to run again later. The other refresh might have missed the
  dirty flags created after it started.

The time of the next scheduled run is stored in `SummaryProperties`. This keeps
the number of pending runs per summary class small, regardless of how often the
source changes. A scheduled run that is lost, for example because the worker
crashed, does not stop the refresh permanently: once the scheduled time has
passed, the next change to the source schedules a new run.

### Propagating to Upper Partitions

After a partition is refreshed, its parent partition is marked as dirty, if the
parent partition is used by queries. Queries use an upper partition only if
it is complete, i.e. it is entirely before the latest summarized record.
Therefore, appending new records only causes an upper partition refresh once,
when the upper partition becomes complete. Most upper partition refreshes are
caused by changes to older records.

Unlike the lowest-level partitions, the dirty upper partitions are caused by
the refresh itself, not by changes in the source, so they are not subject to
the `RefreshAgentStrategy` debouncing. Instead, they are debounced using a
cooldown period, `upperPartitionCooldown`, defaulting to 5 minutes:

* An upper partition is refreshed immediately after its children, in the same
  run, unless it has been refreshed within the cooldown period.
* If it has been refreshed within the cooldown period, its dirty flag is kept,
  and the agent schedules itself to refresh it when the cooldown period ends.

The upper partitions are processed from the lowest to the highest level, so the
propagation reaches the top level in a single run. All the partitions refreshed
in a run share the same refresh time, so their cooldown periods end at the same
time. Usually, the entire chain of upper partitions is refreshed in the same
run, and the delays do not accumulate across levels. Each upper partition lags
behind the partitions below it by at most the cooldown period, while each upper
partition is refreshed at most once per cooldown period, regardless of how the
changes in the source are distributed.

The refresh times of the upper partitions are recorded in `RefreshLog`. Records
older than the cooldown period are removed by the agent.

### Worst-Case Lag

The lag is the time between a change being committed to the source table and
the change being reflected in the query results. Its theoretical maximum is
determined as follows.

**Lowest-level partition.** A dirty partition is ready to be refreshed at
`min(latest + minimumIdleDelay, earliest + maximumAge)`, but not before
`earliest + minimumAge`, where `earliest` and `latest` are the creation times
of its oldest and newest dirty flags. The dirty flag of a change is never older
than the oldest dirty flag of its partition, so the change is refreshed at most
`max(minimumAge, maximumAge)` after it is made. The agent is scheduled to run
exactly at that time.

**Upper partitions.** After a partition is refreshed, its parent is refreshed
in the same run, or at most `upperPartitionCooldown` later if the parent is in
its cooldown period. Usually, the entire chain is refreshed in the same run.
But in the worst case, every level waits for a full cooldown period: the parent
was refreshed just before the child, the grandparent was refreshed, through
another child, just before the parent, and so on. It requires frequent changes
to many partitions, which is the case in a busy table. Therefore, the upper
partitions add at most `(L - 1) × upperPartitionCooldown`, where `L` is the
number of partition levels.

Combined:

```text
maximum lag = max(minimumAge, maximumAge)
            + (L - 1) × upperPartitionCooldown
            + overhead
```

With the default strategy:

| Partition class               | Levels | Maximum lag (excluding overhead) |
| ----------------------------- | -----: | -------------------------------- |
| `UuidV7IntegerPartition`      |      4 | 30 + 3 × 5 = 45 minutes          |
| `DefaultIntegerPartition`     |      5 | 30 + 4 × 5 = 50 minutes          |
| `SingleLevelIntegerPartition` |      1 | 30 minutes                       |

The upper partition term only applies to changes to older records. New records
only affect upper partitions that are not complete yet, and are not used by
queries. When an upper partition becomes complete, it has never been refreshed,
so it is not in the cooldown period. Therefore, new records are reflected in
the query results at most `max(minimumAge, maximumAge)` plus overhead after
they are created.

The overhead is not bounded by the framework:

* The time the agent takes to refresh the partitions, including waiting for
  another refresh to finish. A run refreshes all the partitions that are ready,
  so this grows with the number of partitions ready at the same time.
* The delivery latency of Symfony Messenger, e.g. the availability of the
  workers, the backlog of the queue, and the polling interval of the transport.
* Up to one second, because the timestamps are stored with second precision.
* If the lock is held by the manual `rekalogika:analytics:refresh` command,
  which does not reschedule the agent, up to the initial scheduling delay after
  the command finishes, i.e. `max(minimumAge, min(minimumIdleDelay,
  maximumAge))`, which is 10 minutes by default.

The lag is unbounded if:

* `maximumAge` is null while `minimumIdleDelay` is not. A partition that
  receives changes more often than `minimumIdleDelay` is never refreshed.
* No worker is consuming the messages.
* A scheduled run is lost, and no more changes are made to the source. The
  remaining dirty partitions are refreshed only after the next change, or by
  the manual refresh command.

The manual `rekalogika:analytics:refresh` command does not use the debouncing
nor the cooldown period, it refreshes all the dirty partitions immediately.
