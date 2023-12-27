<script lang="ts" setup>
import {computed, onMounted, reactive} from "vue";
import type {TableOptions} from "../index";
import request from "@/utils/request";
import {getOptions} from "../../../utils/api";

const emit = defineEmits(['update:searchForm'])

interface Props {
  disabledForm: boolean,
  data?: any[],
  searchForm?: object,
  size?: any,
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
    let newForm: any = {};
    props.options.columns?.forEach((item) => {
      if (item.defaultValue) {
        newForm[item.dataIndex] = item.defaultValue;
      }
    })
    Object.assign(props.searchForm, newForm);
    return props.searchForm
  },
  set(val: object) {
    emit('update:searchForm', val)
  }
})
const state = reactive({});
const handleUpdateForm = () => {
  // emit('update:searchForm', searchForm);
}
const searchReset = () => {
  searchForm.value = {};
};
onMounted(()=>{
  getOptions().then((res)=>{
    console.log(res)
  })
  // props.options.columns?.forEach((item:object,index:number)=>{
  //   if(item.dicUrl) {
  //     console.log(item,'searchItem')
  //   }
  // })
})

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
        <a-input v-if="colitem.type === 'input' || colitem.type === undefined"
                 v-model="searchForm[colitem.dataIndex]"
                 :default-value="colitem.defaultValue"
                 :disabled="colitem.disabled"
                 :max-length="colitem.maxLength"
                 :placeholder="'请输入 ' +`${colitem.title}`"
                 :readonly="colitem.readonly"
                 :show-word-limit="colitem.showLimit"
                 :size="size"
                 allow-clear
        />
        <!--            数字输入框 InputNumber-->
        <a-input-number v-else-if="colitem.type === 'number'"
                        v-model="searchForm[colitem.dataIndex]"
                        :default-value="colitem.defaultValue"
                        :disabled="colitem.disabled"
                        :error="colitem.error"
                        :formatter="colitem.formatter"
                        :hide-button="colitem.hideButton"
                        :max="colitem.max"
                        :min="colitem.min"
                        :mode="colitem.mode"
                        :placeholder="'请输入 ' +`${colitem.title}`"
                        :precision="colitem.precision"
                        :read-only="colitem.readonly" :size="size"
                        :step="colitem.step"
                        allow-clear/>
        <!--            单选框 Radio-->
        <a-radio-group v-else-if="colitem.type === 'radio'"
                       v-model="searchForm[colitem.dataIndex]"
                       :options="colitem.options"/>
        <!--            复选框 Checkbox-->
        <a-checkbox-group v-else-if="colitem.type === 'checkbox' && colitem.options !== undefined"
                          v-model="searchForm[colitem.dataIndex]"
                          :default-value="colitem.defaultValue"
                          :direction="colitem.direction"
                          :disabled="colitem.disabled"
                          :max="colitem.max"
                          :options="colitem.options"
                          :size="size"
                          :type="colitem.type"/>
        <!--            复选框 Checkbox-->
        <a-checkbox-group v-else-if="colitem.type === 'checkbox' && colitem.dicData !== undefined"
                          v-model="searchForm[colitem.dataIndex]">
          <a-grid :colGap="24" :cols="3" :rowGap="16">
            <template v-for="(item,index) in colitem.dicData" :key="index">
              <a-grid-item>
                <a-checkbox :disabled="item.disabled"
                            :value="item.value">
                  {{ item.label }}
                </a-checkbox>
              </a-grid-item>
            </template>
          </a-grid>
        </a-checkbox-group>
        <!--            开关 Switch-->
        <a-switch v-else-if="colitem.type === 'switch'"
                  v-model="searchForm[colitem.dataIndex]"
                  :checked-color="colitem.checkedColor"
                  :checked-text="colitem.checkedText"
                  :checked-value="colitem.checkedValue"
                  :default-checked="colitem.defaultValue"
                  :disabled="colitem.disabled"
                  :loading="colitem.loading"
                  :size="size" :type="colitem.type"
                  :unchecked-color="colitem.uncheckedColor"
                  :unchecked-text="colitem.uncheckedText"
                  :unchecked-value="colitem.uncheckedValue"/>
        <!--            进度条 Progress-->
        <a-progress v-else-if="colitem.type === 'progress'"
                    :animation="colitem.animation"
                    :color="colitem.color"
                    :percent="searchForm[colitem.dataIndex]"
                    :show-text="colitem.showText"
                    :size="size"
                    :status="colitem.status"
                    :steps="colitem.steps"
                    :stroke-width="colitem.strokeWidth"
                    :track-color="colitem.trackColor"
                    :type="colitem.type"
                    :width="colitem.width"/>
        <!--            滑动输入条 Slider-->
        <a-slider v-else-if="colitem.type === 'slider'"
                  :default-value="colitem.defaultValue"
                  :direction="colitem.direction"
                  :disabled="colitem.disabled"
                  :marks="colitem.marks"
                  :max="colitem.max"
                  :min="colitem.min"
                  :range="colitem.range"
                  :show-input="colitem.showInput"
                  :show-ticks="colitem.showTicks"
                  :show-tooltip="colitem.showTooltip"
                  :size="size"
                  :step="colitem.step"
                  :v-model="searchForm[colitem.dataIndex]"/>
        <!--            评分 Rate-->
        <a-rate v-else-if="colitem.type === 'rate'"
                :default-value="colitem.defaultValue"
                :disabled="colitem.disabled"
                :grading="colitem.grading"
                :readonly="colitem.readonly"
                :size="size"
                :v-model="searchForm[colitem.dataIndex]"
                allow-clear
                allow-half/>
        <!--              选择器 Select-->
        <a-select v-else-if="colitem.type === 'select'"
                  v-model="searchForm[colitem.dataIndex]"
                  :allow-create="colitem.allowCreate"
                  :allow-search="colitem.allowSearch"
                  :bordered="colitem.bordered"
                  :default-active-first-option="colitem.defaultActiveFirstOption"
                  :default-input-value="colitem.defaultValue"
                  :disabled="colitem.disabled"
                  :error="colitem.error"
                  :limit="colitem.limit"
                  :loading="colitem.loading"
                  :max-tag-count="colitem.maxTagCount"
                  :multiple="colitem.multiple"
                  :placeholder="'请选择 ' +`${colitem.title}`"
                  :scrollbar="colitem.scrollbar"
                  :size="size"
                  allow-clear>
          <template v-for="(item,index) in colitem.dicData" :key="index">
            <a-option :disabled="item.disabled"
                      :label="item.label"
                      :tag-props="colitem.tagProps"
                      :value="item.value"></a-option>
          </template>
        </a-select>
        <!--            标签输入框 InputTag-->
        <a-input-tag v-else-if="colitem.type === 'inputTag'"
                     v-model="searchForm[colitem.dataIndex]"
                     :default-value="colitem.defaultValue"
                     :disabled="colitem.disabled"
                     :error="colitem.error"
                     :max-tag-count="colitem.maxTagCount"
                     :placeholder="'请输入 ' +`${colitem.title}`"
                     :readonly="colitem.readonly"
                     :size="size"
                     allow-clear/>
        <!--            头像 Avatar-->
        <a-avatar v-else-if="colitem.type === 'avatar'"
                  :imageUrl="searchForm[colitem.dataIndex]"
                  :size="colitem.size">
        </a-avatar>
        <!--              日期选择器 DatePicker-->
        <a-date-picker v-else-if="colitem.type === 'date'"
                       v-model="searchForm[colitem.dataIndex]"
                       :abbreviation="colitem.abbreviation"
                       :default-picker-value="colitem.defaultPickerValue"
                       :disabled="colitem.disabled"
                       :disabled-date="colitem.disabledDate"
                       :disabled-input="colitem.disabledInput"
                       :disabled-time="colitem.disabledTime"
                       :error="colitem.error"
                       :format="colitem.format"
                       :picker-value="colitem.pickerValue"
                       :placeholder="'请选择 ' +`${colitem.title}`"
                       :position="colitem.position"
                       :readonly="colitem.readonly"
                       :shortcuts="colitem.shortcuts"
                       :shortcuts-position="colitem.shortcutsPosition"
                       :show-confirm-btn="colitem.showConfirmBtn"
                       :show-time="colitem.showTime"
                       :size="size"
                       :time-picker-props="colitem.timePickerProps"
                       :value-format="colitem.valueFormat"
                       allow-clear
                       style="width: 100%"/>
        <a-month-picker v-else-if="colitem.type === 'month'"
                        v-model="searchForm[colitem.dataIndex]"
                        :abbreviation="colitem.abbreviation"
                        :default-picker-value="colitem.defaultPickerValue"
                        :disabled="colitem.disabled"
                        :disabled-date="colitem.disabledDate"
                        :disabled-input="colitem.disabledInput"
                        :disabled-time="colitem.disabledTime"
                        :error="colitem.error"
                        :format="colitem.format"
                        :picker-value="colitem.pickerValue"
                        :placeholder="'请选择 ' +`${colitem.title}`"
                        :position="colitem.position"
                        :readonly="colitem.readonly"
                        :shortcuts="colitem.shortcuts"
                        :shortcuts-position="colitem.shortcutsPosition"
                        :show-confirm-btn="colitem.showConfirmBtn"
                        :show-time="colitem.showTime"
                        :size="size"
                        :time-picker-props="colitem.timePickerProps"
                        :value-format="colitem.valueFormat"
                        allow-clear
                        style="width: 100%"/>
        <a-year-picker v-else-if="colitem.type === 'year'"
                       v-model="searchForm[colitem.dataIndex]"
                       :abbreviation="colitem.abbreviation"
                       :default-picker-value="colitem.defaultPickerValue"
                       :disabled="colitem.disabled"
                       :disabled-date="colitem.disabledDate"
                       :disabled-input="colitem.disabledInput"
                       :disabled-time="colitem.disabledTime"
                       :error="colitem.error"
                       :format="colitem.format"
                       :picker-value="colitem.pickerValue"
                       :position="colitem.position"
                       :readonly="colitem.readonly"
                       :shortcuts="colitem.shortcuts"
                       :shortcuts-position="colitem.shortcutsPosition"
                       :show-confirm-btn="colitem.showConfirmBtn"
                       :show-time="colitem.showTime"
                       :size="size"
                       :time-picker-props="colitem.timePickerProps"
                       :value-format="colitem.valueFormat"
                       allow-clear
                       style="width: 100%"/>
        <a-quarter-picker v-else-if="colitem.type === 'quarter'"
                          v-model="searchForm[colitem.dataIndex]"
                          :abbreviation="colitem.abbreviation"
                          :default-picker-value="colitem.defaultPickerValue"
                          :disabled="colitem.disabled"
                          :disabled-date="colitem.disabledDate"
                          :disabled-input="colitem.disabledInput"
                          :disabled-time="colitem.disabledTime"
                          :error="colitem.error"
                          :format="colitem.format"
                          :picker-value="colitem.pickerValue"
                          :placeholder="'请选择 ' +`${colitem.title}`"
                          :position="colitem.position"
                          :readonly="colitem.readonly"
                          :shortcuts="colitem.shortcuts"
                          :shortcuts-position="colitem.shortcutsPosition"
                          :show-confirm-btn="colitem.showConfirmBtn"
                          :show-time="colitem.showTime"
                          :size="size"
                          :time-picker-props="colitem.timePickerProps"
                          :value-format="colitem.valueFormat"
                          allow-clear
                          style="width: 100%"/>
        <a-week-picker v-else-if="colitem.type === 'week'"
                       v-model="searchForm[colitem.dataIndex]"
                       :abbreviation="colitem.abbreviation"
                       :default-picker-value="colitem.defaultPickerValue"
                       :disabled="colitem.disabled"
                       :disabled-date="colitem.disabledDate"
                       :disabled-input="colitem.disabledInput"
                       :disabled-time="colitem.disabledTime"
                       :error="colitem.error"
                       :format="colitem.format"
                       :picker-value="colitem.pickerValue"
                       :placeholder="'请选择 ' +`${colitem.title}`"
                       :position="colitem.position"
                       :readonly="colitem.readonly"
                       :shortcuts="colitem.shortcuts"
                       :shortcuts-position="colitem.shortcutsPosition"
                       :show-confirm-btn="colitem.showConfirmBtn"
                       :show-time="colitem.showTime"
                       :size="size"
                       :time-picker-props="colitem.timePickerProps"
                       :value-format="colitem.valueFormat"
                       allow-clear
                       style="width: 100%"/>
        <a-range-picker v-else-if="colitem.type === 'range'"
                        v-model="searchForm[colitem.dataIndex]"
                        :abbreviation="colitem.abbreviation"
                        :day-start-of-week="colitem.dayStartOfWeek"
                        :default-picker-value="colitem.defaultPickerValue as (Date | string | number)[]"
                        :disabled="colitem.disabled"
                        :disabled-date="colitem.disabledDate"
                        :disabled-input="colitem.disabledInput"
                        :disabled-time="colitem.disabledTime"
                        :error="colitem.error"
                        :format="colitem.format"
                        :mode="colitem.mode"
                        :picker-value="colitem.pickerValue"
                        :position="colitem.position"
                        :readonly="colitem.readonly"
                        :shortcuts="colitem.shortcuts"
                        :shortcuts-position="colitem.shortcutsPosition"
                        :show-confirm-btn="colitem.showConfirmBtn"
                        :show-time="colitem.showTime"
                        :size="size"
                        :time-picker-props="colitem.timePickerProps"
                        :value-format="colitem.valueFormat"
                        allow-clear
                        style="width: 100%"/>
        <!--              级联选择 Cascader-->
        <a-cascader v-else-if="colitem.type === 'cascader'"
                    v-model="searchForm[colitem.dataIndex]"
                    :allow-search="colitem.allowSearch"
                    :check-strictly="colitem.checkStrictly"
                    :default-value="colitem.defaultValue"
                    :disabled="colitem.disabled"
                    :error="colitem.error"
                    :loading="colitem.loading"
                    :max-tag-count="colitem.maxTagCount"
                    :multiple="colitem.multiple"
                    :options="colitem.options"
                    :placeholder="'请选择 ' +`${colitem.title}`"
                    :size="size"
                    :value-key="colitem.valueKey"
                    allow-clear
                    style="width: 100%"/>
        <!--            文本域 Textarea-->
        <a-textarea v-else-if="colitem.type === 'textarea'"
                    v-model="searchForm[colitem.dataIndex]"
                    :auto-size="colitem.autoSize"
                    :default-value="colitem.defaultValue as string"
                    :disabled="colitem.disabled"
                    :error="colitem.error"
                    :max-length="colitem.maxLength"
                    :show-word-limit="colitem.showWordLimit"
                    :size="size"
                    allow-clear/>
        <!--            数据穿梭框 Transfer-->
        <a-transfer v-else-if="colitem.type === 'transfer'"
                    v-model="searchForm[colitem.dataIndex]"
                    :data="colitem.data"
                    :default-value="colitem.defaultValue as string[]"
                    :disabled="colitem.disabled"
                    :one-way="colitem.oneWay"
                    :show-search="colitem.showSearch"
                    :show-select-all="colitem.showSelectAll"
                    :simple="colitem.simple"
                    :size="size"
                    :title="colitem.transferTitle"/>
        <!--            树选择 TreeSelect-->
        <a-tree-select v-else-if="colitem.type === 'treeSelect'"
                       v-model="searchForm[colitem.dataIndex]"
                       :allow-search="colitem.allowSearch"
                       :border="colitem.bordered"
                       :data="colitem.treeData"
                       :default-value="colitem.defaultValue"
                       :disabled="colitem.disabled"
                       :error="colitem.error"
                       :label-in-value="colitem.labelInValue"
                       :loading="colitem.loading"
                       :max-tag-count="colitem.maxTagCount"
                       :multiple="colitem.multiple"
                       :placeholder="'请选择 ' +`${colitem.title}`"
                       :size="size"
                       :tree-check-strictly="colitem.treeCheckStrictly"
                       :tree-checkable="colitem.treeCheckable"
                       :tree-checked-strategy="colitem.treeCheckedStrategy"
                       :tree-props="colitem.treeProps"
                       :trigger-props="colitem.triggerProps"
                       allow-clear
        ></a-tree-select>
      </a-form-item>
    </a-col>
  </template>
</template>

<style lang="less" scoped>

</style>