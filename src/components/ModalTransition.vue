<script setup></script>

<template>
  <Transition name="modal-fade" appear>
    <slot></slot>
  </Transition>
</template>

<style>
.modal-fade-enter-active {
  transition: all 0.5s ease-in;
}

.modal-fade-leave-active {
  transition: all 0.3s ease-in;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  transform: translateY(-50px);
  opacity: 0 !important;
}
</style>
