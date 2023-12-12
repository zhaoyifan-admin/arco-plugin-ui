<script setup lang="ts">
import {defineAsyncComponent, ref} from "vue";

const modelPublic = defineAsyncComponent(
    () => import('../model_public/index.vue')
);

interface Props {
  disabled?: boolean,
  loading?: boolean,
  size?: 'mini' | 'small' | 'medium' | 'large',
  options?: TableOptions,
}

withDefaults(defineProps<Props>(), {
  disabled: false,
  loading: false,
  size: 'small',
  options: () => {
    return {
      maskClosable: false,
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
const modalRef = ref<any>(null);
const visible = ref(false);
const Title = ref("");

const handleOpenModel = (type: string) => {
  if (type === 'add') {
    Title.value = '新增';
  }
  if (type === 'edit') {
    Title.value = '编辑';
  }
  if (type === 'see') {
    Title.value = '查看';
  }
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
}
const handleSave = () => {
  modalRef.value.handleSave()
}

defineExpose({
  handleOpenModel
});
</script>

<template>
  <a-modal v-model:visible="visible" :align-center="false" :mask-closable="options.maskClosable" top="20vh"
           width="65%" @cancel="handleCancel" @ok="handleOk">
    <template #title>
      {{ Title }}
    </template>
    <component :is="modelPublic" ref="modalRef" :size="size" :options="options">
      <template v-for="(colitem, index) in options.columns" :key="index" #[colitem.dataIndex+`Label`]>
        <slot :name="colitem.dataIndex + 'Label'"></slot>
      </template>
    </component>
    <template #footer>
      <a-button :size="size" @click="visible = false">取消</a-button>
      <a-button type="primary" :size="size" @click="handleSave">
        <template #icon>
          <i class="rtdp xinzeng"></i>
        </template>
        保存
      </a-button>
    </template>
  </a-modal>
</template>

<style scoped lang="less">

</style>