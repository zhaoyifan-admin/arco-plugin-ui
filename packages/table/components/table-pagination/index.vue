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
const emit = defineEmits(['currentChange','sizeChange'])
const currentChange = (page: { currentPage: number }) => { // 分页回调
  emit('currentChange', page)
}
const sizeChange = (page: { pageSize: number }) => { // 分页回调
  emit('sizeChange', page)
}
</script>

<template>
  <a-pagination
      :total="page.total"
      :page-size="page.pageSize"
      :page-size-options="page.pageSizes"
      :buffer-size="2"
      :active-page-item-style="{ border: '1px solid #175CFF' }"
      :size="size"
      show-total
      show-jumper
      show-page-size
      @change="currentChange"
      @page-size-change="sizeChange"
  />
</template>

<style scoped lang="less">

</style>