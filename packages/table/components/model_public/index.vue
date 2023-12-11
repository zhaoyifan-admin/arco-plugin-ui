<script setup lang="ts">
import {reactive} from "vue";

interface Props {
  size?: 'mini' | 'small' | 'medium' | 'large',
  options?: TableOptions,
}

withDefaults(defineProps<Props>(), {
  size: 'small',
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
const modelForm: { [key: string]: any } = reactive({})

</script>

<template>
  <a-form ref="formRef" :model="modelForm" :size="size" auto-label-width>
    <a-row :gutter="16">
      <template v-for="(colitem, index) in options.columns" :key="index">
        <a-col :span="colitem.span || options.searchSpan || 6">
          <a-form-item :field="colitem.dataIndex" :label="colitem.title"
                       :rules="colitem.rules" :validate-trigger="['change','input']" feedback>
            <template #label>
              <slot :name="colitem.dataIndex + 'Label'"></slot>
            </template>
            <a-input
                v-if="colitem.type === 'input' || colitem.type === undefined"
                v-model="modelForm[colitem.dataIndex]"
                :placeholder="
                  '请输入 ' +
                  `${colitem.title}`
                "
                allow-clear
            />
            <!--              级联选择 Cascader-->
            <a-cascader
                v-else-if="colitem.type === 'cascader'"
                v-model="modelForm[colitem.dataIndex]"
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
    </a-row>
  </a-form>
</template>

<style scoped lang="less">

</style>