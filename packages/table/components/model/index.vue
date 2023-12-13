<script setup lang="ts">
import {defineAsyncComponent, ref} from "vue";

const modelPublic = defineAsyncComponent(
    () => import('../model_public/index.vue')
);

const emit = defineEmits(['handleSave','handleUpdate'])

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
const Loading = ref(false);
const modelType = ref("");
const handleOpenModel = (type: string, params: object) => {
  modelType.value = type;
  if (type === 'add') {
    Title.value = '新增';
  }
  if (type === 'edit') {
    Title.value = '编辑';
    modalRef.value.deepClone(params);
  }
  if (type === 'see') {
    Title.value = '查看';
    modalRef.value.deepClone(params);
  }
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
  modalRef.value.done();
}
const handleClick = (type: string) => {
  Loading.value = true;
  if (type === 'add') {
    modalRef.value.handleSave();
  }
  if (type === 'edit') {
    modalRef.value.handleSave();
  }
}
const handleSave = (modelForm: object, loading: any, done: any) => {
  emit('handleSave', modelForm, loading, done)
}
const handleUpdate = (modelForm: object, loading: any, done: any) => {
  emit('handleUpdate', modelForm, loading, done)
}
defineExpose({
  handleOpenModel
});
</script>

<template>
  <a-modal v-model:visible="visible" :align-center="false" :footer="modelType !== 'see'"
           :mask-closable="options.maskClosable" top="20vh"
           width="65%" @cancel="handleCancel" @ok="handleOk">
    <template #title>
      {{ Title }}
    </template>
    <component :is="modelPublic" ref="modalRef" v-model:Loading="Loading" v-model:Visible="visible"
               :modelType="modelType"
               :options="options"
               :size="size"
               @handle-save="handleSave" @handle-update="handleUpdate">
      <template v-for="(colitem, index) in options.columns" :key="index" #[colitem.dataIndex+`Label`]>
        <slot :name="colitem.dataIndex + 'Label'"></slot>
      </template>
    </component>
    <template #footer>
      <a-button :size="size" @click="handleCancel">取消</a-button>
      <a-button type="primary" v-if="modelType === 'add'" :size="size" :loading="Loading" @click="handleClick('add')">
        <template #icon>
          <i class="rtdp xinzeng"></i>
        </template>
        保存
      </a-button>
      <a-button type="primary" v-if="modelType === 'edit'" :size="size" :loading="Loading" @click="handleClick('edit')">
        <template #icon>
          <i class="rtdp caozuo-bianji"></i>
        </template>
        修改
      </a-button>
    </template>
  </a-modal>
</template>

<style scoped lang="less">

</style>