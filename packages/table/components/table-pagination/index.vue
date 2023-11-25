<script setup lang="ts">
interface Pagination {
  currentPage: number // 当前页码
  pageSize: number // 每页条数
  pageSizes: any[]
  total: number // 总条数
}
interface Props {
  bordered?: boolean
  size?: 'mini' | 'small' | 'medium' | 'large',
  page?: Pagination,
}
withDefaults(defineProps<Props>(), {
  bordered: true,
  size: 'medium',
  page: () => {
    return {currentPage: 1, pageSize: 10, pageSizes: [5, 10, 20, 30, 50], total: 0}
  },
})
const emit = defineEmits(['changePage','changePagesize'])
function changePage (pager: {currentPage: number}) { // 分页回调
  emit('changePage', pager)
}
function changePagesize (pager: {pageSize: number}) { // 分页回调
  emit('changePagesize', pager)
}
</script>

<template>
  <arco-pagination
      :total="page.total"
      :page-size="page.pageSize"
      :page-size-options="page.pageSizes"
      :buffer-size="2"
      :active-page-item-style="{ border: '1px solid #175CFF' }"
      :size="size"
      show-total
      show-jumper
      show-page-size
      @change="changePage"
      @page-size-change="changePagesize"
  />
</template>

<style scoped lang="less">

</style>