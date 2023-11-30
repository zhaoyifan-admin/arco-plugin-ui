<script setup lang="ts">
import {computed, onMounted, ref} from "vue";

const emit = defineEmits(['searchChange', 'update:searchForm'])

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
    return {index: false}
  },
})
const disabledForm = ref(false);
const Form: { [key: string]: any } = computed({
  get() {
    return props.searchForm
  },
  set(val) {
    emit('update:searchForm', val)
  }
})
const showSearch = ref(false);
onMounted(() => {
  if(props.options.columns) {
    const index = props.options.columns.findIndex((item) => item.search === true);
    showSearch.value = index !== -1;
  }
})
const done = () =>{
  disabledForm.value = false;
}
const onSearch = () => {
  disabledForm.value = true;
  emit('searchChange', Form.value, done)
};
const onReset = () => {

};
</script>

<template>
  <div class="arco-compontent-page-tab-search-form">
    <a-form v-if="showSearch" :model="Form" :size="size" :disabled="disabled">
      <a-row :gutter="16">
        <template v-for="(colitem, index) in options.columns" :key="index">
          <a-col v-if="colitem.search" :span="colitem.span || 6">
            <a-form-item :field="colitem.title" :label="colitem.title">
              <a-input
                  v-if="colitem.type === 'input' || colitem.type === undefined"
                  v-model="Form[colitem.dataIndex]"
                  :placeholder="
                  '请输入 ' +
                  `${colitem.title}`
                "
                  :disabled="disabledForm"
                  allow-clear
              />
              <!--              级联选择 Cascader-->
              <a-cascader
                  v-else-if="colitem.type === 'cascader'"
                  v-model="Form[colitem.dataIndex]"
                  :options="colitem.options"
                  :placeholder="
                  '请选择 ' +
                  `${colitem.title}`
                "
                  allow-clear
              />
              <!--              日期选择器 DatePicker-->
              <a-date-picker v-else-if="colitem.type === 'date'"/>
              <a-month-picker v-else-if="colitem.type === 'month'"/>
              <a-year-picker v-else-if="colitem.type === 'year'"/>
              <a-quarter-picker v-else-if="colitem.type === 'quarter'"/>
              <a-week-picker v-else-if="colitem.type === 'week'"/>
            </a-form-item>
          </a-col>
        </template>
        <a-col :span="24" class="t-c">
          <a-space>
            <a-button type="primary" :size="size" @click="onSearch">
              <template #icon>
                <i class="rtdp sousuo"></i>
              </template>
              查询
            </a-button>
            <a-button :size="size" @click="onReset">
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