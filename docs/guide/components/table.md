# 表格 Table<BackTop />

<br/>

*展示行列数据*

## 何时使用

- 当有大量结构化的数据需要展现时
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时

<script setup lang="ts">

import {ref} from "vue";

const columns = ref([
  {
    title: '名字',
    width: 100,
    dataIndex: 'name',
    slot: 'name'
  },
  {
    title: '年龄',
    width: 100,
    dataIndex: 'age'
  },
  {
    title: '职业',
    width: 100,
    dataIndex: 'job',
    slot: 'job'
  },
  {
    title: '性别',
    width: 100,
    dataIndex: 'sex'
  },
  {
    title: '地址',
    width: 120,
    dataIndex: 'address'
  }
])
</script>

## 基本使用

<ClientOnly>
  <eh-table :columns="columns" :data="[]"></eh-table>
</ClientOnly>

::: details Show Code

```vue
<script setup lang="ts">

  import {ref} from "vue";

  const columns = ref([
    {
      title: '名字',
      width: 100,
      dataIndex: 'name',
      slot: 'name'
    },
    {
      title: '年龄',
      width: 100,
      dataIndex: 'age'
    },
    {
      title: '职业',
      width: 100,
      dataIndex: 'job',
      slot: 'job'
    },
    {
      title: '性别',
      width: 100,
      dataIndex: 'sex'
    },
    {
      title: '地址',
      width: 120,
      dataIndex: 'address'
    }
  ])
</script>
<template>
  <eh-table :columns="columns" :data="[]"></eh-table>
</template>
```

:::

## APIs

参数 | 说明 | 类型 | 默认值 | 必传
-- | -- | -- | -- | --
columns | 表格列的配置项 | Column[] | [] | false
dataSource | 表格数据数组 | any[] | [] | false
pagination | 分页配置 | Pagination | { page: 1&#44; pageSize: 10 } | false
showPagination | 是否显示分页 | boolean | true | false
hideOnSinglePage | 只有 `1` 页时是否隐藏分页 | boolean | false
total | 数据总数 | number | 0 | false
loading | 是否加载中 | boolean | false | false

## Column Type

名称 | 说明 | 类型 | 必传
-- | -- | -- | --
title | 列头显示文字 | string | false
width | 列宽度 | number &#124; string | true
dataIndex | 列数据字符索引 | string | true
slot | 列插槽名称索引 | string | false

## Pagination Type

名称 | 说明 | 类型 | 必传
-- | -- | -- | --
page | 当前页码 | number | true
pageSize | 每页条数 | number | true

## Events

事件名称 | 说明 | 参数
-- | -- | --
change | 分页变化时的回调 | (pager: {page: number, pageSize: number}) => void
