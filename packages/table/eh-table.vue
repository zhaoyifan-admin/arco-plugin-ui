<script setup lang="ts">
import {defineAsyncComponent} from "vue";

const tablePagination = defineAsyncComponent(
    () => import('./components/table-pagination/index.vue')
);
const topButton = defineAsyncComponent(
    () => import('./components/top-button/index.vue')
);

interface Props {
  bordered?: TableBorder
  data?: any[],
  loading?: boolean,
  size?: 'mini' | 'small' | 'medium' | 'large',
  tip?: string,
  options?: TableOptions,
  page?: Pagination,
}

withDefaults(defineProps<Props>(), {
  bordered: () => {
    return {cell: true}
  },
  data: () => [],
  loading: false,
  size: 'medium',
  tip: '加载中...',
  options: () => {
    return {index: false}
  },
  page: () => {
    return {currentPage: 1, pageSize: 10, pageSizes: [5, 10, 20, 30, 50], total: 0}
  },
})
const rowClass = (record: any, rowIndex: number) => {
  if (rowIndex % 2 === 1) {
    return 'warning-row';
  }
  return '';
};

const emit = defineEmits(['currentChange','sizeChange'])
function currentChange (page: {currentPage: number}) { // 分页回调
  emit('currentChange', page)
}
function sizeChange (page: {pageSize: number}) { // 分页回调
  emit('sizeChange', page)
}
</script>

<template>
  <div ref="atble" class="arco-compontent-page d-flex a-start">
    <!--    主视图-->
    <div class="arco-compontent-page-table d-flex flex-column">
      <!--    菜单栏按钮-->
      <component :is="topButton" :columns="options.columns">
        <template #menuLeft>
          <slot name="menuLeft" :size="size"></slot>
        </template>
        <template #menuRight>
          <slot name="menuRight" :size="size"></slot>
        </template>
      </component>
      <!--      Table展示区-->
      <a-spin dot :loading="loading" :tip="tip">
        <div class="table-show d-flex flex-column">
          <a-table :bordered="bordered"
                      :columns="options.columns"
                      :data="data"
                      :pagination="false"
                      :row-class="rowClass"
                      :size="size"
                      column-resizable>
            <template #columns>
              <!--            序号-->
              <a-table-column v-if="options.index" title="序号" align="center">
                <template #cell="{ rowIndex }">
                  {{ (page.currentPage - 1) * page.pageSize + parseInt(rowIndex) + 1 }}
                </template>
              </a-table-column>
              <!--            columns-->
              <template v-for="(item, index) in options.columns">
                <a-table-column
                    v-if="!item.hide"
                    :key="index"
                    :title="item.title"
                    :data-index="item.dataIndex"
                    :width="item.width"
                    ellipsis
                    tooltip
                >
                  <template #cell="{ record }">
                    {{ record[item.dataIndex as any] }}
                  </template>
                </a-table-column>
              </template>
            </template>
          </a-table>
          <!--        分页-->
          <component
              :is="tablePagination"
              :data="data"
              :size="size"
              :page="page"
              @current-change="currentChange"
              @size-change="sizeChange"
          />
        </div>
      </a-spin>
    </div>
  </div>
</template>

<style scoped lang="less">
@import './styles/index';
</style>