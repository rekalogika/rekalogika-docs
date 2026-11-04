---
title: Console Commands
---

The bundle provides these console commands. Commands that take a summary
class expect its fully qualified class name, e.g. `'App\Entity\OrderSummary'`.
Quote it, so that the shell does not interpret the backslashes.

| Command                                                                   | Description                                                          |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`rekalogika:analytics:refresh`](#rekalogikaanalyticsrefresh)             | Refreshes all the dirty partitions of a summary immediately.        |
| [`rekalogika:analytics:refresh:range`](#rekalogikaanalyticsrefreshrange)  | Refreshes a range of source records, dirty or not.                   |
| [`rekalogika:analytics:truncate`](#rekalogikaanalyticstruncate)           | Deletes all the data of a summary table.                             |
| [`rekalogika:analytics:sweep`](#rekalogikaanalyticssweep)                 | Dispatches the refresh agent of the summaries with no pending run.   |
| [`rekalogika:analytics:status`](#rekalogikaanalyticsstatus)               | Shows the refresh status of the summaries.                           |
| [`rekalogika:analytics:verify`](#rekalogikaanalyticsverify)               | Compares a summary with its source.                                  |
| [`rekalogika:analytics:trigger:dump`](#rekalogikaanalyticstriggerdump)    | Prints the SQL of the PostgreSQL triggers.                           |
| [`rekalogika:analytics:trigger:install`](#rekalogikaanalyticstriggerinstall) | Installs the PostgreSQL triggers.                                 |
| [`rekalogika:analytics:trigger:drop`](#rekalogikaanalyticstriggerdrop)    | Drops the PostgreSQL triggers.                                       |
| [`rekalogika:analytics:debug:summary`](#rekalogikaanalyticsdebugsummary)  | Shows the metadata of a summary.                                     |
| [`rekalogika:analytics:debug:source`](#rekalogikaanalyticsdebugsource)    | Shows which changes to a source class refresh which summaries.       |
| [`rekalogika:analytics:uuid:summary-to-source`](#rekalogikaanalyticsuuidsummary-to-source) | Converts a UUIDv7 partition key to a source key.    |

## Refreshing

### `rekalogika:analytics:refresh`

```bash
php bin/console rekalogika:analytics:refresh [<class>]
```

Refreshes all the dirty partitions of a summary immediately, including the
upper-level partitions. Unlike the refresh agent, it ignores the `refresh`
timing settings and the upper partition cooldown.

| Argument | Description                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------- |
| `class`  | The summary class. If omitted, the command asks you to choose one. Required in non-interactive mode. |

See [Refreshing](./03-housekeeping/02-refreshing.md#refreshing-the-dirty-partitions).

### `rekalogika:analytics:refresh:range`

```bash
php bin/console rekalogika:analytics:refresh:range <class> [<start> [<end>]] \
    [--resume=<resume ID>] [--batchsize=<batch size>]
```

Refreshes a range of source records, regardless of whether they are dirty.
Usually run once to populate a new summary table.

| Argument / option | Description                                                                                                           |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| `class`           | The summary class.                                                                                                    |
| `start`           | The first partitioning key, inclusive. If omitted, continues from the last summarized key, or from the earliest key in the source if the summary is empty. |
| `end`             | The last partitioning key, inclusive. If omitted, up to the latest key in the source.                                 |
| `--resume`        | Resumes an interrupted refresh using the resume ID it reported. Use the same arguments and options as the interrupted run. |
| `--batchsize`     | The number of partitions processed in one unit of work, at every partition level. Default 1, minimum 1.              |

See [Refreshing](./03-housekeeping/02-refreshing.md#refreshing-a-range).

### `rekalogika:analytics:truncate`

```bash
php bin/console rekalogika:analytics:truncate [<class>]
```

Deletes all the data of a summary table, its dirty flags, and the record of its
last summarized key, in a single transaction, while holding the refresh lock.
The command asks for confirmation. In non-interactive mode, the answer defaults
to no, and the table is not truncated.

| Argument | Description                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------- |
| `class`  | The summary class. If omitted, the command asks you to choose one. Required in non-interactive mode. |

See [Refreshing](./03-housekeeping/02-refreshing.md#truncating-the-summary-table).

### `rekalogika:analytics:sweep`

```bash
php bin/console rekalogika:analytics:sweep
```

Dispatches the refresh agent of every summary that has dirty flags but no
pending run, e.g. because a message was lost, or because the dirty flags were
created by the database triggers. A run is considered pending if it is scheduled
in the future, or overdue by less than the `refresh.sweep_grace` setting, 300
seconds by default. Run it periodically, e.g. every minute. The same can be done
by sending a `RefreshAgentSweepCommand` message, e.g. using Symfony Scheduler.

## Monitoring

### `rekalogika:analytics:status`

```bash
php bin/console rekalogika:analytics:status [<class>]
```

Shows, for each summary:

* the number of dirty flags, by partition level, and for the new records not
  assigned to a partition yet,
* the time of the earliest dirty flag,
* when the next refresh is due,
* when the refresh agent is scheduled to run, and whether it is overdue,
* the latest summarized key, and the latest key in the source.

An overdue scheduled run while partitions are still dirty might mean the
dispatched message was lost. `rekalogika:analytics:sweep` dispatches it again.

| Argument | Description                                               |
| -------- | --------------------------------------------------------- |
| `class`  | The summary class. If omitted, every summary is shown.    |

### `rekalogika:analytics:verify`

```bash
php bin/console rekalogika:analytics:verify <class> [<start> [<end>]] \
    [--sample=<count>] [--batchsize=<batch size>] [--repair]
```

Rolls up the source again, compares the result with the summary table, and
reports the partitions that differ, e.g. because of a change that was not
detected. The command fails if any partition differs, so it can be run
periodically as a check. It skips the partitions that are already dirty, and
the ones containing source entities that are not summarized yet.

| Argument / option | Description                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------- |
| `class`           | The summary class.                                                                          |
| `start`           | The first partitioning key. If omitted, from the earliest key in the source.               |
| `end`             | The last partitioning key. If omitted, up to the latest summarized key.                    |
| `--sample`        | Verifies this many randomly chosen partitions, instead of a range.                          |
| `--batchsize`     | The number of partitions rolled up and compared in one query. Default 1.                    |
| `--repair`        | Marks the partitions that differ as dirty, so that the refresh agent refreshes them.        |

See [Change Detection](./03-housekeeping/01-change-detection.md#verifying-a-summary).

## Database Triggers

These commands manage the PostgreSQL triggers that create the dirty flags for
the changes made outside the ORM. See [Change
Detection](./03-housekeeping/01-change-detection.md#database-triggers).

### `rekalogika:analytics:trigger:dump`

```bash
php bin/console rekalogika:analytics:trigger:dump [--drop]
```

Prints the SQL creating the triggers, grouped by entity manager, e.g. to be put
in a migration. This is the recommended way to install the triggers in
production.

| Option   | Description                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| `--drop` | Prints the SQL dropping the triggers that exist in the database instead.      |

### `rekalogika:analytics:trigger:install`

```bash
php bin/console rekalogika:analytics:trigger:install
```

Installs the triggers directly in the database, replacing the existing ones.
Meant for development.

### `rekalogika:analytics:trigger:drop`

```bash
php bin/console rekalogika:analytics:trigger:drop
```

Drops the triggers from the database.

## Debugging

### `rekalogika:analytics:debug:summary`

```bash
php bin/console rekalogika:analytics:debug:summary [<summaryClass>] [--query]
```

Shows the metadata of a summary: its general information, its dimensions, and
its measures.

| Argument / option | Description                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| `summaryClass`    | The summary class. If omitted, the command asks you to choose one. Required in non-interactive mode.         |
| `--query`         | Also shows the SQL used to delete the summary partitions, to roll up the source, and to roll up each level of the summary. |

### `rekalogika:analytics:debug:source`

```bash
php bin/console rekalogika:analytics:debug:source [<sourceClass>]
```

Shows the properties of a class whose changes refresh the summaries, including
the properties read through associations, and warns about the paths whose
changes are not tracked.

| Argument      | Description                                               |
| ------------- | --------------------------------------------------------- |
| `sourceClass` | The source class. If omitted, every source class is shown. |

See [Change
Detection](./03-housekeeping/01-change-detection.md#inspecting-the-tracked-properties).

### `rekalogika:analytics:uuid:summary-to-source`

```bash
php bin/console rekalogika:analytics:uuid:summary-to-source <integerkey>
```

For a summary using [`UuidV7IntegerPartition`](./02-summary-entity/02-partitioning.md),
converts an integer partition key found in the summary table to the smallest
UUIDv7 with the same timestamp. The result can be used as a key in the source,
e.g. as the start key of `rekalogika:analytics:refresh:range`.

| Argument     | Description                                      |
| ------------ | ------------------------------------------------ |
| `integerkey` | The integer key from the summary table.          |
