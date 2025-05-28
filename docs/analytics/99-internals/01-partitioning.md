---
title: Partitioning
---

## Why?

Partitioning lets the framework update the summary table incrementally. Without
partitioning, processing a source table with billions of records might probably
take days or even weeks to finish.

Because an RDBMS is ACID compliant, it will also need to store both old and
new records of the source table while the processing is ongoing, which will
take up a lot of space and may cause fragmentation.

## How It Works

The following table shows how the records are partitioned using the hypothetical
`IntegerPartition` with 1-2-3-4-5-6 bits of partitioning width. The leftmost
column indicates the level. Other cells are the partitions of that level.
Numbers in the cells indicate the partitioning key range that are rolled-up in
the partition.

<table class="partitioning">

<tr>
<th>L6</th>
<td colspan="32">0-63</td>
</tr>

<tr>
<th>L5</th>
<td colspan="16">0-31</td>
<td colspan="16">32-63</td>
</tr>

<tr>
<th>L4</th>
<td colspan="8">0-15</td>
<td colspan="8">16-31</td>
<td colspan="8">32-47</td>
<td colspan="8">48-63</td>
</tr>

<tr>
<th>L3</th>
<td colspan="4">0-7</td>
<td colspan="4">8-15</td>
<td colspan="4">16-23</td>
<td colspan="4">24-31</td>
<td colspan="4">32-39</td>
<td colspan="4">40-47</td>
<td colspan="4">48-55</td>
<td colspan="4">56-63</td>
</tr>

<tr>
<th>L2</th>
<td colspan="2">0-3</td>
<td colspan="2">4-7</td>
<td colspan="2">8-11</td>
<td colspan="2">12-15</td>
<td colspan="2">16-19</td>
<td colspan="2">20-23</td>
<td colspan="2">24-27</td>
<td colspan="2">28-31</td>
<td colspan="2">32-35</td>
<td colspan="2">36-39</td>
<td colspan="2">40-43</td>
<td colspan="2">44-47</td>
<td colspan="2">48-51</td>
<td colspan="2">52-55</td>
<td colspan="2">56-59</td>
<td colspan="2">60-63</td>
</tr>

<tr>
<th>L1</th>
<td>0-1</td>
<td>2-3</td>
<td>4-5</td>
<td>6-7</td>
<td>8-9</td>
<td>10-11</td>
<td>12-13</td>
<td>14-15</td>
<td>16-17</td>
<td>18-19</td>
<td>20-21</td>
<td>22-23</td>
<td>24-25</td>
<td>26-27</td>
<td>28-29</td>
<td>30-31</td>
<td>32-33</td>
<td>34-35</td>
<td>36-37</td>
<td>38-39</td>
<td>40-41</td>
<td>42-43</td>
<td>44-45</td>
<td>46-47</td>
<td>48-49</td>
<td>50-51</td>
<td>52-53</td>
<td>54-55</td>
<td>56-57</td>
<td>58-59</td>
<td>60-61</td>
<td>62-63</td>
</tr>

</table>

## Example of Partitioning

With the above partitioning scheme above, now suppose our source entity has the
following records:

| ID | Value |
|----|-------|
| 8  | 2     |
| 9  | 3     |
| 10 | 6     |
| 11 | 7     |
| 12 | 10    |
| 13 | 5     |
| 14 | 4     |
| 15 | 1     |

The framework will roll up those records into the following level 1 partitions:

| Level | Key | Sum of Value |
|-------|-----|--------------|
| L1    | 8   | 5            |
| L1    | 10  | 13           |
| L1    | 12  | 15           |
| L1    | 14  | 5            |

Then, in turn those level 1 partitions will be rolled up into level 2 partitions:

| Level | Key | Sum of Value |
|-------|-----|--------------|
| L2    | 8   | 18           |
| L2    | 12  | 20           |

Then, again, those level 2 partitions will be rolled up into level 3 partitions:

| Level | Key | Sum of Value |
|-------|-----|--------------|
| L3    | 8   | 38           |

And so forth until we reach the top level.

:::info

In the summary table, a partition is identified by its level and key. With our
integer partition, the key is the same as the first possible source ID in the partition.

:::

## Queries

If we currently have 21 records already rolled-up, these are the partition that
we will have. If we were to perform a query, the framework will union the
records from the highlighted partitions to get the result:

<table class="partitioning">

<tr>
<th>L6</th>
</tr>

<tr>
<th>L5</th>
</tr>

<tr>
<th>L4</th>
<td colspan="8" class="highlight">0-15</td>
</tr>

<tr>
<th>L3</th>
<td colspan="4">0-7</td>
<td colspan="4">8-15</td>
</tr>

<tr>
<th>L2</th>
<td colspan="2">0-3</td>
<td colspan="2">4-7</td>
<td colspan="2">8-11</td>
<td colspan="2">12-15</td>
<td colspan="2" class="highlight">16-19</td>
</tr>

<tr>
<th>L1</th>
<td>0-1</td>
<td>2-3</td>
<td>4-5</td>
<td>6-7</td>
<td>8-9</td>
<td>10-11</td>
<td>12-13</td>
<td>14-15</td>
<td>16-17</td>
<td>18-19</td>
<td class="highlight">20-21</td>
</tr>

</table>

## Updates

Now suppose the framework knows that the record #11 has been updated. It will
refresh the partition L1 10-11. Afterward, it will refresh its parent partition,
which is the partition L2 8-11, and so on until it reaches the top level.

These are the partitions that will get updated when that happens:

<table class="partitioning">

<tr>
<th>L6</th>
</tr>

<tr>
<th>L5</th>
</tr>

<tr>
<th>L4</th>
<td colspan="8" class="highlight">0-15</td>
</tr>

<tr>
<th>L3</th>
<td colspan="4">0-7</td>
<td class="highlight" colspan="4">8-15</td>
</tr>

<tr>
<th>L2</th>
<td colspan="2">0-3</td>
<td colspan="2">4-7</td>
<td class="highlight" colspan="2">8-11</td>
<td colspan="2">12-15</td>
<td colspan="2">16-19</td>
</tr>

<tr>
<th>L1</th>
<td>0-1</td>
<td>2-3</td>
<td>4-5</td>
<td>6-7</td>
<td>8-9</td>
<td class="highlight">10-11</td>
<td>12-13</td>
<td>14-15</td>
<td>16-17</td>
<td>18-19</td>
<td>20-21</td>
</tr>

</table>

## In the Real World

Having a partitioning scheme with 1-bit width as above is useful for
explanation, but will be pretty inefficient. Our default integer partition is
using 11-22-33-44-55 bits of partitioning width. This means that the first level
contains the data rolled-up from up to 2048 records, the second level contains 4
millions records that are rolled-up from the first level, and so on.
