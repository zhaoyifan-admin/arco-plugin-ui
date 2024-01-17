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

<Space>
  <eh-Button>
    <template #icon>
      <icon-plus />
    </template>
  </eh-Button>
</Space>

::: details Show Code

```vue

<template>
  <Space>
    <eh-Button>
      <template #icon>
        <icon-plus />
      </template>
    </eh-Button>
  </Space>
</template>
```

:::

## 禁用

<Space>
  <eh-Button disabled>Default Button</eh-Button>
  <eh-Button disabled effect="reverse">Reverse Button</eh-Button>
  <eh-Button disabled type="primary">Primary Button</eh-Button>
  <eh-Button disabled type="danger">Danger Button</eh-Button>
  <eh-Button disabled type="dashed">Dashed Button</eh-Button>
  <eh-Button disabled type="text">Text Button</eh-Button>
</Space>

::: details Show Code

```vue

<template>
  <Space>
    <eh-Button disabled>Default Button</eh-Button>
    <eh-Button disabled effect="reverse">Reverse Button</eh-Button>
    <eh-Button disabled type="primary">Primary Button</eh-Button>
    <eh-Button disabled type="danger">Danger Button</eh-Button>
    <eh-Button disabled type="dashed">Dashed Button</eh-Button>
    <eh-Button disabled type="text">Text Button</eh-Button>
  </Space>
</template>
```

:::

## 三种尺寸

<Space>
  <eh-Button size="small">Small</eh-Button>
  <eh-Button>Default</eh-Button>
  <eh-Button size="large">Large</eh-Button>
</Space>

::: details Show Code

```vue

<template>
  <Space>
    <eh-Button size="small">Small</eh-Button>
    <eh-Button>Default</eh-Button>
    <eh-Button size="large">Large</eh-Button>
  </Space>
</template>
```

:::

## 自定义样式

<eh-Button style="width: 120px; height: 40px;" size="large">
  <p style="font-size: 18px;">自定义样式</p>
</eh-Button>

::: details Show Code

```vue

<script setup lang="ts">
  function onClick(e: Event) {
    console.log('click')
  }
</script>
<template>
  <eh-Button style="width: 120px; height: 40px;" size="large">
    <p style="font-size: 18px;">自定义样式</p>
  </eh-Button>
</template>
```

:::

## 加载中状态

<Space>
  <eh-Button :loading="loading">Default Button</eh-Button>
  <eh-Button effect="reverse" :loading="loading">Reverse Button</eh-Button>
  <eh-Button type="primary" :loading="loading">Primary Button</eh-Button>
  <eh-Button type="danger" :loading="loading">Danger Button</eh-Button>
  <eh-Button type="dashed" :loading="loading">Dashed Button</eh-Button>
  <eh-Button type="text" :loading="loading">Text Button</eh-Button>
</Space>
<br/>
<Space align="center" style="margin-top: 10px;">
  <h3 style="margin-top: 0;">Loading state: </h3>
  <Switch v-model:checked="loading" />
</Space>

::: details Show Code

```vue

<script setup lang="ts">
  import {ref} from 'vue'

  const loading = ref(true)
</script>
<template>
  <Space>
    <eh-Button :loading="loading">Default Button</eh-Button>
    <eh-Button effect="reverse" :loading="loading">Reverse Button</eh-Button>
    <eh-Button type="primary" :loading="loading">Primary Button</eh-Button>
    <eh-Button type="danger" :loading="loading">Danger Button</eh-Button>
    <eh-Button type="dashed" :loading="loading">Dashed Button</eh-Button>
    <eh-Button type="text" :loading="loading">Text Button</eh-Button>
  </Space>
  <br/>
  <Space align="center" style="margin-top: 10px;">
    <h3 style="margin-top: 0;">Loading state: </h3>
    <Switch v-model:checked="loading"/>
  </Space>
</template>
```

## APIs

 参数       | 说明                                          | 类型                                                                                     | 默认值       | 必传    
----------|---------------------------------------------|----------------------------------------------------------------------------------------|-----------|-------
 name     | 按钮文本                                        | string &#124; slot                                                                     | '按钮'      | false 
 type     | 按钮类型                                        | 'default' &#124; 'primary' &#124; 'danger' &#124; 'dashed' &#124; 'text' &#124; 'link' | 'default' | false 
 effect   | 悬浮变化效果，只有 `type` 为 `default` 时，`effect` 才生效 | 'fade' &#124; 'reverse'                                                                | 'fade'    | false 
 size     | 按钮尺寸                                        | 'small' &#124; 'middle' &#124; 'large'                                                 | 'middle'  | false 
 route    | 跳转目标 `URL` 地址                               | {path?: string&#44; query?: object}                                                    | {}        | false 
 target   | 如何打开目标URL，设置 `route` 时生效                    | '_self' &#124; '_blank'                                                                | '_self'   | false 
 disabled | 是否禁用                                        | boolean                                                                                | false     | false 
 loading  | 是否加载中                                       | boolean                                                                                | false     | false 
 center   | 是否将按钮宽度调整为其父宽度并居中展示                         | boolean                                                                                | false     | false 

## Events

 事件名称  | 说明                       | 参数                 
-------|--------------------------|--------------------
 click | 点击按钮时的回调，未设置 `route` 时生效 | (e: Event) => void 
