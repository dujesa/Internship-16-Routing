import MonsterList from "./../Layouts/MonsterList";

const PokemonList = () => {
  const pokemons = [
    { id: 1, name: "Bulbasor", description: "Nan" },
    { id: 2, name: "Pikachu", description: "Nan2" },
    { id: 3, name: "Primploop", description: "Nan3" },
    { id: 4, name: "Venosour", description: "Nan4" },
  ];

  return (
      <MonsterList monsters={pokemons} />
  );
};

export default PokemonList;
