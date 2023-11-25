# 快速上手<BackTop />

## 安装

**With PNPM**

```bash
$ pnpm i vue-arco-ui
# or
$ pnpm add vue-arco-ui
```

**With YARN**

```bash
$ yarn add vue-arco-ui
```

**With NPM**

```bash
$ npm i vue-arco-ui
```

## 使用

> **Global**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import VueArcoUI from 'vue-arco-ui'
import 'vue-arco-ui/css'

const app = createApp(App)
app.use(VueArcoUI)

app.mount('#app')
```

> **Local**

```vue
<script setup lang="ts">
import { Button } from 'vue-arco-ui'
import 'vue-arco-ui/css'
</script>

<template>
  <Button></Button>
</template>
```
