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
            allow-clear
        />
        <!--            数字输入框 InputNumber-->
        <a-input-number v-else-if="colitem.type === 'number'" v-model="searchForm[colitem.dataIndex]"/>
        <!--            单选框 Radio-->
        <a-radio-group v-else-if="colitem.type === 'radio'" v-model="searchForm[colitem.dataIndex]"
                       :options="colitem.options"/>
        <!--            复选框 Checkbox-->
        <a-checkbox-group v-else-if="colitem.type === 'checkbox'" v-model="searchForm[colitem.dataIndex]"
                          :options="colitem.options"/>
        <!--            复选框 Checkbox-->
        <!--            <a-checkbox-group v-else-if="colitem.type === 'checkbox'" v-model="searchForm[colitem.dataIndex]">
                      <a-grid :cols="3" :colGap="24" :rowGap="16">
                        <template v-for="(item,index) in colitem.dicData" :key="index">
                          <a-grid-item>
                            <a-checkbox :value="item.value" :disabled="item.disabled">{{ item.label }}</a-checkbox>
                          </a-grid-item>
                        </template>
                      </a-grid>
                    </a-checkbox-group>-->
        <!--            开关 Switch-->
        <a-switch v-else-if="colitem.type === 'switch'" v-model="searchForm[colitem.dataIndex]"/>
        <!--            进度条 Progress-->
        <a-progress v-else-if="colitem.type === 'progress'" :percent="searchForm[colitem.dataIndex]"/>
        <!--            滑动输入条 Slider-->
        <a-slider v-else-if="colitem.type === 'slider'" :v-model="searchForm[colitem.dataIndex]"/>
        <!--            评分 Rate-->
        <a-rate v-else-if="colitem.type === 'rate'" :v-model="searchForm[colitem.dataIndex]" allow-half/>
        <!--              选择器 Select-->
        <a-select v-else-if="colitem.type === 'select'" v-model="searchForm[colitem.dataIndex]">
          <template v-for="(item,index) in colitem.dicData" :key="index">
            <a-option :label="item.label" :value="item.value"></a-option>
          </template>
        </a-select>
        <!--            标签输入框 InputTag-->
        <a-input-tag v-else-if="colitem.type === 'inputTag'" v-model="searchForm[colitem.dataIndex]"
                     allow-clear/>
        <!--            头像 Avatar-->
        <a-avatar v-else-if="colitem.type === 'avatar'" :imageUrl="searchForm[colitem.dataIndex]"></a-avatar>
        <!--              日期选择器 DatePicker-->
        <a-date-picker v-else-if="colitem.type === 'date'" v-model="searchForm[colitem.dataIndex]"
                       :show-time="colitem.showTime" :time-picker-props="colitem.timePickerProps"
                       :format="colitem.format"/>
        <a-month-picker v-else-if="colitem.type === 'month'" v-model="searchForm[colitem.dataIndex]"/>
        <a-year-picker v-else-if="colitem.type === 'year'" v-model="searchForm[colitem.dataIndex]"/>
        <a-quarter-picker v-else-if="colitem.type === 'quarter'" v-model="searchForm[colitem.dataIndex]"/>
        <a-week-picker v-else-if="colitem.type === 'week'" v-model="searchForm[colitem.dataIndex]"/>
        <a-range-picker v-else-if="colitem.type === 'range'" :mode="colitem.mode"
                        v-model="searchForm[colitem.dataIndex]"/>
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
        <!--            文本域 Textarea-->
        <a-textarea v-else-if="colitem.type === 'textarea'" v-model="searchForm[colitem.dataIndex]" allow-clear/>
        <!--            数据穿梭框 Transfer-->
        <a-transfer v-else-if="colitem.type === 'transfer'" :data="colitem.data"
                    v-model="searchForm[colitem.dataIndex]"/>
        <!--            树选择 TreeSelect-->
        <a-tree-select v-else-if="colitem.type === 'treeSelect'" :data="colitem.treeData"
                       v-model="searchForm[colitem.dataIndex]"></a-tree-select>
      </a-form-item>
    </a-col>
  </template>
</template>

<style scoped lang="less">

</style>