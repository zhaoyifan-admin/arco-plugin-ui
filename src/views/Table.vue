<script setup lang="ts">

import {reactive, ref, watch} from "vue";

let page = reactive({
  total: 20,
  currentPage: 1,
  pageSize: 5,
  pageSizes: [5, 10, 20, 30, 50],
});
const options = reactive({
  index: false,
  menuWidth: 425,
  searchBtnSpan: 6,
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
const searchForm = ref({name: '测试'});
const searchChange = (form: object, done:any) => {
  console.log(searchForm.value,1101)
  console.log(form,1102);
  setTimeout(()=>{
    done();
  },1500)
};
const searchReset = (form: object) => {
  console.log(searchForm.value,1103)
  console.log(form,1104);
}
// 分页
const currentChange = (current: number)=> {
  console.log(searchForm.value)
  page.currentPage = current
}
const sizeChange = (pageSize: number)=> {
  page.currentPage = 1
  page.pageSize = pageSize
}
</script>

<template>
  <eh-table :data="[]" v-model:page="page" v-model:searchForm="searchForm" :options="options" @current-change="currentChange"
            @search-change="searchChange"
            @search-reset="searchReset"
            @size-change="sizeChange"></eh-table>
</template>

<style scoped lang="less">

</style>