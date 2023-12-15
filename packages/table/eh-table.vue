<script setup lang="ts">
import {computed, defineAsyncComponent, onBeforeMount, onMounted, ref} from "vue";

const emit = defineEmits(['currentChange', 'sizeChange', 'searchChange', 'searchReset', 'handleSave', 'handleUpdate', 'onLoad', 'update:searchForm'])

const search = defineAsyncComponent(
    () => import('./components/search/index.vue')
);
const tablePagination = defineAsyncComponent(
    () => import('./components/table-pagination/index.vue')
);
const menuButton = defineAsyncComponent(
    () => import('./components/menu-button/index.vue')
);
const tableMenuBtn = defineAsyncComponent(
    () => import('./components/table-menubtn/index.vue')
);
const model = defineAsyncComponent(
    () => import('./components/model/index.vue')
);

interface Props {
  bordered?: boolean | TableBorder
  data?: any[],
  loading?: boolean,
  options?: TableOptions,
  page?: Pagination,
  searchForm?: object,
  size?: 'mini' | 'small' | 'medium' | 'large',
  tip?: string,
}

const props = withDefaults(defineProps<Props>(), {
  bordered: () => {
    return {cell: true}
  },
  data: () => [],
  loading: false,
  searchForm: () => {
    return {}
  },
  size: 'small',
  tip: '加载中...',
  options: () => {
    return {
      columns: [],
      index: false,
      indexWidth: 60,
      loading: false,
      menuWidth: 245,
      search: false,
      searchBtnSpan: 6,
      searchSpan: 6,
      maxHeight: 450,
    }
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
const menuButtonRef = ref();
const modelRef = ref()

const searchForm: { [key: string]: any } = computed({
  get() {
    return props.searchForm
  },
  set(val) {
    emit('update:searchForm', val)
  }
})
const searchChange = (object: object, done: any) => {
  emit('searchChange', object, done)
};
const searchReset = (object: object) => {
  emit('searchReset', object)
}
const currentChange = (page: { currentPage: number }) => { // 分页回调
  emit('currentChange', page)
}
const sizeChange = (page: { pageSize: number }) => { // 分页回调
  emit('sizeChange', page)
}
const handleMenuClick = (type: string, params: any) => {
  modelRef.value.handleOpenModel(type, params);
}
const handleOpenModel = (type: string) => {
  modelRef.value.handleOpenModel(type);
}
const handleSave = (modelForm: object, loading: any, done: any) => {
  emit('handleSave', modelForm, loading, done)
}
const handleUpdate = (modelForm: object, loading: any, done: any) => {
  emit('handleUpdate', modelForm, loading, done)
}
const handleRefresh = () => {
  emit('onLoad', props.page, props.searchForm);
}
const rowContextmenu = (record: any, ev: any) => {
  console.log(record, ev)
}
onBeforeMount(() => {
  emit('onLoad', props.page, props.searchForm);
})
</script>

<template>
  <div ref="atble" class="arco-compontent-page">
    <!--    主视图-->
    <div class="arco-compontent-page-table d-flex flex-column">
      <div class="arco-compontent-page-search">
        <component
            :is="search"
            v-model:searchForm="searchForm"
            :options="options"
            :size="size"
            @search-change="searchChange"
            @search-reset="searchReset"
        >
          <template v-for="(colitem, index) in options.columns" :key="index" #[colitem.dataIndex+`SearchLabel`]>
            <slot :name="colitem.dataIndex + 'SearchLabel'"></slot>
          </template>
        </component>
      </div>
      <!--    菜单栏按钮-->
      <component :is="menuButton" ref="menuButtonRef" :size="size" :columns="options.columns"
                 @handleOpenModel="handleOpenModel" @handleRefresh="handleRefresh">
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
                   :loading="options.loading"
                   :pagination="false"
                   :row-class="rowClass"
                   :size="size"
                   column-resizable
                   @row-dblclick="rowContextmenu">
            <template #columns>
              <!--            序号-->
              <a-table-column v-if="options.index" title="序号" :width="80" align="center" fixed="left">
                <template #cell="{ rowIndex }">
                  {{ (page.currentPage - 1) * page.pageSize + parseInt(rowIndex) + 1 }}
                </template>
              </a-table-column>
              <!--            columns-->
              <template v-for="(item, index) in options.columns">
                <a-table-column
                    v-if="!item.hide"
                    :key="index"
                    :data-index="item.dataIndex"
                    :ellipsis="item.ellipsis"
                    :title="item.title"
                    :tooltip="item.tooltip"
                    :width="item.width || 200"
                >
                  <template #title>
                    <slot :name="item.dataIndex + 'Theader'">
                      {{ item.title }}
                    </slot>
                  </template>
                  <template #cell="{ record, rowIndex }">
                    <slot :name="item.dataIndex + 'cell'" :scope="{ record, rowIndex }">
                      {{ record[item.dataIndex as any] }}
                      <!--                      <a-input placeholder="Please enter something" :size="size" allow-clear>-->
                      <!--                        <template #prefix>-->
                      <!--                          <i class="rtdp caozuo-bianji"></i>-->
                      <!--                        </template>-->
                      <!--                      </a-input>-->
                    </slot>
                  </template>
                </a-table-column>
              </template>
              <!--            操作栏-->
              <a-table-column
                  cell-class="Menu-box-shadow"
                  :width="options.menuWidth || 145"
                  align="center"
                  fixed="right"
                  title="操作栏"
              >
                <template #cell="{ record }">
                  <component
                      :is="tableMenuBtn"
                      :options="options"
                      :record="record"
                      :size="size"
                      @handleMenuClick="handleMenuClick"
                  />
                </template>
              </a-table-column>
            </template>
          </a-table>
          <!--        分页-->
          <component
              :is="tablePagination"
              :data="data"
              :page="page"
              :size="size"
              @current-change="currentChange"
              @size-change="sizeChange"
          />
        </div>
      </a-spin>
    </div>
    <component :is="model" ref="modelRef" :size="size" :options="options" @handle-save="handleSave"
               @handle-update="handleUpdate">
      <template v-for="(colitem, index) in options.columns" :key="index" #[colitem.dataIndex+`Label`]>
        <slot :name="colitem.dataIndex + 'Label'"></slot>
      </template>
    </component>
  </div>
</template>

<style scoped lang="less">
@import './styles/index';
</style>