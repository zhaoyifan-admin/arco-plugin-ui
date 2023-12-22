<script lang="ts" setup>
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
const currentChange = (currentPage: number) => {
  emit('currentChange', currentPage)
}
const sizeChange = (pageSize: number) => {
  emit('sizeChange', pageSize)
}
</script>

<template>
  <a-pagination
      :active-page-item-style="{ border: '1px solid #175CFF' }"
      :buffer-size="2"
      :current="page.currentPage"
      :page-size="page.pageSize"
      :page-size-options="page.pageSizes"
      :size="size"
      :total="page.total"
      show-jumper
      show-page-size
      show-total
      @change="currentChange"
      @page-size-change="sizeChange"
  />
</template>

<style lang="less" scoped>

</style>