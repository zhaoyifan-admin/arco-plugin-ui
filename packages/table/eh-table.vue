<script setup lang="ts">
import {computed, defineAsyncComponent, ref} from "vue";

const emit = defineEmits(['currentChange', 'sizeChange', 'searchChange', 'searchReset'])

const search = defineAsyncComponent(
    () => import('./components/search/index.vue')
);
const tabs = defineAsyncComponent(
    () => import('./components/tabs/index.vue')
);
const tablePagination = defineAsyncComponent(
    () => import('./components/table-pagination/index.vue')
);
const topButton = defineAsyncComponent(
    () => import('./components/top-button/index.vue')
);

interface Props {
  bordered?: boolean | TableBorder
  data?: any[],
  loading?: boolean,
  searchForm?: object,
  size?: 'mini' | 'small' | 'medium' | 'large',
  tip?: string,
  options?: TableOptions,
  page?: Pagination,
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
      loading: false,
      index: false,
      indexWidth: 60,
      columns: [],
      menuWidth: 120,
      search: false,
      searchSpan: 6,
      searchBtnSpan: 6,
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
const searchTabs = ref(false);
const menuStyle = computed(() => {
  const width = {
    width: '0',
  };
  const padding = {
    padding: '0',
  };
  if (searchTabs.value) {
    width.width = '425px';
    padding.padding = '10px 10px 10px 0';
  } else {
    width.width = '0';
    padding.padding = '0';
  }
  return {...width, ...padding};
});
const searchForm: { [key: string]: any } = computed({
  get() {
    return props.searchForm
  },
  set(val) {
    emit('update:searchForm', val)
  }
})
const onCollapse = () => {
  searchTabs.value = !searchTabs.value;
};
const handleMenuClick = (type: string, params: any) => {
  console.log(type, params);
};
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
</script>

<template>
  <div ref="atble" class="arco-compontent-page d-flex a-start">
    <!--    Tab操作区-->
    <div class="arco-compontent-page-tabs p-relative" :style="menuStyle">
      <component
          :is="tabs"
          :size="size"
          v-show="searchTabs"
          :options="options"
          :searchTabs="searchTabs"
      />
      <div class="collapse-btn-box p-absolute" @click="onCollapse"></div>
    </div>
    <!--    主视图-->
    <div class="arco-compontent-page-table d-flex flex-column">
      <div class="arco-compontent-page-search">
        <component
            :is="search"
            :size="size"
            :options="options"
            :searchTabs="searchTabs"
            v-model:searchForm="searchForm"
            @search-change="searchChange"
            @search-reset="searchReset"
        />
      </div>
      <!--    菜单栏按钮-->
      <component :is="topButton" :size="size" :columns="options.columns">
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
                   :loading="options.loading"
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
              <!--            操作栏-->
              <a-table-column
                  title="操作栏"
                  align="center"
                  :width="options.menuWidth"
                  fixed="right"
              >
                <template #cell="{ record }">
                  <a-button
                      type="text"
                      :size="size"
                      @click="handleMenuClick('see', record)"
                  >
                    <template #icon>
                      <i class="rtdp chakan"></i>
                    </template>
                    查 看
                  </a-button>
                  <a-button
                      type="text"
                      :size="size"
                      @click="handleMenuClick('edit', record)"
                  >
                    <template #icon>
                      <i class="rtdp caozuo-bianji"></i>
                    </template>
                    编 辑
                  </a-button>
                  <a-button
                      type="text"
                      :size="size"
                      @click="handleMenuClick('seeVedio', record)"
                  >
                    <template #icon>
                      <i class="rtdp shipin"></i>
                    </template>
                    查看视频
                  </a-button>
                  <a-button type="text" :size="size" status="danger">
                    <template #icon>
                      <i class="rtdp deletebtn"></i>
                    </template>
                    删 除
                  </a-button>
                </template>
              </a-table-column>
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