<script setup>
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/solid';
import { useGameStore } from '../stores/game';
import { ref, watch } from 'vue';

const game = useGameStore();
const successChange = ref(false);
const mistakeChange = ref(false);

// Animation on success
watch(
  () => game.success,
  () => {
    successChange.value = true;
    setTimeout(() => {
      successChange.value = false;
    }, 500);
  }
);

// Animation on mistake
watch(
  () => game.mistake,
  () => {
    mistakeChange.value = true;
    setTimeout(() => {
      mistakeChange.value = false;
    }, 500);
  }
);
</script>

<template>
  <div
    class="score-board max-w-md mx-auto flex align-middle flex-row justify-around font-score text-5xl gap-4 text-main dark:text-main-dark"
  >
    <div class="score-board_metric-success flex flex-row align-middle data-[change=true]:animate-quick-bounce" :data-change="successChange">
      <CheckIcon class="w-14 drop-shadow-md text-green-600" />{{ game.success }}
    </div>
    <div class="score-board_metric-mistake flex flex-row align-middle data-[change=true]:animate-quick-bounce" :data-change="mistakeChange">
      {{ game.mistake }}<XMarkIcon class="w-14 drop-shadow-md text-red-600" />
    </div>
  </div>
</template>

<style scoped></style>
