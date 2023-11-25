---
layout: home

title: Vue Arco UI
titleTemplate: Arco UI Components Library

hero:
  name: Vue Arco UI
  text: Arco UI 组件库
  tagline: 基于 Vue3 + TS + Vite 开发
  image:
    src: /arco-logo.svg
    alt: Vue Arco UI
  actions:
    - theme: brand
      text: Get Started
      link: /guide/features
    - theme: alt
      text: View on GitHub
      link: https://github.com/themusecatcher/vue-arco-ui
    - theme: alt
      text: View on NPM
      link: https://www.npmjs.com/package/vue-arco-ui
features:
  - icon: 🛠️
    title: 开发依赖
    details: 采用 Vue@3.3.4 + TypeScript@5.2.2 + Vite@4.4.11 + Less@4.2.0 实现
  - icon: ⚡️
    title: border-box
    details: '所有组件 CSS 样式均使用 box-sizing: border-box; 模式'
  - icon: 🚀
    title: 开箱即用
    details: 目前共有 52 个常用基础 UI 组件，以及 11 个常用工具函数
---

<script setup lang="ts">
import { onMounted } from 'vue'
import { fetchVersion } from './.vitepress/utils/fetchVersion'

onMounted(() => {
  fetchVersion()
})
</script>
