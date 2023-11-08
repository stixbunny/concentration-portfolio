<script setup>
import TheGame from './components/TheGame.vue';
import NameRegister from './components/NameRegister.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';
</script>

<template>
  <NameRegister />
  <Suspense>
    <TheGame />
    <template #fallback>
      <div class="loading fixed top-[100px] left-1/2 -translate-x-1/2 flex justify-center align-middle">
        <LoadingSpinner />
        <div class="loading_text text-main dark:text-main-dark font-bold">Cargando...</div>
      </div>
    </template>
  </Suspense>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
