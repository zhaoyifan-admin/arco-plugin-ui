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

<style scoped lang="less">

</style>