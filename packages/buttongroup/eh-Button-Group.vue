<script setup lang="ts">

</script>

<template>
  <div class="eh-button-group">
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
.eh-btn-group {
  display: inline-flex;
  align-items: center
}

.eh-btn-group .eh-btn-outline:not(:first-child),.eh-btn-group .eh-btn-dashed:not(:first-child) {
  margin-left: -1px
}

.eh-btn-group .eh-btn-primary:not(:last-child) {
  border-right: 1px solid rgb(var(--primary-5))
}

.eh-btn-group .eh-btn-secondary:not(:last-child) {
  border-right: 1px solid var(--color-secondary-hover)
}

.eh-btn-group .eh-btn-status-warning:not(:last-child) {
  border-right: 1px solid rgb(var(--warning-5))
}

.eh-btn-group .eh-btn-status-danger:not(:last-child) {
  border-right: 1px solid rgb(var(--danger-5))
}

.eh-btn-group .eh-btn-status-success:not(:last-child) {
  border-right: 1px solid rgb(var(--success-5))
}

.eh-btn-group .eh-btn-outline:hover,.eh-btn-group .eh-btn-dashed:hover,.eh-btn-group .eh-btn-outline:active,.eh-btn-group .eh-btn-dashed:active {
  z-index: 2
}

.eh-btn-group .eh-btn:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0
}

.eh-btn-group .eh-btn:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0
}

.eh-btn-group .eh-btn:not(:first-child):not(:last-child) {
  border-radius: 0
}
</style>