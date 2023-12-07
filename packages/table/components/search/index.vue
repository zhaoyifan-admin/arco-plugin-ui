<script setup lang="ts">
import {onMounted, defineAsyncComponent, ref, computed} from "vue";

const publicComponents = defineAsyncComponent(
    () => import('../public_components/index.vue')
);
const emit = defineEmits(['searchChange', 'searchReset'])

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
      menuWidth: 120,
      search: false,
      searchSpan: 6,
      searchBtnSpan: 6,
    }
  },
})
const disabledForm = ref(false);
const publicComponentsRef = ref<any>();
const searchForm: { [key: string]: any } = computed({
  get() {
    return props.searchForm
  },
  set(val: object) {
    emit('update:searchForm', val)
  }
})
const showSearch = ref(false);
onMounted(() => {
  if (props.options.columns) {
    const index = props.options.columns.findIndex((item) => item.search === true);
    showSearch.value = index !== -1;
  }
})
const done = () => {
  disabledForm.value = false;
}
const searchChange = () => {
  disabledForm.value = true;
  emit('searchChange', searchForm.value, done);
};
const searchReset = () => {
  publicComponentsRef.value.searchReset();
  emit('searchReset', {});
};
defineExpose({
  done
});
</script>

<template>
  <div class="arco-compontent-page-tab-search-form">
    <a-form v-if="showSearch" :model="searchForm" :size="size" :disabled="disabled">
      <a-row :gutter="16">
        <component :is="publicComponents" ref="publicComponentsRef" :disabledForm="disabledForm" :data="data" :size="size" v-model:searchForm="searchForm"
                   :options="options"/>
        <a-col :span="options.searchBtnSpan || 6" class="t-c">
          <a-space>
            <a-button type="primary" :size="size" @click="searchChange">
              <template #icon>
                <i class="rtdp sousuo"></i>
              </template>
              查询
            </a-button>
            <a-button :size="size" @click="searchReset">
              <template #icon>
                <i class="rtdp refresh"></i>
              </template>
              重置
            </a-button>
          </a-space>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<style scoped lang="less">
@import '../../styles/index';
</style>