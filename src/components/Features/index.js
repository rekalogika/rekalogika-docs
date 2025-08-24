import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const frameworks = [
  {
    title: 'rekalogika/analytics',
    link: 'analytics',
    tags: ['doctrine', 'symfony'],
    description: (
      <>
        Creates and maintains pre-aggregated summary tables for Doctrine entities.
        Provides a fast and easy way to perform analytical queries.
      </>
    ),
  },
  {
    title: 'rekalogika/api-lite',
    link: 'api-lite',
    tags: ['api-platform', 'symfony'],
    description: (
      <>
        A set of tools to simplify working with API Platform in your projects, in a way that is more aligned with the principles of Domain-Driven Design.
      </>
    ),
  },
  {
    title: 'rekalogika/collections',
    link: 'collections',
    tags: ['doctrine'],
    description: (
      <>
        Pragmatic, opinionated extensions to Doctrine's Collections library.
      </>
    ),
  },
  {
    title: 'rekalogika/domain-event',
    link: 'domain-event',
    tags: ['symfony', 'doctrine'],
    description: (
      <>
        Domain event pattern implementation for Symfony and Doctrine.
      </>
    ),
  },
  {
    title: 'rekalogika/file',
    link: 'file',
    tags: ['php'],
    description: (
      <>
        High-level file abstraction library built on top of Flysystem.
      </>
    ),
  },
  {
    title: 'rekalogika/file-bundle',
    link: 'file-bundle',
    tags: ['symfony', 'doctrine'],
    description: (
      <>
        Symfony bundle to easily integrate <b>rekalogika/file</b> and related
        packages within a Symfony application.
      </>
    ),
  },
  {
    title: 'rekalogika/gotenberg-pdf-bundle',
    link: 'gotenberg-pdf-bundle',
    tags: ['symfony'],
    description: (
      <>
        Symfony Bundle for generating PDF using Gotenberg.
      </>
    ),
  },
  {
    title: 'rekalogika/mapper',
    link: 'mapper',
    tags: ['symfony', 'php'],
    description: (
      <>
        An object mapper for PHP and Symfony. Maps an object to another object. Primarily used for transforming an entity to a DTO and vice versa.
      </>
    ),
  },
  {
    title: 'rekalogika/rekapager',
    link: 'rekapager',
    tags: ['php', 'symfony', 'doctrine'],
    description: (
      <>
        Pagination library for PHP, supporting both offset-based and keyset-based pagination.
      </>
    ),
  },
  {
    title: 'rekalogika/temporary-url-bundle',
    link: 'temporary-url-bundle',
    tags: ['symfony'],
    description: (
      <>
        Symfony bundle for creating temporary URLs to your resources.
      </>
    ),
  },
]

const libraries = [
  {
    title: 'rekalogika/direct-property-access',
    link: 'direct-property-access',
    tags: ['php'],
    description: (
      <>
        Implementation of PropertyAccessor that reads & writes directly into
        properties, bypassing getters & setters.
      </>
    ),
  },
  {
    title: 'rekalogika/doctrine-advanced-group-by',
    link: 'doctrine-advanced-group-by',
    tags: ['doctrine'],
    description: (
      <>
        Allows the use of the more complex GROUP BY clauses in Doctrine ORM. These include GROUPING SETS, CUBE, and ROLLUP.
      </>
    ),
  },
  {
    title: 'rekalogika/doctrine-collections-decorator',
    link: 'doctrine-collections-decorator',
    tags: ['doctrine'],
    description: (
      <>
        Lets you easily create decorator classes to modify the behaviors of Doctrine
        Collection objects, including the collection objects used by Doctrine ORM in
        your entities.
      </>
    ),
  },
  {
    title: 'rekalogika/pivot-table',
    link: 'pivot-table',
    tags: ['php'],
    description: (
      <>
        A PHP library for transforming multidimensional data into a pivot table.
      </>
    ),
  },
  {
    title: 'rekalogika/psr-16-simple-cache-bundle',
    link: 'psr-16-simple-cache-bundle',
    tags: ['symfony'],
    description: (
      <>
        Enables PSR-16 Simple Cache services in Symfony projects.
      </>
    ),
  },
  {
    title: 'rekalogika/reconstitutor',
    link: 'reconstitutor',
    tags: ['doctrine'],
    description: (
      <>
        Augments Doctrine's reconstitution/hydration with your logic in a concise and expressive class.
      </>
    ),
  },
]

function Feature({ title, description, link, tags }) {
  return (
    <article className="col col--6 margin-bottom--lg">
      <Link className={clsx('card padding--lg', styles.cardContainer)} to={`${link}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          {tags.map((tag) =>
            <span class="badge badge--secondary margin-right--sm">#{tag}</span>
          )}
        </p>
      </Link>
    </article>
  );
}

export default function Features() {
  return (
    <div class="margin--lg">
      <h1 class="margin-bottom--lg">Frameworks, Symfony Bundles, and Large Libraries</h1>
      <section className="row">
        {frameworks.map((props) => (
          <Feature {...props} />
        ))}
      </section>

      <h1 class="margin-bottom--lg margin-top--lg">Smaller and More Specific Libraries</h1>
      <section className="row">
        {libraries.map((props) => (
          <Feature {...props} />
        ))}
      </section>
    </div>
  );
}
