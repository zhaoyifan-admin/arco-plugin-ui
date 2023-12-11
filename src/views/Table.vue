<script setup lang="ts">

import {reactive, ref} from "vue";

let page = reactive({
  total: 20,
  currentPage: 1,
  pageSize: 5,
  pageSizes: [5, 10, 20, 30, 50],
});
const options = reactive({
  index: true,
  searchBtnSpan: 6,
  menuBtnStyle: "icon",
  columns: [
    {
      title: '员工编号',
      dataIndex: 'employeeCode',
      search: true,
      rules: [{required:true,message:'name is required'},{minLength:5,message:'must be greater than 5 characters'}]
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
      search: true,
    },
    {
      title: '工种',
      dataIndex: 'workType',
      search: true,
    }
  ]
})
const searchForm = ref({employeeCode: '996'});
const data = reactive([{
  "employeeNo": 11394,
  "employeeCode": "996",
  "employeeName": "张四",
  "createTime": "2023-05-12 14:41:42",
  "deptNo": 5,
  "groupNo": 10,
  "onJobStatus": 1,
  "onJobStatusStr": null,
  "lineNo": null,
  "tenantId": 1,
  "gender": "0",
  "idNo": null,
  "workTypeName": null,
  "workType": 0,
  "workTypeNo": "",
  "address": null,
  "tel": null,
  "userId": null,
  "note": null,
  "recState": 0,
  "recEdition": 0,
  "regionCode": null,
  "deptCode": null,
  "deptName": "测试部门05",
  "groupName": "华苑路队",
  "lineName": null,
  "deptType": null,
  "username": null,
  "userNo": null,
  "ids": null,
  "employeeNoList": null,
  "validTime": null,
  "signCode": null,
  "sort": null,
  "opcardNo": null,
  "employeeCodeName": null,
  "employeeNoIds": null,
  "isLogin": null,
  "tenantIds": null,
  "tenantName": null,
  "tripId": null,
  "planStartTime": null
},
  {
    "employeeNo": 50,
    "employeeCode": "995",
    "employeeName": "法夜1",
    "createTime": "2021-10-08 09:40:48",
    "deptNo": 15,
    "groupNo": 1,
    "onJobStatus": 1,
    "onJobStatusStr": null,
    "lineNo": null,
    "tenantId": 1,
    "gender": "0",
    "idNo": "",
    "workTypeName": null,
    "workType": 1,
    "workTypeNo": "2",
    "address": "",
    "tel": "",
    "userId": null,
    "note": "",
    "recState": 0,
    "recEdition": 0,
    "regionCode": null,
    "deptCode": null,
    "deptName": "测试充值点柜面（WP）",
    "groupName": "测试",
    "lineName": null,
    "deptType": null,
    "username": null,
    "userNo": null,
    "ids": null,
    "employeeNoList": null,
    "validTime": null,
    "signCode": null,
    "sort": null,
    "opcardNo": null,
    "employeeCodeName": null,
    "employeeNoIds": null,
    "isLogin": null,
    "tenantIds": null,
    "tenantName": null,
    "tripId": null,
    "planStartTime": null
  },
  {
    "employeeNo": 48,
    "employeeCode": "994",
    "employeeName": "法夜01",
    "createTime": "2021-09-30 10:42:56",
    "deptNo": 24,
    "groupNo": null,
    "onJobStatus": 1,
    "onJobStatusStr": null,
    "lineNo": null,
    "tenantId": 1,
    "gender": "0",
    "idNo": null,
    "workTypeName": null,
    "workType": 1,
    "workTypeNo": "20",
    "address": "",
    "tel": null,
    "userId": null,
    "note": "",
    "recState": 0,
    "recEdition": 0,
    "regionCode": null,
    "deptCode": null,
    "deptName": "测试充值1",
    "groupName": null,
    "lineName": null,
    "deptType": null,
    "username": null,
    "userNo": null,
    "ids": null,
    "employeeNoList": null,
    "validTime": null,
    "signCode": null,
    "sort": null,
    "opcardNo": null,
    "employeeCodeName": null,
    "employeeNoIds": null,
    "isLogin": null,
    "tenantIds": null,
    "tenantName": null,
    "tripId": null,
    "planStartTime": null
  },
  {
    "employeeNo": 47,
    "employeeCode": "993",
    "employeeName": "复核员",
    "createTime": "2021-09-30 10:42:56",
    "deptNo": 23,
    "groupNo": null,
    "onJobStatus": 1,
    "onJobStatusStr": null,
    "lineNo": null,
    "tenantId": 1,
    "gender": "0",
    "idNo": null,
    "workTypeName": null,
    "workType": 2,
    "workTypeNo": "",
    "address": "",
    "tel": null,
    "userId": null,
    "note": "",
    "recState": 0,
    "recEdition": 0,
    "regionCode": null,
    "deptCode": null,
    "deptName": null,
    "groupName": null,
    "lineName": null,
    "deptType": null,
    "username": null,
    "userNo": null,
    "ids": null,
    "employeeNoList": null,
    "validTime": null,
    "signCode": null,
    "sort": null,
    "opcardNo": null,
    "employeeCodeName": null,
    "employeeNoIds": null,
    "isLogin": null,
    "tenantIds": null,
    "tenantName": null,
    "tripId": null,
    "planStartTime": null
  },
  {
    "employeeNo": 46,
    "employeeCode": "992",
    "employeeName": "点钞员",
    "createTime": "2021-09-30 10:42:55",
    "deptNo": 1,
    "groupNo": 200,
    "onJobStatus": 3,
    "onJobStatusStr": null,
    "lineNo": null,
    "tenantId": 1,
    "gender": "0",
    "idNo": null,
    "workTypeName": null,
    "workType": 0,
    "workTypeNo": "",
    "address": "",
    "tel": null,
    "userId": null,
    "note": "",
    "recState": 0,
    "recEdition": 0,
    "regionCode": null,
    "deptCode": null,
    "deptName": "公交一公司",
    "groupName": "路队200",
    "lineName": null,
    "deptType": null,
    "username": null,
    "userNo": null,
    "ids": null,
    "employeeNoList": null,
    "validTime": null,
    "signCode": null,
    "sort": null,
    "opcardNo": null,
    "employeeCodeName": null,
    "employeeNoIds": null,
    "isLogin": null,
    "tenantIds": null,
    "tenantName": null,
    "tripId": null,
    "planStartTime": null
  }
])
const rowSave = () => {

}
const searchChange = (form: object, done: any) => {
  console.log(searchForm.value, 1101)
  console.log(form, 1102);
  setTimeout(() => {
    done();
  }, 1500)
};
const searchReset = (form: object) => {
  console.log(searchForm.value, 1103)
  console.log(form, 1104);
}
// 分页
const currentChange = (current: number) => {
  console.log(searchForm.value)
  page.currentPage = current
}
const sizeChange = (pageSize: number) => {
  page.currentPage = 1
  page.pageSize = pageSize
}
</script>

<template>
  <eh-table v-model:page="page" v-model:searchForm="searchForm" :data="data" :options="options"
            @current-change="currentChange"
            @row-save="rowSave"
            @search-change="searchChange"
            @search-reset="searchReset"
            @size-change="sizeChange">
    <template #employeeCodeLabel>
      吃啥ma ?
    </template>
  </eh-table>
</template>

<style scoped lang="less">

</style>