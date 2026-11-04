---
title: Introduction
---

Creates and maintains pre-aggregated summary tables for Doctrine entities.
Provides a fast and easy way to perform analytical queries.

This package works using the classical OLAP cube approach of data warehousing.
It processes data from the source table and pre-aggregates it in a summary table.
This summary table is then used to perform analytical queries.

:::danger

These packages are still in development and not yet ready for production use.
Not all features are implemented yet and the API is subject to change.

:::

## Advantages

Works directly on the entities. Does not use intermediate fact tables. Does not
require any additional ETL processes.

Optimized for incremental updates. (TBD explain)

Better logistics. No need to pass data to and from external systems. No need to
maintain additional infrastructure.

A simpler and cheaper alternative to modern analytical solutions. Less
sophisticated but probably good enough for many use cases.

Sometimes things can be more challenging legally and politically, rather than
technically. This framework does not require you to send data to the cloud, so
it complies with the 'no-cloud' policy if you happen to be bound by it.

Architecturally sensible if the result of the analytical query will be used as
an input of a business process in the same application, as opposed to being used
for external reporting purposes only.

Understands Doctrine's metadata, unlike external solutions that work directly
with the database. No need to duplicate the knowledge about your database
schema between your application and the external analytical system.

Detects if an entity is added, modified, or deleted, including changes to the
related entities that a summary reads through an association. It can then
automatically update the summary table accordingly. No need to devise a way to
signal an external system that the data has changed. Or even to blindly
recalculate all data up to 5 years ago periodically, just because you fear some
process might have changed records that old, but you can't know for certain.
Changes made outside the ORM, like DQL `UPDATE` or native SQL, can be reported
manually, or recorded using database triggers.

## Requirements

* PHP 8.2 or later.
* Symfony 6.4, 7.x, or 8.x. Only the usage under Symfony is supported for now.
* Doctrine ORM 2.20 or later, or 3.x, with DoctrineBundle and
  DoctrineMigrationsBundle.
* PostgreSQL. Other databases are not supported yet. The
  [`hll`](https://github.com/citusdata/postgresql-hll) extension is required
  if you use [approximate distinct
  counts](./06-aggregate-function/03-count-distinct.md).
* Symfony Messenger, with a worker consuming an asynchronous transport, for the
  background refreshes.

## Demo

A self-contained demo image, including PostgreSQL, sample data, and
pre-populated summary tables, is available:

```bash
docker run --rm -p 8123:8000 ghcr.io/rekalogika/analytics-demo
```

Then open `http://localhost:8123` in your browser.

## Installation

Install the bundle using Composer:

```bash
composer require rekalogika/analytics-bundle
```

Optionally, install the frontend, which renders the results as pivot tables,
charts, and spreadsheets, and the UX panel, which lets users choose the
parameters of a pivot table interactively:

```bash
composer require rekalogika/analytics-frontend rekalogika/analytics-ux-panel
```

The [quickstart](./01-quickstart.md) walks through a complete setup.

Configure Symfony Messenger routing configuration. For example:

```yaml title="config/packages/messenger.yaml"
framework:
    messenger:
        routing:
            Rekalogika\Analytics\Engine\RefreshAgent\RefreshAgentStartCommand: async
```

The message is dispatched on the default message bus of your application, the
`messenger.default_bus` service. If you have configured several buses, it is
the one set as `default_bus` in the Messenger configuration.

To recover from lost messages, and to process the dirty flags created by the
database triggers, also run the [sweeper](./03-housekeeping/02-refreshing.md#sweeper)
periodically.

## License

MIT

## Contributing

This framework consists of multiple repositories split from a monorepo. Be
sure to submit issues and pull requests to the
[`rekalogika/analytics`](https://github.com/rekalogika/analytics) monorepo.
