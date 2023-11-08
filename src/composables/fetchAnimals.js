const animalEndpoint = import.meta.env.VITE_ANIMAL_ENDPOINT;

export const fetchAnimals = async function () {
  const response = await fetch(animalEndpoint);
  if (response.ok) return response.json();
  else return Promise.reject(response);
}
