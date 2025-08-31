---
title: Serialization
---

The Analytics package provides serialization support for query results, analytical objects, and complex data structures. This enables you to cache results, integrate with message queues, and export analytical data.

## Overview

Serialization in the Analytics package covers several key areas:

- **Query Results**: Serializing cube and table format results
- **Analytical Objects**: Serializing summary metadata, dimensions, and measures  
- **Custom Serializers**: Creating specialized serializers for complex analytical data
- **Symfony Integration**: Leveraging Symfony Serializer for seamless integration
- **Performance**: Optimizations for large analytical datasets

## Serializing Query Results

Query results from the Analytics package can be serialized in both cube and table formats.

### Table Format Serialization

The table format is the most straightforward to serialize:

```php
use Rekalogika\Analytics\Contracts\SummaryManager;
use Symfony\Component\Serializer\SerializerInterface;

/** @var SummaryManager $summaryManager */
/** @var SerializerInterface $serializer */

$result = $summaryManager
    ->createQuery()
    ->from(OrderSummary::class)
    ->withDimensions('time.year', 'customerCountry')
    ->getResult();

// Get table format and serialize
$table = $result->getTable();
$serializedTable = $serializer->serialize($table, 'json');

// Later, deserialize back
$deserializedTable = $serializer->deserialize(
    $serializedTable, 
    'Rekalogika\Analytics\Contracts\Result\Table', 
    'json'
);
```

### Cube Format Serialization

The cube format requires more careful handling due to its hierarchical structure:

```php
// Get cube format and serialize
$cube = $result->getCube();
$serializedCube = $serializer->serialize($cube, 'json');

// Deserialize back
$deserializedCube = $serializer->deserialize(
    $serializedCube, 
    'Rekalogika\Analytics\Contracts\Result\Cube', 
    'json'
);
```

## Serializing Summary Metadata

Summary metadata can be serialized for caching or transmission purposes:

```php
use Rekalogika\Analytics\Contracts\Metadata\SummaryMetadata;

/** @var SummaryMetadata $metadata */

// Serialize metadata
$serializedMetadata = $serializer->serialize($metadata, 'json');

// Deserialize back
$deserializedMetadata = $serializer->deserialize(
    $serializedMetadata,
    SummaryMetadata::class,
    'json'
);
```

## Custom Serializers

For complex analytical data that requires special handling, you can create custom serializers.

### Dimension Value Serializer

```php
use Rekalogika\Analytics\Core\Dimension\DimensionValue;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;

class DimensionValueSerializer implements NormalizerInterface, DenormalizerInterface
{
    public function normalize($object, string $format = null, array $context = []): array
    {
        if (!$object instanceof DimensionValue) {
            throw new \InvalidArgumentException('Expected DimensionValue');
        }

        return [
            'value' => $object->getValue(),
            'label' => $object->getLabel(),
            'hierarchyLevel' => $object->getHierarchyLevel(),
        ];
    }

    public function denormalize($data, string $type, string $format = null, array $context = []): DimensionValue
    {
        return new DimensionValue(
            $data['value'],
            $data['label'],
            $data['hierarchyLevel']
        );
    }

    public function supportsNormalization($data, string $format = null): bool
    {
        return $data instanceof DimensionValue;
    }

    public function supportsDenormalization($data, string $type, string $format = null): bool
    {
        return $type === DimensionValue::class;
    }
}
```

### Measure Value Serializer

```php
use Rekalogika\Analytics\Core\Measure\MeasureValue;

class MeasureValueSerializer implements NormalizerInterface, DenormalizerInterface  
{
    public function normalize($object, string $format = null, array $context = []): array
    {
        if (!$object instanceof MeasureValue) {
            throw new \InvalidArgumentException('Expected MeasureValue');
        }

        return [
            'value' => $object->getValue(),
            'formattedValue' => $object->getFormattedValue(),
            'aggregateFunction' => $object->getAggregateFunction(),
        ];
    }

    public function denormalize($data, string $type, string $format = null, array $context = []): MeasureValue
    {
        return new MeasureValue(
            $data['value'],
            $data['formattedValue'],
            $data['aggregateFunction']
        );
    }

    public function supportsNormalization($data, string $format = null): bool
    {
        return $data instanceof MeasureValue;
    }

    public function supportsDenormalization($data, string $type, string $format = null): bool
    {
        return $type === MeasureValue::class;
    }
}
```

## Symfony Serializer Integration

Register your custom serializers with Symfony:

```yaml title="config/services.yaml"
services:
    App\Analytics\Serializer\DimensionValueSerializer:
        tags: ['serializer.normalizer']
        
    App\Analytics\Serializer\MeasureValueSerializer:
        tags: ['serializer.normalizer']
```

## Caching Serialized Results

Use serialization for caching expensive analytical queries:

```php
use Symfony\Contracts\Cache\CacheInterface;
use Symfony\Contracts\Cache\ItemInterface;

/** @var CacheInterface $cache */
/** @var SerializerInterface $serializer */

$cacheKey = 'analytics_query_' . md5(serialize($queryParameters));

$result = $cache->get($cacheKey, function (ItemInterface $item) use (
    $summaryManager, 
    $serializer, 
    $queryParameters
) {
    $item->expiresAfter(3600); // 1 hour
    
    $queryResult = $summaryManager
        ->createQuery()
        ->from($queryParameters['summaryClass'])
        ->withDimensions(...$queryParameters['dimensions'])
        ->getResult();
    
    return $serializer->serialize($queryResult->getTable(), 'json');
});

// Deserialize cached result
$table = $serializer->deserialize(
    $result, 
    'Rekalogika\Analytics\Contracts\Result\Table', 
    'json'
);
```

## Message Queue Integration

Serialize analytical data for message queue processing:

```php
use Symfony\Component\Messenger\MessageBusInterface;

class AnalyticsMessage
{
    public function __construct(
        private string $serializedQuery,
        private string $summaryClass
    ) {}
    
    public function getSerializedQuery(): string
    {
        return $this->serializedQuery;
    }
    
    public function getSummaryClass(): string
    {
        return $this->summaryClass;
    }
}

// Send message
/** @var MessageBusInterface $messageBus */
/** @var SerializerInterface $serializer */

$query = $summaryManager->createQuery()->from(OrderSummary::class);
$serializedQuery = $serializer->serialize($query, 'json');

$message = new AnalyticsMessage($serializedQuery, OrderSummary::class);
$messageBus->dispatch($message);

// Handle message
class AnalyticsMessageHandler
{
    public function __construct(
        private SummaryManager $summaryManager,
        private SerializerInterface $serializer
    ) {}
    
    public function __invoke(AnalyticsMessage $message): void
    {
        $query = $this->serializer->deserialize(
            $message->getSerializedQuery(),
            'Rekalogika\Analytics\Contracts\Query',
            'json'
        );
        
        $result = $query->getResult();
        // Process result...
    }
}
```

## Performance Considerations

### Large Dataset Handling

When serializing large analytical datasets, consider these optimizations:

```php
// Use streaming for large results
use Symfony\Component\Serializer\Encoder\JsonEncoder;

$encoder = new JsonEncoder();
$context = [
    JsonEncoder::OPTIONS => JSON_THROW_ON_ERROR | JSON_PARTIAL_OUTPUT_ON_ERROR
];

// For very large tables, consider chunking
$table = $result->getTable();
$chunks = array_chunk($table->getRows(), 1000);

foreach ($chunks as $i => $chunk) {
    $serializedChunk = $serializer->serialize($chunk, 'json', $context);
    // Process chunk...
}
```

### Memory Optimization

```php
// Use generators for memory-efficient serialization
function serializeTableRows(Table $table): \Generator
{
    foreach ($table->getRows() as $row) {
        yield $serializer->serialize($row, 'json');
    }
}

// Process rows one by one without loading all into memory
foreach (serializeTableRows($table) as $serializedRow) {
    // Process serialized row...
}
```

### Compression

For large analytical datasets, consider compression:

```php
// Compress serialized data
$serializedData = $serializer->serialize($result->getTable(), 'json');
$compressedData = gzcompress($serializedData, 9);

// Store compressed data...

// Later, decompress and deserialize
$decompressedData = gzuncompress($compressedData);
$table = $serializer->deserialize(
    $decompressedData, 
    'Rekalogika\Analytics\Contracts\Result\Table', 
    'json'
);
```

## Export Formats

### CSV Export

```php
use Symfony\Component\Serializer\Encoder\CsvEncoder;

$csvEncoder = new CsvEncoder();
$table = $result->getTable();

$csvData = $serializer->serialize($table->getRows(), 'csv', [
    CsvEncoder::DELIMITER_KEY => ',',
    CsvEncoder::ENCLOSURE_KEY => '"',
    CsvEncoder::ESCAPE_CHAR_KEY => '\\',
]);

// Save to file or return as response
file_put_contents('analytics_export.csv', $csvData);
```

### Excel Export

```php
// Using PhpSpreadsheet integration
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$spreadsheet = new Spreadsheet();
$worksheet = $spreadsheet->getActiveSheet();

$table = $result->getTable();
$rowIndex = 1;

// Add headers
foreach ($table->getHeaders() as $colIndex => $header) {
    $worksheet->setCellValueByColumnAndRow($colIndex + 1, $rowIndex, $header);
}
$rowIndex++;

// Add data rows
foreach ($table->getRows() as $row) {
    foreach ($row as $colIndex => $value) {
        $worksheet->setCellValueByColumnAndRow($colIndex + 1, $rowIndex, $value);
    }
    $rowIndex++;
}

$writer = new Xlsx($spreadsheet);
$writer->save('analytics_export.xlsx');
```

## Best Practices

### Serialization Groups

Use serialization groups to control what gets serialized:

```php
use Symfony\Component\Serializer\Annotation\Groups;

class AnalyticalData
{
    #[Groups(['basic', 'full'])]
    private string $dimension;
    
    #[Groups(['full'])]
    private array $metadata;
    
    #[Groups(['basic', 'full'])]
    private float $measure;
}

// Serialize with specific group
$serializedData = $serializer->serialize($data, 'json', ['groups' => 'basic']);
```

### Circular Reference Handling

Handle circular references in dimensional hierarchies:

```php
use Symfony\Component\Serializer\SerializerInterface;

$context = [
    'circular_reference_handler' => function ($object) {
        return $object->getId();
    }
];

$serializedData = $serializer->serialize($hierarchicalDimension, 'json', $context);
```

### Version Compatibility

Maintain serialization compatibility across versions:

```php
class VersionAwareSerializer implements NormalizerInterface
{
    public function normalize($object, string $format = null, array $context = []): array
    {
        $data = [
            '_version' => '1.0',
            'data' => $this->doNormalize($object)
        ];
        
        return $data;
    }
}
```

:::tip Performance Tip

For frequently accessed analytical data, consider using a binary serialization format like MessagePack instead of JSON for better performance and smaller payload sizes.

:::

:::warning Memory Usage

Be mindful of memory usage when serializing large analytical datasets. Use streaming serialization or chunk processing for datasets that exceed available memory.

:::