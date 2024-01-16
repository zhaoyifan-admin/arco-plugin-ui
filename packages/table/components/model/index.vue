<script lang="ts" setup>
import {defineAsyncComponent, ref} from "vue";
import type {TableOptions} from "../index";
import i18n from "../../../utils/local";

const modelPublic = defineAsyncComponent(
    () => import('../model_public/index.vue')
);

const emit = defineEmits(['handleSave', 'handleUpdate'])

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
const modalRef = ref<any>(null), visible = ref(false), Title = ref(""), Loading = ref(false), modelType = ref(""),
    handleOpenModel = (type: string, params: object) => {
      modelType.value = type;
      if (type === 'add') {
        Title.value = i18n.global.t('modal.addTitle');
      }
      if (type === 'edit') {
        Title.value = i18n.global.t('modal.editTitle');
        modalRef.value.deepClone(params);
      }
      if (type === 'see') {
        Title.value = i18n.global.t('modal.viewTitle');
        modalRef.value.deepClone(params);
      }
      visible.value = true;
    }, handleOk = () => {
      visible.value = false;
    }, handleCancel = () => {
      visible.value = false;
      modalRef.value.done();
    }, handleClick = (type: string) => {
      Loading.value = true;
      if (type === 'add') {
        modalRef.value.handleSave();
      }
      if (type === 'edit') {
        modalRef.value.handleUpdate();
      }
    }, handleSave = (modelForm: object, loading: any, done: any) => {
      emit('handleSave', modelForm, loading, done)
    }, handleUpdate = (modelForm: object, loading: any, done: any) => {
      emit('handleUpdate', modelForm, loading, done)
    };
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
      <a-space>
        <a-button :size="size" @click="handleCancel">
          {{ i18n.global.t('arcomodals.cancelBtn') }}
        </a-button>
        <a-button v-if="modelType === 'add'" :loading="Loading" :size="size" type="primary" @click="handleClick('add')">
          <template #icon>
            <i class="rtdp xinzeng"></i>
          </template>
          {{ i18n.global.t('arcomodals.saveBtn') }}
        </a-button>
        <a-button v-if="modelType === 'edit'" :loading="Loading" :size="size" type="primary"
                  @click="handleClick('edit')">
          <template #icon>
            <i class="rtdp caozuo-bianji"></i>
          </template>
          {{ i18n.global.t('arcomodals.updateBtn') }}
        </a-button>
      </a-space>
    </template>
  </a-modal>
</template>

<style lang="less" scoped>

</style>