---
title: Housekeeping
---

Maintaining a summary table involves ensuring that the data in the summary table
is up-to-date with the source table.

## Automatic Refresh

When the source entities are changed using Doctrine, the framework records the
affected partitions, and a refresh agent refreshes them in the background using
Symfony Messenger. The refresh is debounced, so frequent changes to the same
partition result in a single refresh. You can configure the timing:

```yaml title="config/packages/rekalogika_analytics.yaml"
rekalogika_analytics:
    refresh:
        # A dirty partition is not refreshed until its oldest change is at
        # least this old.
        minimum_age: 600
        # A dirty partition is not refreshed until there have been no new
        # changes for this long.
        minimum_idle_delay: 300
        # A dirty partition is refreshed once its oldest change is this old,
        # ignoring minimum_idle_delay.
        maximum_age: 1800
        # An upper-level partition is refreshed immediately after the
        # partitions below it, unless it has been refreshed within this period.
        upper_partition_cooldown: 300
```

All values are in seconds. A null value disables the setting. Lower values
make the summary closer to the source, at the cost of more frequent refreshes.

In the worst case, the summary lags behind the source by
`max(minimum_age, maximum_age) + (L - 1) × upper_partition_cooldown`, where `L`
is the number of levels of the partition, plus the time it takes to run the
refresh. With the default values and `UuidV7IntegerPartition`, it is 45
minutes. Changes to new records are not affected by
`upper_partition_cooldown`, and lag behind by at most 30 minutes. Setting
`maximum_age` to null while keeping `minimum_idle_delay` makes the lag
unbounded if the source changes continuously.

## Refreshing Manually from the Command Line

### Refreshing the Dirty Partitions

To immediately refresh all the dirty partitions of a summary table, without
waiting for the refresh agent:

```bash
php bin/console rekalogika:analytics:refresh 'App\Entity\SomeSummary'
```

If the class is omitted, the command asks you to choose one. Unlike the refresh
agent, this command ignores the `refresh` settings above, and refreshes every
dirty partition right away, including the upper-level partitions.

### Refreshing a Range

To refresh a range of the source records, regardless of whether they are dirty,
use the `rekalogika:analytics:refresh:range` command. Usually you would do this
once after the summary table is created.

```bash
php bin/console rekalogika:analytics:refresh:range 'App\Entity\SomeSummary' \
    [start key [end key]]
```

Optional arguments:

* `start key` is the start key for the range of entities to refresh. This is the
  partitioning key as described in the
  [partitioning](summary-entity/partitioning) documentation. If omitted, the
  refresh starts from the last summarized key.
* `end key` is the end key that marks the end of the range of entities to
  refresh.

Optional options:

* `--resume=<resume ID>`. If you interrupt the refresh process using
  <kbd>Ctrl</kbd>-<kbd>C</kbd>, it will tell you the resume ID. You can use this
  option to resume the refresh process from where it left off. Note that you
  need to make sure the rest of the arguments and options are the same as when
  you started the refresh process, otherwise the resume won't work.
* `--batchsize=<batch size>`. The number of partitions to refresh in a single
  roll up query. The default is 1. Increasing this may speed up or slow down the
  refresh process.

The same can be done programmatically using `SummaryManager::refresh()`.

### Concurrency

Refreshing the same partition concurrently would produce duplicate rows in the
summary table. Therefore, both commands and `SummaryManager::refresh()` use the
same lock as the refresh agent. If the refresh agent is refreshing the same
summary class, they wait for it to finish before starting, and the refresh agent
does not start while they are running.

### Truncating the Summary Table

To delete all the data in a summary table, along with its dirty flags and the
record of the last summarized key, use:

```bash
php bin/console rekalogika:analytics:truncate 'App\Entity\SomeSummary'
```

Afterwards, use `rekalogika:analytics:refresh:range` to populate the summary
table again.
