<script setup>
import ModalTransition from './ModalTransition.vue';

const props = defineProps({
  condition: Boolean,
});
</script>

<template>
  <ModalTransition>
    <dialog
      open
      v-if="props.condition"
      class="modal-dialog max-w-sm w-4/5 z-50 rounded shadow-sm shadow-slate-600 p-0 m-0 overflow-hidden bg-background dark:bg-background-dark mx-auto font-dialog border"
    >
      <slot></slot>
    </dialog>
  </ModalTransition>
</template>
