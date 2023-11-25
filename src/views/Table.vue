<script setup lang="ts">

</script>

<template>
  <Table :columns="[
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Salary',
        dataIndex: 'salary',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
    ]" :data="[]"></Table>
</template>

<style scoped lang="less">

</style>