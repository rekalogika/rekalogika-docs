---
title: Configuration
---

This is the configuration of the bundle, with the default values:

```yaml title="config/packages/rekalogika_analytics.yaml"
rekalogika_analytics:
    # The maximum number of results returned from a query. A query exceeding
    # this limit throws an OverflowException.
    query_result_limit: 5000

    # The maximum number of nodes created to fill the gaps between values,
    # e.g. the missing months in a time dimension. Going over this limit
    # throws an OverflowException.
    filling_nodes_limit: 10000

    # The Twig theme used to render pivot tables. It should extend
    # @RekalogikaAnalyticsFrontend/renderer.html.twig. A Bootstrap 5 theme is
    # available as @RekalogikaAnalyticsFrontend/bootstrap_5_renderer.html.twig.
    table_theme: '@RekalogikaAnalyticsFrontend/renderer.html.twig'

    # Determines when the refresh agent refreshes the dirty partitions. All
    # values are in seconds, null disables the setting.
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
        # partitions below it, unless it has been refreshed within this
        # period.
        upper_partition_cooldown: 300

        # Used by the sweeper. A scheduled run of the refresh agent that is
        # overdue by more than this is considered lost, and is dispatched
        # again.
        sweep_grace: 300

    # The lock that prevents concurrent refreshes of the same summary.
    refresh_lock:
        # The service ID of a symfony/lock LockFactory to use, e.g.
        # lock.factory. If null, PostgreSQL advisory locks on the connection of
        # the summary are used. Avoid a store using the same database
        # connection as the summaries.
        factory: null

        # Used with factory. The lock expires if a single step of a refresh
        # takes longer than this, in seconds. Null disables expiration, if the
        # store supports it.
        ttl: 300
```

More information:

* [Refreshing](./03-housekeeping/02-refreshing.md) describes the `refresh`
  timing, the sweeper, and the refresh lock.
* [Table Renderer](./11-user-interface/01-table-renderer.md) describes the
  `table_theme`.
