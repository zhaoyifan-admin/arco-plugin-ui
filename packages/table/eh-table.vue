<script lang="ts" setup>
import {computed, defineAsyncComponent, onBeforeMount, onMounted, reactive, ref} from "vue";
import type {Pagination, TableOptions} from "./components";
import type {TableBorder, TableData} from "@arco-design/web-vue";
import i18n from "../utils/local";

const emit = defineEmits(['currentChange', 'sizeChange', 'searchChange', 'searchReset', 'handleSave', 'handleSelect', 'handleUpdate', 'onLoad', 'update:searchForm'])

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
  summarySpanMethod?: any,
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
      size: 'medium',
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
    }), rowClass = (record: any, rowIndex: number) => {
      if (rowIndex % 2 === 1) {
        return 'warning-row';
      }
      return '';
    }, menuButtonRef = ref(), searchRef = ref(), atble = ref(), modelRef = ref(),
    systemLocal = i18n.global.locale,
    LocalMessage = i18n.global.getLocaleMessage(systemLocal),
    scorllHeight = ref<any>('100%'), tableForm = reactive<any>({}), searchForm: { [key: string]: any } = computed({
      get() {
        return props.searchForm
      },
      set(val) {
        emit('update:searchForm', val)
      }
    }), searchChange = (object: object, done: any) => {
      emit('searchChange', object, done)
    }, searchReset = (object: object) => {
      emit('searchReset', object)
    }, currentChange = (page: { currentPage: number }) => { // 分页回调
      emit('currentChange', page)
    }, sizeChange = (page: { pageSize: number }) => { // 分页回调
      emit('sizeChange', page)
    }, handleMenuClick = (type: string, params: any) => {
      modelRef.value.handleOpenModel(type, params);
    }, handleOpenModel = (type: string) => {
      modelRef.value.handleOpenModel(type);
    }, handleSave = (modelForm: object, loading: any, done: any) => {
      emit('handleSave', modelForm, loading, done)
    }, handleUpdate = (modelForm: object, loading: any, done: any) => {
      emit('handleUpdate', modelForm, loading, done)
    }, handleRefresh = () => {
      emit('onLoad', props.page, props.searchForm);
    }, handleSelect = (rowKeys: (string | number)[], rowKey: (string | number), record: TableData) => {
      emit('handleSelect', rowKeys, rowKey, record)
    };
onBeforeMount(() => {
  emit('onLoad', props.page, props.searchForm);
})
onMounted(() => {
  setTimeout(() => {
    const parentoffsetHeight = atble.value.offsetHeight;
    const searchHeight = searchRef.value.offsetHeight;
    const menuButtonHeight = menuButtonRef.value.offsetHeight;
    scorllHeight.value = parentoffsetHeight - (searchHeight + menuButtonHeight + 145);
  }, 500)
})

</script>

<template>
  <div ref="atble" class="arco-compontent-page">
    <!--    主视图-->
    <div class="arco-compontent-page-table">
      <!--    表单区域-->
      <div ref="searchRef" class="arco-compontent-page-search" data-aos="fade-down">
        <component
            :is="search"
            v-model:searchForm="searchForm"
            :options="options"
            :size="size"
            @search-change="searchChange"
            @search-reset="searchReset"
        >
          <template v-for="(column, index) in options.columns" :key="index" #[column.dataIndex+`SearchLabel`]>
            <slot :name="column.dataIndex + 'SearchLabel'"></slot>
          </template>
        </component>
      </div>
      <!--    主要区域-->
      <div class="arco-main-region">
        <!--    菜单栏按钮-->
        <div ref="menuButtonRef" class="arco-compontent-page-menuButton" data-aos="fade-down">
          <component :is="menuButton" :columns="options.columns" :size="size"
                     @handleOpenModel="handleOpenModel" @handleRefresh="handleRefresh">
            <template #menuLeft>
              <slot :size="size" name="menuLeft"></slot>
            </template>
            <template #menuRight>
              <slot :size="size" name="menuRight"></slot>
            </template>
          </component>
        </div>
        <!--      Table展示区-->
        <a-spin :loading="loading" :tip="tip" dot>
          <div class="table-show" data-aos="fade-right">
            <a-config-provider :locale="LocalMessage">
              <a-table :bordered="bordered"
                       :columns="options.columns"
                       :data="data"
                       :loading="options.loading"
                       :pagination="false"
                       :row-class="rowClass"
                       :row-selection="options.rowSelection"
                       :scroll="{x: options.scrollX, y: scorllHeight}"
                       :size="size"
                       :summary="options.summary || true"
                       :summary-span-method="summarySpanMethod"
                       column-resizable
                       row-key="employeeCode"
                       summary-text="合计"
                       @select="handleSelect">
                <template #columns>
                  <!--            序号-->
                  <a-table-column v-if="options.index" :width="80" align="center" fixed="left" title="序号">
                    <template #cell="{ record,rowIndex }">
                      {{
                        record['__arco_data_index_0'] ? record['__arco_data_index_0'] : (page.currentPage - 1) * page.pageSize + parseInt(rowIndex) + 1
                      }}
                    </template>
                  </a-table-column>
                  <!--            columns-->
                  <template v-for="(item, index) in options.columns">
                    <a-table-column
                        v-if="!item.hide"
                        :key="index"
                        :data-index="item.dataIndex"
                        :ellipsis="item.ellipsis"
                        :index="index"
                        :title="item.title"
                        :tooltip="item.tooltip"
                        :width="item.width"
                    >
                      <template #title>
                        <slot :name="item.dataIndex + 'Title'">
                          {{ item.title }}
                        </slot>
                      </template>
                      <template #cell="{ record, column, rowIndex }">
                        <slot :column="column" :name="item.dataIndex + 'cell'" :record="record" :rowIndex="rowIndex">
                          {{ record[item.dataIndex as any] }}
                        </slot>
                      </template>
                    </a-table-column>
                  </template>
                  <!--            操作栏-->
                  <a-table-column
                      :width="200"
                      align="center"
                      fixed="right"
                      title="操作栏"
                  >
                    <template #cell="{ record }">
                      <component
                          :is="tableMenuBtn"
                          v-if="!record['__arco_data_index_0']"
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
            </a-config-provider>
          </div>
        </a-spin>
      </div>
    </div>
    <component :is="model" ref="modelRef" :options="options" :size="size" @handle-save="handleSave"
               @handle-update="handleUpdate">
      <template v-for="(column, index) in options.columns" :key="index" #[column.dataIndex+`Label`]>
        <slot :name="column.dataIndex + 'Label'"></slot>
      </template>
    </component>
  </div>
</template>

<style lang="less" scoped>
@import './styles/index';
</style>