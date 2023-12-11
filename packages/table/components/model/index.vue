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
const formRef = ref(null);
const visible = ref(false);
const modelForm = ref({});

const handleOpenModel = () => {
  visible.value = true;
};
const handleOk = () => {
  formRef.value.validate();
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
}

defineExpose({
  handleOpenModel
});
</script>

<template>
  <a-modal v-model:visible="visible" :align-center="false" :mask-closable="options.maskClosable" top="20vh"
           width="65%" @cancel="handleCancel" @ok="handleOk">
    <template #title>
      Title
    </template>
    <component :is="modelPublic" ref="formRef" :size="size" :options="options">
      <template v-for="(colitem, index) in options.columns" :key="index" #[colitem.dataIndex+`Label`]>
        <slot :name="colitem.dataIndex + 'Label'"></slot>
      </template>
    </component>
  </a-modal>
</template>

<style scoped lang="less">

</style>