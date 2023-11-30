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
  menuWidth: 425,
  columns: [
    {
      title: '名字',
      dataIndex: 'name',
      search: true,
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
const searchForm = reactive({});
const onSearch = (form: object, done:any) => {
  console.log(form)
  setTimeout(()=>{
    done();
  },3500)
};
// 分页
const currentChange = (current: number)=> {
  page.currentPage = current
}
const sizeChange = (pageSize: number)=> {
  page.pageSize = pageSize
}
</script>

<template>
  <eh-table :data="[]" v-model:page="page" v-model:searchForm="searchForm" :options="options" @current-change="currentChange"
            @search-change="onSearch"
            @size-change="sizeChange"></eh-table>
</template>

<style scoped lang="less">

</style>