import { fetchAnimals } from './fetchAnimals';

export const useAnimals = async function () {
  const response = await fetchAnimals();
  // receives a json object
  if (!response.status) {
    const animals = [];
    response.entries.forEach((entry) => {
      animals.push({
        name: entry.fields.image.title,
        url: entry.fields.image.url,
      });
    });
    return animals;
  }
  // receives a rejected promise
  else {
    console.log(response.error());
    return null;
  }
};
