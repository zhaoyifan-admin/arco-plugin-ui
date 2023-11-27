<script setup lang="ts">

import {reactive} from "vue";

const page = reactive({
  total: 0,
  currentPage: 1,
  pageSize: 5,
  pageSizes: [5, 10, 20, 30, 50],
});
const options = reactive({
  index: false,
  columns: [
    {
      title: '名字',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age'
    },
    {
      title: '职业',
      dataIndex: 'job',
      slot: 'job'
    },
    {
      title: '性别',
      dataIndex: 'sex'
    },
    {
      title: '地址',
      dataIndex: 'address'
    }
  ]
})
</script>

<template>
  <eh-table :data="[]" :page="page" :options="options"></eh-table>
</template>

<style scoped lang="less">

</style>