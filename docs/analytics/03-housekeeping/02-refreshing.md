---
title: Refreshing
---

## Automatic Refresh

When the source entities are changed using Doctrine, the framework records the
affected partitions, as described in [Change
Detection](./01-change-detection.md), and a refresh agent refreshes them in the
background using Symfony Messenger. The refresh is debounced, so frequent
changes to the same partition result in a single refresh. You can configure the
timing:

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

To find out how fresh a particular query result is, use
[`CubeCell::getValidAsOf()`](../04-query/01-querying.md#freshness-of-the-result).

The refresh agent logs its activity to the `rekalogika.analytics` Monolog
channel. The [`rekalogika:analytics:status`](../14-console-commands.md#rekalogikaanalyticsstatus)
command shows the pending dirty flags and the scheduled refresh of each
summary.

## Sweeper

The refresh agent is dispatched when new dirty flags are created by a flush or
by `SummaryManager::markDirty()`. But the dispatched message can be lost, or
end up in the failure transport. And the dirty flags created by the [database
triggers](./01-change-detection.md#database-triggers) do not dispatch the
refresh agent at all. In these cases, the dirty partitions wait until the next
change to the same summary.

The sweeper dispatches the refresh agent for every summary that has dirty flags
but no pending run. It is recommended to run it periodically, and it is
required if you use the database triggers. You can run it using Symfony
Scheduler:

```php title="src/Scheduler/AnalyticsSchedule.php"
namespace App\Scheduler;

use Rekalogika\Analytics\Engine\RefreshAgent\RefreshAgentSweepCommand;
use Symfony\Component\Scheduler\Attribute\AsSchedule;
use Symfony\Component\Scheduler\RecurringMessage;
use Symfony\Component\Scheduler\Schedule;
use Symfony\Component\Scheduler\ScheduleProviderInterface;

#[AsSchedule('analytics')]
final class AnalyticsSchedule implements ScheduleProviderInterface
{
    public function getSchedule(): Schedule
    {
        return (new Schedule())->add(
            RecurringMessage::every('1 minute', new RefreshAgentSweepCommand()),
        );
    }
}
```

Then consume the schedule's transport in a worker:

```bash
php bin/console messenger:consume scheduler_analytics
```

The sweep itself is quick, so `RefreshAgentSweepCommand` does not need to be
routed to an asynchronous transport. Alternatively, run the
`rekalogika:analytics:sweep` command periodically, e.g. from cron.

A run is considered pending if it is scheduled in the future, or if it is
overdue by less than the grace period, because the message might still be in
the queue:

```yaml title="config/packages/rekalogika_analytics.yaml"
rekalogika_analytics:
    refresh:
        # A scheduled run of the refresh agent that is overdue by more than
        # this many seconds is considered lost, and is dispatched again.
        sweep_grace: 300
```

Dispatching a duplicate run is harmless.

## Refresh Lock

Concurrent refreshes of the same summary would produce duplicate rows, so every
refresh holds a lock for the summary. By default, it is a PostgreSQL advisory
lock on the connection of the summary, which needs no additional
infrastructure. To use a [Symfony Lock](https://symfony.com/doc/current/lock.html)
store instead:

```yaml title="config/packages/rekalogika_analytics.yaml"
rekalogika_analytics:
    refresh_lock:
        # The service ID of a symfony/lock LockFactory.
        factory: lock.factory
        # The lock expires if a single step of a refresh takes longer than
        # this many seconds. Null disables expiration, if the store supports
        # it.
        ttl: 300
```

Avoid a store using the same database connection as the summaries. If a
refresh fails in an aborted transaction, the lock could not be released. See
[Refresh Mechanism](../99-internals/02-refresh.md#locking) for the details.

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

* `start key` is the first key of the range of entities to refresh, inclusive.
  This is the partitioning key as described in the
  [partitioning](../02-summary-entity/02-partitioning.md) documentation. If
  omitted, the refresh continues from the last summarized key, or starts from
  the earliest key in the source if the summary table is empty.
* `end key` is the last key of the range, inclusive. If omitted, the refresh
  runs until the latest key in the source.

Optional options:

* `--resume=<resume ID>`. If you interrupt the refresh process using
  <kbd>Ctrl</kbd>-<kbd>C</kbd>, it will tell you the resume ID. You can use this
  option to resume the refresh process from where it left off. Note that you
  need to make sure the rest of the arguments and options are the same as when
  you started the refresh process, otherwise the resume won't work.
* `--batchsize=<batch size>`. The number of partitions to process in one unit
  of work, at every partition level. The lowest-level partitions are refreshed
  in batches of this many partitions, then each upper level is rolled up in
  batches of this many partitions of that level. The default is 1, and it must
  be at least 1. Increasing this may speed up or slow down the refresh process.

The same can be done programmatically using `SummaryManager::refresh()`. Its
`$batchSize` argument works in the same way, and an `InvalidArgumentException`
is thrown if it is less than 1.

### Concurrency

Refreshing the same partition concurrently would produce duplicate rows in the
summary table. Therefore, the refresh commands, the truncate command, and
`SummaryManager::refresh()` use the same lock as the refresh agent. If the
refresh agent is refreshing the same summary class, they wait for it to finish
before starting. The refresh agent does not start while they are running. It
tries again every 10 seconds until the lock is released.

### Truncating the Summary Table

To delete all the data in a summary table, along with its dirty flags and the
record of the last summarized key, use:

```bash
php bin/console rekalogika:analytics:truncate 'App\Entity\SomeSummary'
```

The command asks for confirmation. In non-interactive mode, the answer defaults
to no, so the table is not truncated. It takes the refresh lock, and deletes the
summary data, the dirty flags, and the last summarized key in a single
transaction, so a failure leaves the summary table unchanged.

Afterwards, use `rekalogika:analytics:refresh:range` to populate the summary
table again.
