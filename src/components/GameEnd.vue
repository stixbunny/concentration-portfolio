<script setup>
import { useStorage } from '@vueuse/core';
import { useGameStore } from '../stores/game';
import ModalDialog from './ModalDialog.vue';

const user = useStorage('user-name', '', localStorage);
const game = useGameStore();

const emit = defineEmits(['newGame']);
</script>

<template>
  <ModalDialog :condition="game.status">
    <form @submit.prevent="emit('newGame')" class="game-end p-4 flex flex-col gap-4 text-black dark:text-white">
      <h2 class="game-end_title m-0 text-center font-bold">
        ¡Felicitaciones {{ user }}, tu puntaje total fue de {{ game.totalScore }}!
      </h2>
      <p class="game-end_detail m-0 text-center">
        Obtuviste {{ game.success }} aciertos y {{ game.mistake }} errores.
      </p>
      <button
        type="submit"
        class="game-end_submit rounded shadow bg-primary hover:bg-primary-hover dark:bg-primary-dark dark:hover:bg-primary-hover-dark p-2 font-bold text-white focus:outline-none focus:shadow-outline"
      >
        Jugar de nuevo
      </button>
    </form>
  </ModalDialog>
</template>

<style scoped>
.game-end_title {
  text-wrap: balance;
}
</style>
