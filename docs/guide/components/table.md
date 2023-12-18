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

| 参数               | 说明              | 类型            | 默认值                                                                    |
|------------------|:----------------|:--------------|------------------------------------------------------------------------|
| data             | 表格数据数组          | `TableData[]` | []                                                                     |
| page             | 分页配置            | `Pagination`  | currentPage: 1, pageSize: 10, pageSizes: [5, 10, 20, 30, 50], total: 0 |
| searchForm	      | 搜索变量(需要sync修饰符) | `object`      |                                                                        |
| showPagination   | 是否显示分页          | `boolean`     | true                                                                   |
| hideOnSinglePage | 只有 `1` 页时是否隐藏分页 | `boolean`     | false                                                                  |
| options          | 表单配置项参考Option配置 | `object`      | -                                                                      |
| size             |                 | `string`      | small                                                                  |

### Options Type

| 名称            | 说明                | 类型                  | 默认值           |
|---------------|-------------------|---------------------|---------------|
| loading       | 是否为加载中状态          | `boolean`           | false         |
| index         | 是否有序号	            | `boolean`           | false         |
| indexWidth    | 序号列宽度             | `number`            | 50            |
| columns       | 表单列配置参考Column相关配置 | `TableColumnData[]` |               |
| menuWidth     | 操作栏宽度             | `number`            |               |
| menuBtnStyle  | 操作栏按钮风格           | `string`            | 'icon'/'text' |
| maxHeight     | 表格最大高度            | `number\|string`    | 450           |
| search        | 是否开启查询            | `boolean`           | false         |
| searchSpan	   | 搜索项框栅列	           | `number`            | 6             |
| searchBtnSpan | 查询表单按钮栅列          | `number`            | 6             |

### < column >  Props

| 参数名                | 描述                              | 类型                                                        |   默认值   |
|--------------------|---------------------------------|-----------------------------------------------------------|:-------:|
| align              | 对齐方向                            | `TableColumnData['align']`                                |         |
| data-index         | 列信息的标识，对应TableData中的数据          | `string`                                                  |   `-`   |
| title              | 列标题                             | `string`                                                  |   `-`   |
| width              | 列宽度                             | `number`                                                  |   `-`   |
| align              | 对齐方向                            | `TableColumnData['align']`                                |   `-`   |
| fixed              | 固定位置                            | `TableColumnData['fixed']`                                |   `-`   |
| ellipsis           | 是否显示为省略                         | `boolean`                                                 | `false` |
| sortable           | 排序相关选项                          | `TableSortable`                                           |   `-`   |
| filterable         | 过滤相关选项                          | `TableFilterable`                                         |   `-`   |
| format             | 解析值所使用的格式，参考[字符串解析格式](#字符串解析格式) | `string`                                                  |         |
| width              | 列宽度	                            | `number`                                                  |         |
| cell-class         | 自定义单元格类名                        | `ClassName`                                               |   `-`   |
| header-cell-class  | 自定义表头单元格类名                      | `ClassName`                                               |   `-`   |
| body-cell-class    | 自定义内容单元格类名                      | `ClassName \| ((record: TableData) => ClassName)`         |   `-`   |
| summary-cell-class | 自定义总结栏单元格类名                     | `ClassName \| ((record: TableData) => ClassName)`         |   `-`   |
| cell-style         | 自定义单元格样式                        | `CSSProperties`                                           |   `-`   |
| header-cell-style  | 自定义表头单元格样式                      | `CSSProperties`                                           |   `-`   |
| body-cell-style    | 自定义内容单元格样式                      | `CSSProperties \| ((record: TableData) => CSSProperties)` |   `-`   |
| summary-cell-style | 自定义总结栏单元格样式                     | `CSSProperties \| ((record: TableData) => CSSProperties)` |   `-`   |
| index              | 用于手动指定选项的 index                 | `number`                                                  |   `-`   |
| tooltip            | 在省略时是否显示文字提示                    | `boolean\|object`                                         | `false` |


### < column >  Slot

| 插槽名         | 描述     | 参数                                                                     | 默认值 |
|-------------|--------|------------------------------------------------------------------------|-----|
| Label       | 弹框标题   | -                                                                      |     |
| Title       | 标题     | -                                                                      |     |
| SearchLabel | 查询表单标题 | -                                                                      |     |
| cell        | 单元格    | record: `TableData`<br>column: `TableColumnData`<br>rowIndex: `number` |     |


### Pagination Type

| 名称          | 说明           | 类型         | 默认值                  |
|-------------|--------------|------------|----------------------|
| currentPage | 当前页码         | `number`   | 1                    |
| pageSize    | 每页展示的数据条数    | `number`   | 5                    |
| pageSizes   | 数据条数选择器的选项列表 | `number[]` | [10, 20, 30, 40, 50] |
| total       | 数据总数         | `number`   |                      |

### Events

| 事件名称           | 说明              | 参数                                                                                 |
|----------------|-----------------|------------------------------------------------------------------------------------|
| current-change | 分页变化时的回调        | current: `number`                                                                  |
| hanle-save     | 新增数据后点击确定触发该事件	 | form:`object`<br>loading：`(event: Event) => void`<br>done：`(event: Event) => void` |
| search-change  | 点击查询后触发该事件      | form:`(event: Event) => void`<br>done:`(event: Event) => void`                     |
| size-change    | 数据条数改变时触发       | pageSize: `number`                                                                 |

### 字符串解析格式

| 格式     | 输出               |                描述 |
|--------|------------------|------------------:|
| `YY`   | 21               |            两位数的年份 |
| `YYYY` | 2021             |             四位数年份 |
| `M`    | 1-12             |         月份，从 1 开始 |
| `MM`   | 01-12            |            月份，两位数 |
| `MMM`  | Jan-Dec          |           缩写的月份名称 |
| `MMMM` | January-December |           完整的月份名称 |
| `D`    | 1-31             |            月份里的一天 |
| `DD`   | 01-31            |        月份里的一天，两位数 |
| `d`    | 0-6              |     一周中的一天，星期天是 0 |
| `dd`   | Su-Sa            |      最简写的一周中一天的名称 |
| `ddd`  | Sun-Sat          |       简写的一周中一天的名称 |
| `dddd` | Sunday-Saturday  |          一周中一天的名称 |
| `H`    | 0-23             |                小时 |
| `HH`   | 00-23            |            小时，两位数 |
| `h`    | 1-12             |        小时, 12 小时制 |
| `hh`   | 01-12            |   小时, 12 小时制, 两位数 |
| `m`    | 0-59             |                分钟 |
| `mm`   | 00-59            |            分钟，两位数 |
| `s`    | 0-59             |                 秒 |
| `ss`   | 00-59            |             秒，两位数 |
| `S`    | 0-9              |          数百毫秒，一位数 |
| `SS`   | 00-99            |          几十毫秒，两位数 |
| `SSS`  | 000-999          |           毫秒，三位数字 |
| `Z`    | -5:00            |          UTC 的偏移量 |
| `ZZ`   | -0500            | UTC 的偏移量，数字前面加上 0 |
| `A`    | AM PM            |                 - |
| `a`    | am pm            |                 - |
| `Do`   | 1st... 3st       |        带序号的月份中的某天 |
| `X`    | 1410715640.579   |          Unix 时间戳 |
| `x`    | 1410715640579    |        Unix 毫秒时间戳 |

---