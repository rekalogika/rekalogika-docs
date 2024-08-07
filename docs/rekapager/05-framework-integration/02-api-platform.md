---
title: API Platform Integration
---

API Platform integration is provided by the package
`rekalogika/rekapager-api-platform`.

## Installation

Preinstallation checklists:

* Make sure Composer is installed globally, as explained in the [installation
  chapter](https://getcomposer.org/doc/00-intro.md) of the Composer
  documentation. Run `composer about` to verify.
* Make sure your project has Symfony Flex installed and enabled (it is enabled
  by default). Run `composer why symfony/flex` to verify.

Open a command console, enter your project directory, and execute:

```bash
composer require rekalogika/rekapager-api-platform
```

## Provided Components

* A decorator for `OpenApiFactoryInterface` that changes the type of every
  'page' query parameter from integer to string. It should still be compatible
  with API Platform's standard pagination system.
* `PagerNormalizer`: a normalizer for `PagerInterface`.
* `RekapagerExtension`: an extension for API Platform's Doctrine ORM integration
  to use Rekapager.
* `PagerFactory`: creates a `PagerInterface` object from a `PageableInterface`,
  the current operation, and the context. Useful in a state provider or
  processor.

## Usage in a State Provider or Processor

In a state provider, you can use `PagerFactoryInterface` to transform any
`PageableInterface` into a `PagerInterface`. Then, you can simply return the
pager instance and our `PagerNormalizer` will output it correctly.

```php
use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProviderInterface;
use Rekalogika\Rekapager\ApiPlatform\PagerFactoryInterface;
use Rekalogika\Rekapager\Doctrine\Collections\SelectableAdapter;
use Rekalogika\Rekapager\Keyset\KeysetPageable;

/**
 * @implements ProviderInterface<Post>
 */
class PostProvider implements ProviderInterface
{
    public function __construct(
        private PagerFactoryInterface $pagerFactory,
    ) {
    }

    public function provide(
        Operation $operation,
        array $uriVariables = [],
        array $context = []
    ): object|array|null {
        $pageable = ...; // Get or create a PageableInterface object here

        // highlight-next-line
        $pager = $this->pagerFactory->createPager($pageable, $operation, $context);

        return $pager;
    }
}
```

`PagerFactory` should respect these standard API Platform settings in the
operation, as well as their corresponding global settings.

* `paginationItemsPerPage`: the number of items per page.
* `paginationClientEnabled`: whether to enable the pagination settings from the
  client.
* `paginationClientItemsPerPage`: the number of items per page that the client
  requested.
* `paginationMaximumItemsPerPage`

## Doctrine ORM Support

This package supports the pagination for API Platform's Doctrine ORM integration
as an alternative to the default pagination. Its usage is opt-in. You can enable
it per operation using the `rekapager_orm_enabled` extra property:

```php
#[ApiResource(
    extraProperties: [
        'rekapager_orm_enabled' => true
    ]
)]
class Post
{
    // ...
}
```

To enable it globally, you can set it in the configuration:

```yaml title="config/packages/api_platform.yaml"
api_platform:
    defaults:
        extra_properties:
            rekapager_orm_enabled: true
```