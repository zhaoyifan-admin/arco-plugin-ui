<script setup lang="ts">
import {reactive, ref} from "vue";

const emit = defineEmits(['hanleSave', 'update:Loading', 'update:Visible'])

interface Props {
  Visible?:boolean,
  Loading?: boolean,
  options?: TableOptions,
  size?: 'mini' | 'small' | 'medium' | 'large',
}

withDefaults(defineProps<Props>(), {
  Loading: false,
  Visible: false,
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
  size: 'small',
})
const disabled = ref(false);
const formRef = ref<any>(null);
const modelForm: { [key: string]: any } = reactive({})
const done = () => {
  emit('update:Loading', false);
  emit('update:Visible', false);
  disabled.value = false;
}
const loading = () => {
  emit('update:Loading', false);
  disabled.value = false;
}
const handleSave = () => {
  disabled.value = true;
  formRef.value.validate((Promise: object) => {
    if (Promise) {
      loading();
      return false;
    } else {
      emit('hanleSave',modelForm, loading, done)
    }
  })
}
defineExpose({
  handleSave
});
</script>

<template>
  <a-form ref="formRef" :model="modelForm" :size="size" :disabled="disabled" auto-label-width>
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