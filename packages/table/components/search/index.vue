<script lang="ts" setup>
import {onMounted, defineAsyncComponent, ref, computed} from "vue";
import type {TableOptions} from "../index";
import i18n from "../../../utils/local";

const searchPublic = defineAsyncComponent(
    () => import('../search_public/index.vue')
);
const emit = defineEmits(['searchChange', 'searchReset', 'update:searchForm'])

interface Props {
  data?: any[],
  disabled?: boolean,
  loading?: boolean,
  searchForm?: object,
  size?: 'mini' | 'small' | 'medium' | 'large',
  tip?: string,
  searchTabs?: boolean,
  options?: TableOptions,
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  disabled: false,
  loading: false,
  size: 'small',
  tip: '加载中...',
  searchForm: () => {
    return {}
  },
  searchTabs: false,
  options: () => {
    return {
      loading: false,
      index: false,
      indexWidth: 60,
      columns: [],
      menuWidth: 245,
      search: false,
      searchSpan: 6,
      searchBtnSpan: 6,
    }
  },
})
const disabledForm = ref(false);
const Loading = ref(false);
const showSearch = ref(false);
const searchPublicRef = ref<any>();
const searchForm: { [key: string]: any } = computed({
  get() {
    return props.searchForm
  },
  set(val: object) {
    emit('update:searchForm', val)
  }
})
onMounted(() => {
  if (props.options.columns) {
    const index = props.options.columns.findIndex((item: any) => item.search === true);
    showSearch.value = index !== -1;
  }
})
const done = () => {
  disabledForm.value = false;
  Loading.value = false;
}, searchChange = () => {
  Loading.value = true;
  disabledForm.value = true;
  emit('searchChange', searchForm.value, done);
}, searchReset = () => {
  props.options.columns?.forEach((item) => {
    item.defaultValue = undefined;
  });
  searchPublicRef.value.searchReset();
  emit('searchReset', {});
};
defineExpose({
  done
});
</script>

<template>
  <div class="arco-compontent-page-tab-search-form">
    <a-form v-if="showSearch" :disabled="disabled" :model="searchForm" :size="size" auto-label-width>
      <a-row :gutter="16">
        <component :is="searchPublic" ref="searchPublicRef" v-model:searchForm="searchForm" :data="data"
                   :disabledForm="disabledForm" :options="options"
                   :size="size">
          <template v-for="(colitem, index) in options.columns" :key="index" #[colitem.dataIndex+`SearchLabel`]>
            <slot :name="colitem.dataIndex + 'SearchLabel'"></slot>
          </template>
        </component>
        <a-col :span="options.searchBtnSpan || 6" class="t-c">
          <a-space>
            <a-button :loading="Loading" :size="size" type="primary" @click="searchChange">
              <template #icon>
                <i class="rtdp sousuo"></i>
              </template>
              <slot name="searchBtn">
                {{ i18n.global.t('arcosearch.searchBtn') }}
              </slot>
            </a-button>
            <a-button :size="size" @click="searchReset">
              <template #icon>
                <i class="rtdp refresh"></i>
              </template>
              <slot name="resetBtn">
                {{ i18n.global.t('arcosearch.resetBtn') }}
              </slot>
            </a-button>
            <a-button :size="size" status="warning" type="outline">
              <template #icon>
                <i class="rtdp shouqi"></i>
              </template>
              <slot name="retractBtn">
                {{ i18n.global.t('arcosearch.retractBtn') }}
              </slot>
            </a-button>
            <a-button :size="size" status="warning" type="outline">
              <template #icon>
                <i class="rtdp zhankai"></i>
              </template>
              <slot name="expandBtn">
                {{ i18n.global.t('arcosearch.expandBtn') }}
              </slot>
            </a-button>
          </a-space>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<style lang="less" scoped>
@import '../../styles/index';
</style>