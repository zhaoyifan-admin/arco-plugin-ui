# 表格 Table<BackTop />

<br/>

*展示行列数据*

## 何时使用

- 当有大量结构化的数据需要展现时
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时

<script setup lang="ts">

import {reactive} from "vue";

const page = reactive({
  total: 20,
  currentPage: 1,
  pageSize: 5,
  pageSizes: [5, 10, 20, 30, 50],
});
const options = reactive({
  index: false,
  columns: [
    {
      title: '名字',
      width: 150,
      dataIndex: 'name',
      slot: 'name'
    },
    {
      title: '年龄',
      width: 150,
      dataIndex: 'age'
    },
    {
      title: '职业',
      width: 150,
      dataIndex: 'job',
      slot: 'job'
    },
    {
      title: '性别',
      width: 150,
      dataIndex: 'sex'
    },
    {
      title: '地址',
      width: 150,
      dataIndex: 'address'
    }
  ]
})
const currentChange = (current: number)=> {
  page.currentPage = current
}
const sizeChange = (pageSize: number)=> {
  page.pageSize = pageSize
}
</script>

## 基本使用

<ClientOnly>
  <eh-table :data="[]" v-model:page="page" :options="options" @current-change="currentChange"
            @size-change="sizeChange"></eh-table>
</ClientOnly>

::: details Show Code

```vue

<script setup lang="ts">

  import {reactive} from "vue";

  const page = reactive({
    total: 20,
    currentPage: 1,
    pageSize: 5,
    pageSizes: [5, 10, 20, 30, 50],
  });
  const options = reactive({
    index: false,
    columns: [
      {
        title: '名字',
        width: 60,
        dataIndex: 'name',
        slot: 'name'
      },
      {
        title: '年龄',
        width: 70,
        dataIndex: 'age'
      },
      {
        title: '职业',
        width: 50,
        dataIndex: 'job',
        slot: 'job'
      },
      {
        title: '性别',
        width: 70,
        dataIndex: 'sex'
      },
      {
        title: '地址',
        width: 100,
        dataIndex: 'address'
      }
    ]
  })
  const currentChange = (current: number)=> {
    page.currentPage = current
  }
  const sizeChange = (pageSize: number)=> {
    page.pageSize = pageSize
  }
</script>
<template>
  <eh-table :data="[]" v-model:page="page" :options="options" @current-change="currentChange"
            @size-change="sizeChange"></eh-table>
</template>
```

:::

## APIs 

### table Props

| 参数               | 说明              | 类型          | 默认值                                                                    |
|------------------|:----------------|:------------|------------------------------------------------------------------------|
| data             | 表格数据数组          | TableData[] | []                                                                     |
| page             | 分页配置            | Pagination  | currentPage: 1, pageSize: 10, pageSizes: [5, 10, 20, 30, 50], total: 0 |
| searchForm	      | 搜索变量(需要sync修饰符) | object      |                                                                        |
| showPagination   | 是否显示分页          | boolean     | true                                                                   |
| hideOnSinglePage | 只有 `1` 页时是否隐藏分页 | boolean     | false                                                                  |
| options          | 表单配置项参考Option配置 | object      | -                                                                      |
| size             |                 | string      | small                                                                  |

### Options Type

| 名称         | 说明                | 类型                | 默认值   |
|------------|-------------------|-------------------|-------|
| loading    | 是否为加载中状态          | boolean           | false |
| index      | 是否有序号	            | boolean           | false |
| indexWidth | 序号列宽度             | number            | 50    |
| columns    | 表单列配置参考Column相关配置 | TableColumnData[] |       |
| menuWidth  | 操作栏宽度             | number            |       |
| search     | 是否开启查询            | boolean           | false |

### Pagination Type

| 名称          | 说明           | 类型       | 默认值                  |
|-------------|--------------|----------|----------------------|
| currentPage | 当前页码         | number   | 1                    |
| pageSize    | 每页展示的数据条数    | number   | 5                    |
| pageSizes   | 数据条数选择器的选项列表 | number[] | [10, 20, 30, 40, 50] |
| total       | 数据总数         | number   |                      |

### Events

| 事件名称           | 说明         | 参数               |
|----------------|------------|------------------|
| search-change  | 点击查询后触发该事件 | form,done        |
| current-change | 分页变化时的回调   | current: number  |
| size-change    | 数据条数改变时触发  | pageSize: number |
