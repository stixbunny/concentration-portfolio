import { fetchAnimals } from './fetchAnimals';

export const useAnimals = async function () {
  const response = await fetchAnimals();
  console.log(response)
  // receives a json object
  if (response.status && response.status === "success") {
    const animals = [];
    response.message.forEach((entry, i) => {
      animals.push({
        name: entry.split('/breeds/')[1].split('/')[0] + `-${i}`,
        url: entry,
      });
    });
    return animals;
  }
  // receives a rejected promise
  else {
    console.log(response.error);
    return null;
  }
};
