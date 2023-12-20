<script setup lang="ts">
import {reactive, ref} from "vue";
import type {TableOptions} from "../index";

const emit = defineEmits(['handleSave', 'handleUpdate', 'update:Loading', 'update:Visible'])

interface Props {
  modelType?: string,
  Visible?: boolean,
  Loading?: boolean,
  options?: TableOptions,
  size?: 'mini' | 'small' | 'medium' | 'large',
}

withDefaults(defineProps<Props>(), {
  modelType: "",
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
let modelForm: { [key: string]: any } = reactive({})
const deepClone = (params: object) => {
  Object.assign(modelForm, params)
}
const done = () => {
  emit('update:Loading', false);
  emit('update:Visible', false);
  formRef.value.resetFields();
  formRef.value.clearValidate();
  modelForm = reactive({});
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
      emit('handleSave', modelForm, loading, done)
    }
  })
}
const handleUpdate = () => {
  disabled.value = true;
  formRef.value.validate((Promise: object) => {
    if (Promise) {
      loading();
      return false;
    } else {
      emit('handleUpdate', modelForm, loading, done)
    }
  })
}
defineExpose({
  done,
  deepClone,
  handleSave,
  handleUpdate
});
</script>

<template>
  <a-form ref="formRef" :model="modelForm" :size="size" :disabled="disabled || modelType === 'see'" auto-label-width>
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
            <!--            数字输入框 InputNumber-->
            <a-input-number v-else-if="colitem.type === 'number'" v-model="modelForm[colitem.dataIndex]"/>
            <!--            单选框 Radio-->
            <a-radio-group v-else-if="colitem.type === 'radio'" v-model="modelForm[colitem.dataIndex]"
                           :options="colitem.options"/>
            <!--            复选框 Checkbox-->
            <a-checkbox-group v-else-if="colitem.type === 'checkbox'" v-model="modelForm[colitem.dataIndex]"
                              :options="colitem.options"/>
            <!--            复选框 Checkbox-->
            <!--            <a-checkbox-group v-else-if="colitem.type === 'checkbox'" v-model="modelForm[colitem.dataIndex]">
                          <a-grid :cols="3" :colGap="24" :rowGap="16">
                            <template v-for="(item,index) in colitem.dicData" :key="index">
                              <a-grid-item>
                                <a-checkbox :value="item.value" :disabled="item.disabled">{{ item.label }}</a-checkbox>
                              </a-grid-item>
                            </template>
                          </a-grid>
                        </a-checkbox-group>-->
            <!--            开关 Switch-->
            <a-switch v-else-if="colitem.type === 'switch'" v-model="modelForm[colitem.dataIndex]"/>
            <!--            进度条 Progress-->
            <a-progress v-else-if="colitem.type === 'progress'" :percent="modelForm[colitem.dataIndex]"/>
            <!--            滑动输入条 Slider-->
            <a-slider v-else-if="colitem.type === 'slider'" :v-model="modelForm[colitem.dataIndex]"/>
            <!--            评分 Rate-->
            <a-rate v-else-if="colitem.type === 'rate'" :v-model="modelForm[colitem.dataIndex]" allow-half/>
            <!--              选择器 Select-->
            <a-select v-else-if="colitem.type === 'select'" v-model="modelForm[colitem.dataIndex]">
              <template v-for="(item,index) in colitem.dicData" :key="index">
                <a-option :label="item.label" :value="item.value"></a-option>
              </template>
            </a-select>
            <!--            标签输入框 InputTag-->
            <a-input-tag v-else-if="colitem.type === 'inputTag'" v-model="modelForm[colitem.dataIndex]"
                         allow-clear/>
            <!--            头像 Avatar-->
            <a-avatar v-else-if="colitem.type === 'avatar'" :imageUrl="modelForm[colitem.dataIndex]"></a-avatar>
            <!--              日期选择器 DatePicker-->
            <a-date-picker v-else-if="colitem.type === 'date'" v-model="modelForm[colitem.dataIndex]"
                           :format="colitem.format" :show-time="colitem.showTime"
                           :time-picker-props="colitem.timePickerProps"/>
            <a-month-picker v-else-if="colitem.type === 'month'" v-model="modelForm[colitem.dataIndex]"/>
            <a-year-picker v-else-if="colitem.type === 'year'" v-model="modelForm[colitem.dataIndex]"/>
            <a-quarter-picker v-else-if="colitem.type === 'quarter'" v-model="modelForm[colitem.dataIndex]"/>
            <a-week-picker v-else-if="colitem.type === 'week'" v-model="modelForm[colitem.dataIndex]"/>
            <a-range-picker v-else-if="colitem.type === 'range'" :mode="colitem.mode"
                            v-model="modelForm[colitem.dataIndex]"/>
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
            <!--            文本域 Textarea-->
            <a-textarea v-else-if="colitem.type === 'textarea'" v-model="modelForm[colitem.dataIndex]" allow-clear/>
            <!--            数据穿梭框 Transfer-->
            <a-transfer v-else-if="colitem.type === 'transfer'" :data="colitem.data"
                        v-model="modelForm[colitem.dataIndex]"/>
            <!--            树选择 TreeSelect-->
            <a-tree-select v-else-if="colitem.type === 'treeSelect'" :data="colitem.treeData"
                           v-model="modelForm[colitem.dataIndex]"></a-tree-select>
          </a-form-item>
        </a-col>
      </template>
    </a-row>
  </a-form>
</template>

<style scoped lang="less">

</style>