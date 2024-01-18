<script lang="ts" setup>
import EhButton from '../../packages/button'
import EhButtonGroup from '../../packages/buttongroup'
</script>
<template>
  <div>
    <h1>Button 按钮</h1>
    <h2 class="mt30 mb10">基本用法</h2>
    <Space>
      <eh-Button>Default Button</eh-Button>
      <eh-Button effect="reverse">Reverse Button</eh-Button>
      <eh-Button type="primary">Primary Button</eh-Button>
      <eh-Button type="dashed">Dashed Button</eh-Button>
      <eh-Button type="text">Text Button</eh-Button>
    </Space>
    <h2 class="mt30 mb10">图标按钮</h2>
    <Space>
      <eh-Button>
        <template #icon>
          <icon-plus />
        </template>
      </eh-Button>
      <eh-Button type="primary">
        <template #icon>
          <icon-delete />
        </template>
        Delete
      </eh-Button>
    </Space>
    <h2 class="mt30 mb10">按钮形状</h2>
    <Space>
      <eh-Button type="primary">Square</eh-Button>
      <eh-Button shape="round" type="primary">Round</eh-Button>
      <eh-Button shape="circle" type="primary">
        <icon-plus />
      </eh-Button>
    </Space>
    <h2 class="mt30 mb10">按钮尺寸</h2>
    <Space>
      <eh-Button size="mini" type="primary">Mini</eh-Button>
      <eh-Button size="small" type="primary">Small</eh-Button>
      <eh-Button type="primary">Medium</eh-Button>
      <eh-Button size="large" type="primary">Large</eh-Button>
    </Space>
    <h2 class="mt30 mb10">按钮状态</h2>
    <Space>
      <eh-Button status="success">Default Button</eh-Button>
      <eh-Button effect="reverse" status="success">Reverse Button</eh-Button>
      <eh-Button status="success" type="primary">Primary Button</eh-Button>
      <eh-Button status="success" type="dashed">Dashed Button</eh-Button>
      <eh-Button status="success" type="text">Text Button</eh-Button>
    </Space>
    <br>
    <Space class="mt10 mb10">
      <eh-Button status="warning">Default Button</eh-Button>
      <eh-Button effect="reverse" status="warning">Reverse Button</eh-Button>
      <eh-Button status="warning" type="primary">Primary Button</eh-Button>
      <eh-Button status="warning" type="dashed">Dashed Button</eh-Button>
      <eh-Button status="warning" type="text">Text Button</eh-Button>
    </Space>
    <br>
    <Space class="mt10 mb10">
      <eh-Button status="danger">Default Button</eh-Button>
      <eh-Button effect="reverse" status="danger">Reverse Button</eh-Button>
      <eh-Button status="danger" type="primary">Primary Button</eh-Button>
      <eh-Button status="danger" type="dashed">Dashed Button</eh-Button>
      <eh-Button status="danger" type="text">Text Button</eh-Button>
    </Space>
    <h2 class="mt30 mb10">禁用</h2>
    <Space>
      <eh-Button disabled>Default Button</eh-Button>
      <eh-Button disabled effect="reverse">Reverse Button</eh-Button>
      <eh-Button disabled type="primary">Primary Button</eh-Button>
      <eh-Button disabled type="dashed">Dashed Button</eh-Button>
      <eh-Button disabled type="text">Text Button</eh-Button>
    </Space>
    <br>
    <Space class="mt10 mb10">
      <eh-Button disabled status="success">Default Button</eh-Button>
      <eh-Button disabled effect="reverse" status="success">Reverse Button</eh-Button>
      <eh-Button disabled status="success" type="primary">Primary Button</eh-Button>
      <eh-Button disabled status="success" type="dashed">Dashed Button</eh-Button>
      <eh-Button disabled status="success" type="text">Text Button</eh-Button>
    </Space>
    <br>
    <Space class="mt10 mb10">
      <eh-Button disabled status="warning">Default Button</eh-Button>
      <eh-Button disabled effect="reverse" status="warning">Reverse Button</eh-Button>
      <eh-Button disabled status="warning" type="primary">Primary Button</eh-Button>
      <eh-Button disabled status="warning" type="dashed">Dashed Button</eh-Button>
      <eh-Button disabled status="warning" type="text">Text Button</eh-Button>
    </Space>
    <br>
    <Space class="mt10 mb10">
      <eh-Button disabled status="danger">Default Button</eh-Button>
      <eh-Button disabled effect="reverse" status="danger">Reverse Button</eh-Button>
      <eh-Button disabled status="danger" type="primary">Primary Button</eh-Button>
      <eh-Button disabled status="danger" type="dashed">Dashed Button</eh-Button>
      <eh-Button disabled status="danger" type="text">Text Button</eh-Button>
    </Space>
    <h2 class="mt30 mb10">加载中状态</h2>
    <Space>
      <eh-Button :loading="true">Default Button</eh-Button>
      <eh-Button :loading="true" effect="reverse">Reverse Button</eh-Button>
      <eh-Button :loading="true" type="primary">Primary Button</eh-Button>
      <eh-Button :loading="true" type="danger">Danger Button</eh-Button>
      <eh-Button :loading="true" type="dashed">Dashed Button</eh-Button>
      <eh-Button :loading="true" type="text">Text Button</eh-Button>
    </Space>
    <h2 class="mt30 mb10">组合按钮</h2>
    <Space>
      <eh-Button-Group>
        <eh-Button type="primary">Primary Button</eh-Button>
        <eh-Button type="primary">Primary Button</eh-Button>
        <eh-Button type="primary">Primary Button</eh-Button>
      </eh-Button-Group>
    </Space>
  </div>
</template>
