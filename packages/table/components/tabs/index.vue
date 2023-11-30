<script setup lang="ts">
import {computed} from "vue";

const emit = defineEmits(['update:searchForm'])
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
  searchForm: ()=>{
    return {}
  },
  searchTabs: false,
  options: () => {
    return {index: false}
  },
})
const Form: { [key: string]: any } = computed({
  get() {
    return props.searchForm
  },
  set(val) {
    emit('update:searchForm', val)
  }
})
const onSearch = () => {

};
const onReset = () => {

};
</script>

<template>
  <a-tabs position="left" :size="size" style="height: 100%">
    <a-tab-pane key="1">
      <template #title>
        <i class="rtdp sousuo"></i>
        查询
      </template>
      <div class="arco-compontent-page-tab-search-box d-flex flex-column">
        <div class="arco-compontent-page-tab-search-form">
          <a-form
              :model="Form"
              :size="size"
              layout="vertical"
              :disabled="disabled"
          >
            <template v-for="(colitem, index) in options.columns" :key="index">
              <a-form-item v-if="colitem.search" :field="colitem.title" :label="colitem.title">
                <a-input
                    v-model="Form[colitem.dataIndex]"
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
</template>

<style scoped lang="less">
@import '../../styles/index';
</style>