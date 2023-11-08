<script setup>
import { ref, computed, watch } from 'vue';
import { useGameStore } from '../stores/game';
const props = defineProps({
  title: String,
  url: String,
});

const game = useGameStore();

const image = computed(() => props.url);
const selected = ref(false);
const cleared = ref(false);

// Selects this card
function flipCard() {
  selected.value = !selected.value;
  game.selectCard(props.title);
}

// Checks if this card is matched by looking at the score change
watch(
  () => game.totalScore,
  (newScore, oldScore) => {
    if (selected.value === true && cleared.value === false) {
      if (newScore > oldScore) {
        cleared.value = true;
      } else {
        // Timeout for the animation to finish
        setTimeout(() => {
          selected.value = false;
        }, 700);
      }
    }
  }
);
</script>

<template>
  <div
    class="game-card-container w-24 h-28 sm:w-40 sm:h-40 lg:w-40 lg:h-48 xl:w-40 xl:h-60 aria-hidden:pointer-events-none aria-hidden:cursor-not-allowed aria-selected:pointer-events-none aria-selected:cursor-not-allowed rounded-lg"
    @click="flipCard"
    :aria-hidden="cleared"
    :aria-selected="selected"
  >
    <div
      class="game-card h-full w-full relative cursor-pointer hover:scale-105 transition duration-700 rounded-lg aria-selected:scale-105"
      :aria-selected="selected"
    >
      <div
        class="game-card_back h-full w-full rounded-lg absolute bg-cardback dark:bg-cardback-dark shadow-sm shadow-slate-600"
      ></div>
      <div
        class="game-card_front h-full w-full rounded-lg absolute object-cover bg-cover bg-center shadow-sm shadow-slate-600"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.game-card-container {
  perspective: 18rem;
}
.game-card[aria-selected='true'] {
  transform: rotateY(180deg) scale(1.05);
}
.game-card {
  transform-style: preserve-3d;
}
.game-card_back,
.game-card_front {
  backface-visibility: hidden;
}
.game-card_front {
  background-image: v-bind("'url(' + image + ')'");
  transform: rotateY(180deg);
}
</style>
