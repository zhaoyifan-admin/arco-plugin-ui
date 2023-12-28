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

| 名称            | 说明                                  | 类型                  | 默认值           |
|---------------|-------------------------------------|---------------------|---------------|
| loading       | 是否为加载中状态                            | `boolean`           | false         |
| index         | 是否有序号	                              | `boolean`           | false         |
| indexWidth    | 序号列宽度                               | `number`            | 50            |
| columns       | 表单列配置参考[Column相关配置](#columns-props) | `TableColumnData[]` |               |
| menuWidth     | 操作栏宽度                               | `number`            |               |
| menuBtnStyle  | 操作栏按钮风格                             | `string`            | 'icon'/'text' |
| maxHeight     | 表格最大高度                              | `number\|string`    | 450           |
| search        | 是否开启查询                              | `boolean`           | false         |
| searchSpan	   | 搜索项框栅列	                             | `number`            | 6             |
| searchBtnSpan | 查询表单按钮栅列                            | `number`            | 6             |

### < columns >  Props

| 参数名                | 描述                                                                                  | 类型                                                                                                   |                     默认值                      |
|--------------------|-------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|:--------------------------------------------:|
| align              | 对齐方向                                                                                | `'left' \| 'center' \| 'right'`                                                                      |                                              |
| data               | 穿梭框的数据                                                                              | `TransferItem[]`                                                                                     |                                              |
| data-index         | 列信息的标识，对应TableData中的数据                                                              | `string`                                                                                             |                     `-`                      |
| default-value      | 默认值（非受控状态）                                                                          | `string`                                                                                             |                                              |
| dicData            | 字典                                                                                  | `any[]`                                                                                              |                                              |
| disabled           | 是否禁用组件                                                                              | `boolean`                                                                                            |                                              |
| ellipsis           | 是否显示为省略                                                                             | `boolean`                                                                                            |                   `false`                    |
| fixed              | 固定位置                                                                                | `TableColumnData['fixed']`                                                                           |                     `-`                      |
| format             | 解析值所使用的格式，参考[字符串解析格式](#字符串解析格式)                                                     | `string`                                                                                             |                                              |
| hide               | 是否隐藏列                                                                               | `boolean`                                                                                            |                   `false`                    |
| maxLength          | 输入值的最大长度                                                                            | `number`                                                                                             |                                              |
| mode               | InputNumber:`模式（embed：按钮内嵌模式，button：左右按钮模式）`<br>DatePicker:`范围选择器的类型`               | InputNumber:`'embed' \| 'button'`<br>DatePicker:`'date' \| 'year' \| 'quarter' \| 'month' \| 'week'` | InputNumber:`'embed'`<br>DatePicker:`'date'` |         |
| options            | Cascader:参考 [级联选择器的选项](#cascaderoption)<br>Radio\|Checkbox:参考[选项](#radiooption)<br> | Cascader:`CascaderOption[]`<br>Radio\|Checkbox:`Array<string \| number \| Option>`                   |                     `[]`                     |
| placeholder        | 提示文字                                                                                | `string`                                                                                             |                     `-`                      |
| precision          | 数字精度                                                                                | `number`                                                                                             |                     `-`                      |
| readonly           | 是否为只读状态                                                                             | `boolean`                                                                                            |                   `false`                    |
| rules              | 表单项校验规则（优先级高于 form 的 rules）参考[FieldRule](#fieldrule)                                | `FieldRule \| FieldRule[]`                                                                           |                     `-`                      |
| width              | 列宽度                                                                                 | `number`                                                                                             |                     `-`                      |
| align              | 对齐方向                                                                                | `TableColumnData['align']`                                                                           |                     `-`                      |
| sortable           | 排序相关选项                                                                              | `TableSortable`                                                                                      |                     `-`                      |
| filterable         | 过滤相关选项                                                                              | `TableFilterable`                                                                                    |                     `-`                      |
| search             | 是否查询                                                                                | `boolean`                                                                                            |                   `false`                    |
| showLimit          | 是否显示字数统计                                                                            | `boolean`                                                                                            |                   `false`                    |
| showTime           | 是否增加时间选择                                                                            | `boolean`                                                                                            |                   `false`                    |
| span               | 栅栏布局                                                                                | `number`                                                                                             |                     `6`                      |
| time-picker-props  | 时间显示的参数，参考 [time-picker-props](#time-picker-props)                                  | `Partial<TimePickerProps>`                                                                           |                     `-`                      |
| title              | 列标题                                                                                 | `string`                                                                                             |                     `-`                      |
| tooltip            | 在省略时是否显示文字提示                                                                        | `boolean\|object`                                                                                    |                   `false`                    |
| treeData           | 数据                                                                                  | `TreeNodeData[]`                                                                                     |                     `[]`                     |
| type               | 文本框类型，参考[文本框类型](#文本框类型)                                                             | `string`                                                                                             |                   `input`                    |
| width              | 列宽度	                                                                                | `number`                                                                                             |                                              |
| cell-class         | 自定义单元格类名                                                                            | `ClassName`                                                                                          |                     `-`                      |
| header-cell-class  | 自定义表头单元格类名                                                                          | `ClassName`                                                                                          |                     `-`                      |
| body-cell-class    | 自定义内容单元格类名                                                                          | `ClassName \| ((record: TableData) => ClassName)`                                                    |                     `-`                      |
| summary-cell-class | 自定义总结栏单元格类名                                                                         | `ClassName \| ((record: TableData) => ClassName)`                                                    |                     `-`                      |
| cell-style         | 自定义单元格样式                                                                            | `CSSProperties`                                                                                      |                     `-`                      |
| header-cell-style  | 自定义表头单元格样式                                                                          | `CSSProperties`                                                                                      |                     `-`                      |
| body-cell-style    | 自定义内容单元格样式                                                                          | `CSSProperties \| ((record: TableData) => CSSProperties)`                                            |                     `-`                      |
| summary-cell-style | 自定义总结栏单元格样式                                                                         | `CSSProperties \| ((record: TableData) => CSSProperties)`                                            |                     `-`                      |
| index              | 用于手动指定选项的 index                                                                     | `number`                                                                                             |                     `-`                      |


### < columns >  Slot

| 插槽名         | 描述     | 参数                                                                     | 默认值 |
|-------------|--------|------------------------------------------------------------------------|-----|
| Label       | 弹框标题   | -                                                                      |     |
| Title       | 标题     | -                                                                      |     |
| SearchLabel | 查询表单标题 | -                                                                      |     |
| cell        | 单元格    | record: `TableData`<br>column: `TableColumnData`<br>rowIndex: `number` |     |


### Pagination Type

| 名称                   | 说明           | 类型         | 默认值                  |
|----------------------|--------------|------------|----------------------|
| currentPage(v-model) | 当前页码         | `number`   | 1                    |
| pageSize(v-model)    | 每页展示的数据条数    | `number`   | 5                    |
| pageSizes            | 数据条数选择器的选项列表 | `number[]` | [10, 20, 30, 40, 50] |
| total (必填)           | 数据总数         | `number`   |                      |

### Events

| 事件名称           | 说明              | 参数                                                                                 |
|----------------|-----------------|------------------------------------------------------------------------------------|
| current-change | 分页变化时的回调        | current: `number`                                                                  |
| handle-save    | 新增数据后点击确定触发该事件	 | form:`object`<br>loading：`(event: Event) => void`<br>done：`(event: Event) => void` |
| handle-update  | 编辑数据后点击确定触发该事件  | form:`object`<br>loading：`(event: Event) => void`<br>done：`(event: Event) => void` |
| search-change  | 点击查询后触发该事件      | form:`object`<br>done:`(event: Event) => void`                                     |
| search-reset   | 清空搜索回调方法	       | form:`object`                                                                      |
| onLoad         | 表格初始化时触发        |                                                                                    |

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

### 文本框类型

| Type           |    描述 |
|----------------|------:|
| `input`        |   输入框 |
| `calendar`     |    日历 |
| `badge`        |    徽标 |
| `table`        |    表格 |
| `popover`      |  气泡卡片 |
| `inputNumber`  | 数字输入框 |
| `radio`        |   单选框 |
| `checkbox`     |   复选框 |
| `switch`       |    开关 |
| `progress`     |   进度条 |
| `slider`       | 滑动输入条 |
| `rate`         |    评分 |
| `select`       |   选择器 |
| `inputTag`     | 标签输入框 |
| `avatar`       |    头像 |
| `date`         | 日期选择器 |
| `month`        | 月份选择器 |
| `year`         | 年份选择器 |
| `quarter`      | 季度选择器 |
| `week`         |  周选择器 |
| `timePicker`   | 时间选择器 |
| `range`        | 范围选择器 |
| `cascader`     |  级联选择 |
| `textarea`     |   文本域 |
| `transfer`     | 数据穿梭框 |
| `treeSelect`   |   树选择 |

---

### RadioOption

| 参数名      | 描述          | 类型                 |   默认值   |
|----------|-------------|--------------------|:-------:|
| label    | 文案          | `RenderContent`    |   `-`   |
| value    | 选项的 `value` | `string \| number` |   `-`   |
| disabled | 是否禁用        | `boolean`          | `false` |

### CheckboxOption

| 参数名           | 描述          | 类型                 |   默认值   |
|---------------|-------------|--------------------|:-------:|
| label         | 文案          | `RenderContent`    |   `-`   |
| value         | 选项的 `value` | `string \| number` |   `-`   |
| disabled      | 是否禁用        | `boolean`          | `false` |
| indeterminate | 是否为半选状态     | `boolean`          | `false` |

---
### CascaderOption

| 参数名      | 描述      | 类型                                        |   默认值   | 版本 |
|----------|---------|-------------------------------------------|:-------:|:---|
| value    | 选项值     | `string \| number \| Record<string, any>` |   `-`   |    |
| label    | 选项文本    | `string`                                  |   `-`   |    |
| render   | 自定义渲染   | `RenderFunction`                          |   `-`   |    |
| disabled | 是否禁用    | `boolean`                                 | `false` |    |
| tagProps | 展示的标签属性 | `TagProps`                                |   `-`   |    |
| children | 下一级选项   | `CascaderOption[]`                        |   `-`   |    |
| isLeaf   | 是否是叶子节点 | `boolean`                                 | `false` |    |

---
### FieldRule

| 参数名       | 描述                     | 类型                                                                                                          |   默认值   |
|-----------|------------------------|-------------------------------------------------------------------------------------------------------------|:-------:|
| type      | 校验的值的类型，默认为 `'string'` | `'string'    \| 'number'    \| 'boolean'    \| 'array'    \| 'object'    \| 'email'    \| 'url'    \| 'ip'` |   `-`   |
| required  | 是否必填                   | `boolean`                                                                                                   | `false` |
| message   | 校验失败时展示的信息             | `string`                                                                                                    |   `-`   |
| length    | 校验长度（string, array）    | `number`                                                                                                    |   `-`   |
| maxLength | 最大长度（string）           | `number`                                                                                                    |   `-`   |
| minLength | 最小长度（string）           | `number`                                                                                                    |   `-`   |
| match     | 匹配校验（string）           | `RegExp`                                                                                                    |   `-`   |
| uppercase | 大写（string）             | `boolean`                                                                                                   | `false` |
| lowercase | 小写（string）             | `boolean`                                                                                                   | `false` |
| min       | 最小值（number）            | `number`                                                                                                    |   `-`   |
| max       | 最大值（number）            | `number`                                                                                                    |   `-`   |
| equal     | 校验数值（number）           | `number`                                                                                                    |   `-`   |
| positive  | 正数（number）             | `boolean`                                                                                                   | `false` |
| negative  | 负数（number）             | `boolean`                                                                                                   | `false` |
| true      | 是否为 `true`（boolean）    | `boolean`                                                                                                   | `false` |
| false     | 是否为 `false`（boolean）   | `boolean`                                                                                                   | `false` |
| includes  | 数组中是否包含给定值（array）      | `any[]`                                                                                                     |   `-`   |
| deepEqual | 数组元素是否相等（array）        | `any`                                                                                                       |   `-`   |
| empty     | 是否为空（object）           | `boolean`                                                                                                   | `false` |
| hasKeys   | 对象是否包含给定属性（object）     | `string[]`                                                                                                  |   `-`   |
| validator | 自定义校验规则                | `(    value: FieldValue \| undefined,    callback: (error?: string) => void  ) => void`                     |   `-`   |

---
### `<time-picker>` Props

| 参数名                         | 描述                            | 类型                                                             |     默认值      |
|-----------------------------|-------------------------------|----------------------------------------------------------------|:------------:|
| type                        | 选择器类型                         | `'time' \| 'time-range'`                                       |   `'time'`   |
| model-value **(v-model)**   | 绑定值                           | `string \| number \| Date \| Array<string \| number \| Date>`  |     `-`      |
| default-value               | 默认值                           | `string \| number \| Date \| Array<string \| number \| Date>`  |     `-`      |
| placeholder                 | 提示文案                          | `string`                                                       |     `-`      |
| disabled                    | 是否禁用                          | `boolean`                                                      |   `false`    |
| allow-clear                 | 是否允许清除                        | `boolean`                                                      |    `true`    |
| readonly                    | 是否为只读模式                       | `boolean`                                                      |   `false`    |
| error                       | 是否为错误状态                       | `boolean`                                                      |   `false`    |
| format                      | 展示日期的格式，参考[字符串解析格式](#字符串解析格式) | `string`                                                       | `'HH:mm:ss'` |
| size                        | 输入框尺寸                         | `'mini' \| 'small' \| 'medium' \| 'large'`                     |  `'medium'`  |
| position                    | 弹出的位置                         | `'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'`            |    `'bl'`    |
| popup-visible **(v-model)** | 控制弹出框打开或者关闭                   | `boolean`                                                      |     `-`      |
| default-popup-visible       | 弹出框默认打开或者关闭                   | `boolean`                                                      |   `false`    |
| trigger-props               | 可以传入 `Trigger` 组件的参数          | `TriggerProps`                                                 |     `-`      |
| popup-container             | 弹出框的挂载容器                      | `string \| HTMLElement`                                        |     `-`      |
| unmount-on-close            | 是否在关闭后销毁 dom 结构               | `boolean`                                                      |   `false`    |
| use12-hours                 | 12 小时制                        | `boolean`                                                      |   `false`    |
| step                        | 设置 时 / 分 / 秒 的选择间隔            | `{  hour?: number;  minute?: number;  second?: number;}`       |     `-`      |
| disabled-hours              | 禁用的部分小时选项                     | `() => number[]`                                               |     `-`      |
| disabled-minutes            | 禁用的部分分钟选项                     | `(selectedHour?: number) => number[]`                          |     `-`      |
| disabled-seconds            | 禁用的部分秒数选项                     | `(selectedHour?: number, selectedMinute?: number) => number[]` |     `-`      |
| hide-disabled-options       | 隐藏禁止选择的选项                     | `boolean`                                                      |   `false`    |
| disable-confirm             | 禁用确认步骤，开启后直接点选时间不需要点击确认按钮     | `boolean`                                                      |   `false`    |
