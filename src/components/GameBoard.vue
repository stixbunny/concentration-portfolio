<script setup>
import { useGameStore } from '../stores/game';
import GameCard from './GameCard.vue';

const game = useGameStore();
</script>

<template>
  <div class="game-board flex flex-wrap gap-4 justify-center isolate">
    <GameCard v-for="card in game.cards" :key="card.title" :title="card.name" :url="card.url"/>
  </div>
</template>

<style scoped></style>
