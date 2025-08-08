---
title: Tree Result
---

To get the result in a tree format, call the `getTree()` method on the `Result`
object. Each node in the tree represents a dimension.

:::danger

Tree result is under consideration to be deprecated. Use the cube result
instead.

:::

## Class Diagram

![Tree result class diagram](./diagrams/tree.light.svg#light)
![Tree result class diagram](./diagrams/tree.dark.svg#dark)

## Example Query

```php
use Doctrine\Common\Collections\Criteria;
use Rekalogika\Analytics\Contracts\SummaryManager;

/** @var SummaryManager $summaryManager */

$treeResult = $summaryManager
    ->createQuery()
    ->from(OrderSummary::class) // the summary entity class name
    ->groupBy('time.year', 'customerCountry') // property names of the dimension
    ->select('price', 'count') // property names of the measures
    ->getResult()
    ->getTree();
```

The above query will produce a tree like this:

![Result tree example](./diagrams/simple.light.svg#light)
![Result tree example](./diagrams/simple.dark.svg#dark)

## Traversing the `Result` Tree

The root node is always an instance of `Tree`. The other nodes are instances
of `TreeNode`. To locate a specific node you can use the `traverse()` method:

```php
$node = $treeResult->traverse('2023', 'DE');
```

`traverse()` accepts the instance values, or for convenience, you can use the
string representation of the values. For example, if the `Country` object
implements `Stringable`, the following `traverse()` calls give the same result:

```php
$germany = $countryRepository->find('DE');
$node = $treeResult->traverse('2023', $germany);
$node = $treeResult->traverse('2023', 'DE');
```

Each node has other methods that you can use to get the data:

```php
// Same as the traverse() method of the root node above.
$descendant = $node->traverse('count');

// Get the member of the node, e.g. an instance of `Country` representing Germany
$member = $node->getMember();

// Get the value of the node, e.g. the count of orders from Germany in 2023
$value = $node->getValue();

// Get the raw value of the node. The value above is taken from the getter method,
// while the raw value is taken from the instance property value. This is useful for
// things like monetary values.
$rawValue = $node->getRawValue();
```

Example of getting a single value:

```php
use Rekalogika\Analytics\Contracts\SummaryManager;

/** @var SummaryManager $summaryManager */

$summaryManager = $summaryManager
    ->createQuery()
    ->from(OrderSummary::class)
    ->groupBy('time.year', 'customerCountry')
    ->select('count')
    ->getResult()
    ->getTree()
    ->traverse('2023', 'DE', 'count')
    ?->getValue()
    ?? 0;
```

## Iterating Over the `Tree` or `TreeNode`

To iterate over a node, you can simply use the `foreach` loop:

```php
// $node is an instance of Tree or TreeNode
// $member will be the node member, e.g. an instance of Country, it will be the
// same as $childNode->getMember()
foreach ($node as $member => $childNode) {
    // Do something with $childNode
}
```

## Grouping by Measure Type

By default, the measures are placed at the leaf of the tree. You can group the
measures earlier by using the special `@values` keyword:

```php
use Rekalogika\Analytics\Contracts\SummaryManager;

/** @var SummaryManager $summaryManager */

$treeResult = $summaryManager
    ->createQuery()
    ->from(OrderSummary::class) // the summary entity class name
    // highlight-next-line
    ->groupBy('time.year', '@values', 'customerCountry') // property name of the dimension
    ->select('price', 'count') // property names of the measures
    ->getResult()
    ->getTree();
```

In this case, the result will look like this:

![Early measure grouping](./diagrams/early-measure-grouping.light.svg#light)
![Early measure grouping](./diagrams/early-measure-grouping.dark.svg#dark)