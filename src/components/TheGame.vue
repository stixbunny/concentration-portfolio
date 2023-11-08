<script setup>
import { useCardStore } from '../stores/card';
import { useGameStore } from '../stores/game';
import ScoreBoard from './ScoreBoard.vue';
import GameBoard from './GameBoard.vue';
import GameEnd from './GameEnd.vue';

const card = useCardStore();
const game = useGameStore();

await card.fillMainPool();

// Starts/Resets the game, setting up card info
const startGame = async function () {
  game.resetData();
  if (game.cards.length != 0) game.cards.length = 0;
  if (card.animals.length == 0) {
    await card.fillMainPool();
  }
  card.fillGamePool(game.numberOfCards / 2);
  game.fillCards(card.gameAnimals);
  game.status = false;
};

startGame();
</script>

<template>
  <GameEnd @new-game="startGame"/>
  <div v-if="!game.status" class="the-game container mx-auto h-dscreen flex flex-col justify-center gap-8 overflow-hidden">
    <ScoreBoard />
    <GameBoard />
  </div>
</template>

<style scoped></style>
