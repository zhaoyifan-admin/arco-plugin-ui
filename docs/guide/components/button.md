# 按钮 Button<BackTop />

<br/>

*按钮用于开始一个即时操作*

<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(false)
</script>

## 基本使用

按钮分为 `default` - **默认按钮**、`reverse` - **填充按钮**、`primary` - **主要按钮**、`dashed` - **虚线按钮**、`outline` -
**线形按钮**、`text` - **文本按钮**五种类型。

<br/>

<Space>
  <eh-Button>Default Button</eh-Button>
  <eh-Button effect="reverse">Reverse Button</eh-Button>
  <eh-Button type="primary">Primary Button</eh-Button>
  <eh-Button type="dashed">Dashed Button</eh-Button>
  <eh-Button type="text">Text Button</eh-Button>
</Space>

::: details Show Code

```vue

<template>
  <Space>
    <eh-Button>Default Button</eh-Button>
    <eh-Button effect="reverse">Reverse Button</eh-Button>
    <eh-Button type="primary">Primary Button</eh-Button>
    <eh-Button type="danger">Danger Button</eh-Button>
    <eh-Button type="dashed">Dashed Button</eh-Button>
    <eh-Button type="text">Text Button</eh-Button>
  </Space>
</template>
```

:::

## 图标按钮

按钮分为 `square` - **长方形（默认）**、`circle` - **圆形**、`round` - **全圆角**三种形状。

<Space>
  <eh-Button type="primary">Square</eh-Button>
  <eh-Button shape="round" type="primary">Round</eh-Button>
  <eh-Button shape="circle" type="primary">
    <icon-plus />
  </eh-Button>
</Space>

::: details Show Code

```vue

<template>
  <Space>
    <eh-Button type="primary">Square</eh-Button>
    <eh-Button shape="round" type="primary">Round</eh-Button>
    <eh-Button shape="circle" type="primary">
      <icon-plus />
    </eh-Button>
  </Space>
</template>
```

:::

:::

## 按钮尺寸

标签的大小分为：`small`、`medium`、`large` 三种，可以在不同场景下选择合适按钮尺寸。推荐及默认尺寸为 `medium`。

<Space>
  <eh-Button size="mini" type="primary">Mini</eh-Button>
  <eh-Button size="small" type="primary">Small</eh-Button>
  <eh-Button type="primary">Medium</eh-Button>
  <eh-Button size="large" type="primary">Large</eh-Button>
</Space>

::: details Show Code

```vue

<template>
  <Space>
    <eh-Button size="mini" type="primary">Mini</eh-Button>
    <eh-Button size="small" type="primary">Small</eh-Button>
    <eh-Button type="primary">Medium</eh-Button>
    <eh-Button size="large" type="primary">Large</eh-Button>
  </Space>
</template>
```

:::

:::

## 按钮状态

按钮的状态分为 `normal` - **正常（默认）**、`success` - **成功**、`warning` - **警告**、`danger` - **危险**四种，可以与按钮类型同时使用。

<Space>
  <eh-Button status="success">Default Button</eh-Button>
  <eh-Button effect="reverse" status="success">Reverse Button</eh-Button>
  <eh-Button status="success" type="primary">Primary Button</eh-Button>
  <eh-Button status="success" type="dashed">Dashed Button</eh-Button>
  <eh-Button status="success" type="text">Text Button</eh-Button>
</Space>
<Space>
  <eh-Button status="warning">Default Button</eh-Button>
  <eh-Button effect="reverse" status="warning">Reverse Button</eh-Button>
  <eh-Button status="warning" type="primary">Primary Button</eh-Button>
  <eh-Button status="warning" type="dashed">Dashed Button</eh-Button>
  <eh-Button status="warning" type="text">Text Button</eh-Button>
</Space>
<Space>
  <eh-Button status="danger">Default Button</eh-Button>
  <eh-Button effect="reverse" status="danger">Reverse Button</eh-Button>
  <eh-Button status="danger" type="primary">Primary Button</eh-Button>
  <eh-Button status="danger" type="dashed">Dashed Button</eh-Button>
  <eh-Button status="danger" type="text">Text Button</eh-Button>
</Space>

::: details Show Code

```vue

<template>
  <Space>
    <eh-Button status="success">Default Button</eh-Button>
    <eh-Button effect="reverse" status="success">Reverse Button</eh-Button>
    <eh-Button status="success" type="primary">Primary Button</eh-Button>
    <eh-Button status="success" type="dashed">Dashed Button</eh-Button>
    <eh-Button status="success" type="text">Text Button</eh-Button>
  </Space>
  <Space>
    <eh-Button status="warning">Default Button</eh-Button>
    <eh-Button effect="reverse" status="warning">Reverse Button</eh-Button>
    <eh-Button status="warning" type="primary">Primary Button</eh-Button>
    <eh-Button status="warning" type="dashed">Dashed Button</eh-Button>
    <eh-Button status="warning" type="text">Text Button</eh-Button>
  </Space>
  <Space>
    <eh-Button status="danger">Default Button</eh-Button>
    <eh-Button effect="reverse" status="danger">Reverse Button</eh-Button>
    <eh-Button status="danger" type="primary">Primary Button</eh-Button>
    <eh-Button status="danger" type="dashed">Dashed Button</eh-Button>
    <eh-Button status="danger" type="text">Text Button</eh-Button>
  </Space>
</template>
```

:::

## 禁用

<Space>
  <eh-Button disabled>Default Button</eh-Button>
  <eh-Button disabled effect="reverse">Reverse Button</eh-Button>
  <eh-Button disabled type="primary">Primary Button</eh-Button>
  <eh-Button disabled type="dashed">Dashed Button</eh-Button>
  <eh-Button disabled type="text">Text Button</eh-Button>
</Space>
<Space>
  <eh-Button disabled status="success">Default Button</eh-Button>
  <eh-Button disabled effect="reverse" status="success">Reverse Button</eh-Button>
  <eh-Button disabled status="success" type="primary">Primary Button</eh-Button>
  <eh-Button disabled status="success" type="dashed">Dashed Button</eh-Button>
  <eh-Button disabled status="success" type="text">Text Button</eh-Button>
</Space>
<Space>
  <eh-Button disabled status="warning">Default Button</eh-Button>
  <eh-Button disabled effect="reverse" status="warning">Reverse Button</eh-Button>
  <eh-Button disabled status="warning" type="primary">Primary Button</eh-Button>
  <eh-Button disabled status="warning" type="dashed">Dashed Button</eh-Button>
  <eh-Button disabled status="warning" type="text">Text Button</eh-Button>
</Space>
<Space>
  <eh-Button disabled status="danger">Default Button</eh-Button>
  <eh-Button disabled effect="reverse" status="danger">Reverse Button</eh-Button>
  <eh-Button disabled status="danger" type="primary">Primary Button</eh-Button>
  <eh-Button disabled status="danger" type="dashed">Dashed Button</eh-Button>
  <eh-Button disabled status="danger" type="text">Text Button</eh-Button>
</Space>

::: details Show Code

```vue

<template>
  <Space>
    <eh-Button disabled>Default Button</eh-Button>
    <eh-Button disabled effect="reverse">Reverse Button</eh-Button>
    <eh-Button disabled type="primary">Primary Button</eh-Button>
    <eh-Button disabled type="dashed">Dashed Button</eh-Button>
    <eh-Button disabled type="text">Text Button</eh-Button>
  </Space>
  <Space>
    <eh-Button disabled status="success">Default Button</eh-Button>
    <eh-Button disabled effect="reverse" status="success">Reverse Button</eh-Button>
    <eh-Button disabled status="success" type="primary">Primary Button</eh-Button>
    <eh-Button disabled status="success" type="dashed">Dashed Button</eh-Button>
    <eh-Button disabled status="success" type="text">Text Button</eh-Button>
  </Space>
  <Space>
    <eh-Button disabled status="warning">Default Button</eh-Button>
    <eh-Button disabled effect="reverse" status="warning">Reverse Button</eh-Button>
    <eh-Button disabled status="warning" type="primary">Primary Button</eh-Button>
    <eh-Button disabled status="warning" type="dashed">Dashed Button</eh-Button>
    <eh-Button disabled status="warning" type="text">Text Button</eh-Button>
  </Space>
  <Space>
    <eh-Button disabled status="danger">Default Button</eh-Button>
    <eh-Button disabled effect="reverse" status="danger">Reverse Button</eh-Button>
    <eh-Button disabled status="danger" type="primary">Primary Button</eh-Button>
    <eh-Button disabled status="danger" type="dashed">Dashed Button</eh-Button>
    <eh-Button disabled status="danger" type="text">Text Button</eh-Button>
  </Space>
</template>
```

:::

## 加载中状态

<Space>
  <eh-Button :loading="true">Default Button</eh-Button>
  <eh-Button :loading="true" effect="reverse">Reverse Button</eh-Button>
  <eh-Button :loading="true" type="primary">Primary Button</eh-Button>
  <eh-Button :loading="true" type="danger">Danger Button</eh-Button>
  <eh-Button :loading="true" type="dashed">Dashed Button</eh-Button>
  <eh-Button :loading="true" type="text">Text Button</eh-Button>
</Space>

::: details Show Code

```vue

<script setup lang="ts">
  import {ref} from 'vue'

  const loading = ref(true)
</script>
<template>
  <Space>
    <eh-Button :loading="true">Default Button</eh-Button>
    <eh-Button :loading="true" effect="reverse">Reverse Button</eh-Button>
    <eh-Button :loading="true" type="primary">Primary Button</eh-Button>
    <eh-Button :loading="true" type="danger">Danger Button</eh-Button>
    <eh-Button :loading="true" type="dashed">Dashed Button</eh-Button>
    <eh-Button :loading="true" type="text">Text Button</eh-Button>
  </Space>
</template>
```

:::

## APIs

| 参数       | 说明                                          | 类型                                                                                     | 默认值       | 必传    |
|----------|---------------------------------------------|----------------------------------------------------------------------------------------|-----------|-------|
| name     | 按钮文本                                        | string &#124; slot                                                                     | '按钮'      | false |
| type     | 按钮类型                                        | 'default' &#124; 'primary' &#124; 'danger' &#124; 'dashed' &#124; 'text' &#124; 'link' | 'default' | false |
| effect   | 悬浮变化效果，只有 `type` 为 `default` 时，`effect` 才生效 | 'fade' &#124; 'reverse'                                                                | 'fade'    | false |
| size     | 按钮尺寸                                        | 'small' &#124; 'middle' &#124; 'large'                                                 | 'middle'  | false |
| route    | 跳转目标 `URL` 地址                               | {path?: string&#44; query?: object}                                                    | {}        | false |
| target   | 如何打开目标URL，设置 `route` 时生效                    | '_self' &#124; '_blank'                                                                | '_self'   | false |
| disabled | 是否禁用                                        | boolean                                                                                | false     | false |
| loading  | 是否加载中                                       | boolean                                                                                | false     | false |
| center   | 是否将按钮宽度调整为其父宽度并居中展示                         | boolean                                                                                | false     | false |

## Events

| 事件名称  | 说明                       | 参数                 |
|-------|--------------------------|--------------------|
| click | 点击按钮时的回调，未设置 `route` 时生效 | (e: Event) => void |
