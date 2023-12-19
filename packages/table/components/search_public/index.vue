<script setup lang="ts">
import {computed} from "vue";
import type {TableOptions} from "../index";

const emit = defineEmits(['update:searchForm'])

interface Props {
  disabledForm: boolean,
  data?: any[],
  searchForm?: object,
  size?: 'mini' | 'small' | 'medium' | 'large',
  options?: TableOptions,
}

const props = withDefaults(defineProps<Props>(), {
  disabledForm: false,
  data: () => [],
  size: 'small',
  searchForm: () => {
    return {}
  },
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
const searchForm: { [key: string]: any } = computed({
  get() {
    return props.searchForm
  },
  set(val: object) {
    emit('update:searchForm', val)
  }
})
const handleUpdateForm = () => {
  // emit('update:searchForm', searchForm);
}
const searchReset = () => {
  searchForm.value = {};
};

defineExpose({
  searchReset
});
</script>

<template>
  <template v-for="(colitem, index) in options.columns" :key="index">
    <a-col v-if="colitem.search" :span="colitem.span || options.searchSpan || 6">
      <a-form-item :field="colitem.title" :label="colitem.title" feedback>
        <template #label>
          <slot :name="colitem.dataIndex + 'SearchLabel'"></slot>
        </template>
        <a-input
            v-if="colitem.type === 'input' || colitem.type === undefined"
            v-model="searchForm[colitem.dataIndex]"
            :placeholder="
                  '请输入 ' +
                  `${colitem.title}`
                "
            :disabled="disabledForm"
            allow-clear
            @input="handleUpdateForm"
        />
        <!--              级联选择 Cascader-->
        <a-cascader
            v-else-if="colitem.type === 'cascader'"
            v-model="searchForm[colitem.dataIndex]"
            :options="colitem.options"
            :placeholder="
                  '请选择 ' +
                  `${colitem.title}`
                "
            allow-clear
        />
        <!--              日期选择器 DatePicker-->
        <a-date-picker v-else-if="colitem.type === 'date'" v-model="searchForm[colitem.dataIndex]"/>
        <a-month-picker v-else-if="colitem.type === 'month'" v-model="searchForm[colitem.dataIndex]"/>
        <a-year-picker v-else-if="colitem.type === 'year'" v-model="searchForm[colitem.dataIndex]"/>
        <a-quarter-picker v-else-if="colitem.type === 'quarter'" v-model="searchForm[colitem.dataIndex]"/>
        <a-week-picker v-else-if="colitem.type === 'week'" v-model="searchForm[colitem.dataIndex]"/>
        <!--              选择器 Select-->
        <a-select v-else-if="colitem.type === 'select'" v-model="searchForm[colitem.dataIndex]">
          <template v-for="(item,index) in colitem.dicData" :key="index">
            <a-option :label="item.label" :value="item.value"></a-option>
          </template>
        </a-select>
      </a-form-item>
    </a-col>
  </template>
</template>

<style scoped lang="less">

</style>