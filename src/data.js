export const readPokemons = () =>
  fetch("http://localhost:5000/pokemons").then((response) => response.json());

export const readPokemonDetails = (id) =>
  fetch(`http://localhost:5000/pokemons/${id}`).then((response) =>
    response.json()
  );

export const createPokemon = (pokemon) =>
  fetch("http://localhost:5000/pokemons", {
    method: "POST",
    body: JSON.stringify(pokemon),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export const updatePokemon = (pokemon) =>
  fetch(`http://localhost:5000/pokemons/${pokemon.id}`, {
    method: "PUT",
    body: JSON.stringify(pokemon),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export const deletePokemon = (id) =>
  fetch(`http://localhost:5000/pokemons/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());

export const readDigimons = () =>
  fetch("http://localhost:5000/digimons").then((response) => response.json());

export const readDigimonDetails = (id) =>
  fetch(`http://localhost:5000/digimons/${id}`).then((response) =>
    response.json()
  );

export const createDigimon = (digimon) =>
  fetch("http://localhost:5000/digimons", {
    method: "POST",
    body: JSON.stringify(digimon),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export const updateDigimon = (digimon) =>
  fetch(`http://localhost:5000/digimons/${digimon.id}`, {
    method: "PUT",
    body: JSON.stringify(digimon),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export const deleteDigimon = (id) =>
  fetch(`http://localhost:5000/digimons/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
