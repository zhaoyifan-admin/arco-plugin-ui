<script setup lang="ts">
import {ref} from "vue";

interface Props {
  data?: any[],
  disabled: boolean,
  loading?: boolean,
  size?: 'mini' | 'small' | 'medium' | 'large',
  tip?: string,
  searchTabs?: boolean,
  options?: TableOptions,
}

withDefaults(defineProps<Props>(), {
  data: () => [],
  disabled: false,
  loading: false,
  size: 'small',
  tip: '加载中...',
  searchTabs: false,
  options: () => {
    return {index: false}
  },
})
const searchForm = ref({});
const onSearch = () => {
  console.log(searchForm);
};
const onReset = () => {
  searchForm.value = {};
};
</script>

<template>
  <a-tabs v-if="searchTabs" position="left" :size="size" style="height: 100%">
    <a-tab-pane key="1">
      <template #title>
        <i class="rtdp sousuo"></i>
        查询
      </template>
      <div class="arco-compontent-page-tab-search-box d-flex flex-column">
        <div class="arco-compontent-page-tab-search-form">
          <a-form
              :model="searchForm"
              :size="size"
              layout="vertical"
              :disabled="disabled"
          >
            <template v-for="(colitem, index) in options.columns" :key="index">
              <a-form-item :field="colitem.title" :label="colitem.title">
                <a-input
                    v-model="searchForm[colitem.title]"
                    :placeholder="
                    '请输入 ' +
                    `${colitem.title}`
                  "
                    allow-clear
                />
              </a-form-item>
            </template>
          </a-form>
        </div>
        <a-divider :margin="10"/>
        <div class="arco-compontent-page-tab-search-btns">
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
        </div>
      </div>
    </a-tab-pane>
    <a-tab-pane key="2" title="分类">
      <a-tree v-if="options.columns && options.columns?.length>0" :data="options.columns"/>
      <a-empty v-else/>
    </a-tab-pane>
    <a-tab-pane key="3" title="其他"> Content of Tab Panel 3</a-tab-pane>
  </a-tabs>
  <div v-else class="arco-compontent-page-tab-search-form">
    <a-form :model="searchForm" :size="size" :disabled="disabled">
      <a-row :gutter="16">
        <template v-for="(colitem, index) in options.columns" :key="index">
          <a-col :span="colitem.span || 6">
            <a-form-item :field="colitem.title" :label="colitem.title">
              <a-input
                  v-if="colitem.type === 'input' || colitem.type === undefined"
                  v-model="searchForm[colitem.title]"
                  :placeholder="
                  '请输入 ' +
                  `${colitem.title}`
                "
                  allow-clear
              />
              <!--              级联选择 Cascader-->
              <a-cascader
                  v-else-if="colitem.type === 'cascader'"
                  v-model="searchForm[colitem.title]"
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

</style>