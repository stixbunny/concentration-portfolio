import { defineStore } from 'pinia';
import { useAnimals } from '../composables/useAnimals';

export const useCardStore = defineStore('card', () => {
  const animals = [];
  const gameAnimals = [];

  async function fillMainPool() {
    if (animals.length != 0) return;
    animals.push(...(await useAnimals()));
  }

  function fillGamePool(quantity) {
    if (gameAnimals.length != 0) gameAnimals.length = 0;
    const shuffledAnimals = [...animals].sort(() => 0.5 - Math.random());
    for (const animal of shuffledAnimals.slice(0, quantity)) {
      gameAnimals.push(animal);
    }
  }

  return { animals, gameAnimals, fillMainPool, fillGamePool };
});
