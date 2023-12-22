<script lang="ts" setup>
import { reactive, ref } from 'vue';
import {getlist} from "@/utils/util";

interface Pagination {
  currentPage?: number; // 当前页码
  pageSize?: number; // 每页条数
  pageSizes?: any[];
  total?: number; // 总条数
}
const page = reactive({
  total: 20,
  currentPage: 1,
  pageSize: 5,
  pageSizes: [5, 10, 20, 30, 50],
});
const options = reactive({
  index: true,
  searchBtnSpan: 6,
  menuBtnStyle: 'icon',
  columns: [
    {
      title: '员工编号',
      dataIndex: 'employeeCode',
      search: true,
    },
    {
      title: '员工姓名',
      dataIndex: 'employeeName',
      search: true,
    },
    {
      title: '所属部门',
      dataIndex: 'deptName',
      slot: 'job',
      ellipsis: true,
      tooltip: true,
      search: true,
    },
    {
      title: '所属路队',
      dataIndex: 'groupName',
      search: true,
    },
    {
      title: '所属线路',
      dataIndex: 'lineName',
      search: true,
    },
    {
      title: '性别',
      dataIndex: 'gender',
      type: 'select',
      search: true,
    },
    {
      title: '工种',
      dataIndex: 'workType',
      type: 'select',
      search: true,
      dicData: [
        { label: '男', value: 1 },
        { label: '女', value: 2 },
      ],
    },
  ],
});
const searchForm = ref({ employeeCode: '996' });
const state = reactive({
  data: [],
  loading: true,
});

const getList = (page: Pagination, params?: object) => {
  state.loading = true;
  getlist({
    current: page.currentPage,
    size: page.pageSize,
    ...params,
  })
      .then((res) => {
        state.data = res.data.records;
        page.total = res.data.total;
        state.loading = false;
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        state.loading = false;
      });
};
const searchChange = (form: object, done: any) => {
  page.currentPage = 1;
  getList(page, form);
  done();
};
const searchReset = (form: object) => {
  getList(page, form);
};
// 分页
const currentChange = (current: number) => {
  page.currentPage = current;
  getList(page);
};
const sizeChange = (pageSize: number) => {
  page.currentPage = 1;
  page.pageSize = pageSize;
  getList(page);
};
const handleSave = (form: object, loading: any, done: any) => {
  loading();
  done();
};
const handleUpdate = (form: object, loading: any, done: any) => {
  loading();
  // done()
};
</script>

<template>
  <eh-table
      v-model:page="page"
      v-model:searchForm="searchForm"
      :data="state.data"
      :loading="state.loading"
      :options="options"
      @onLoad="getList"
      @current-change="currentChange"
      @handle-save="handleSave"
      @handle-update="handleUpdate"
      @search-change="searchChange"
      @search-reset="searchReset"
      @size-change="sizeChange"
  >
    <!--    <template #employeeCodeLabel> 吃啥ma ? </template>-->
  </eh-table>
</template>

<style lang="less" scoped></style>
