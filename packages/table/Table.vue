<script setup lang="ts">
import {defineAsyncComponent} from "vue";

const tablePagination = defineAsyncComponent(
    () => import('./components/table-pagination/index.vue')
);
interface Column {
  dataIndex: string // 列头显示文字
  hide: boolean // 列宽度
  slot?: string // 列数据字符索引
  title?: string // 列插槽名称索引
  width: number | string
}

interface TableBorder {
  bodyCell?: boolean;
  cell?: boolean;
  headerCell?: boolean;
  wrapper?: boolean;
}

interface Pagination {
  currentPage: number // 当前页码
  pageSize: number // 每页条数
  pageSizes: any[]
  total: number // 总条数
}

interface Props {
  bordered?: TableBorder
  columns?: Column[]
  data?: any[],
  loading?: boolean,
  size?: 'mini' | 'small' | 'medium' | 'large',
  tip?: string,
  page?: Pagination,
}

withDefaults(defineProps<Props>(), {
  bordered: () => {
    return {cell: true}
  },
  columns: () => [],
  data: () => [],
  loading: false,
  size: 'medium',
  tip: '加载中...',
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
</script>

<template>
  <div ref="atble" class="arco-compontent-page d-flex a-start">
    <!--    主视图-->
    <div class="arco-compontent-page-table d-flex flex-column">
      <!--      Table展示区-->
      <arco-spin dot :loading="loading" :tip="tip">
        <div class="table-show d-flex flex-column">
          <arco-table :bordered="bordered"
                     :columns="columns"
                     :data="data"
                     :pagination="false"
                     :row-class="rowClass"
                     :size="size"
                     column-resizable>
            <template #columns>
              <!--            序号-->
              <arco-table-column title="序号" align="center" :width="70 || 'auto'">
                <template #cell="{ rowIndex }">
                  {{ (page.currentPage - 1) * page.pageSize + parseInt(rowIndex) + 1 }}
                </template>
              </arco-table-column>
              <!--            columns-->
              <template v-for="(item, index) in columns">
                <arco-table-column
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
                </arco-table-column>
              </template>
            </template>
          </arco-table>
          <!--        分页-->
          <component
              :is="tablePagination"
              :data="data"
              :size="size"
              :page="page"
          />
        </div>
      </arco-spin>
    </div>
  </div>
</template>

<style scoped lang="less">
@import './styles/index';
</style>