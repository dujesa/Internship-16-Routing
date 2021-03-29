import { useState } from "react";
import { Redirect } from "react-router";

import { createPokemon } from "../../data";
import MonsterForm from "./../Layouts/MonsterForm";

const PokemonAdd = () => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCreatePokemon = (monster) => {
    createPokemon(monster).then(() => setIsCreated(true));
  };

  if (isCreated) {
    return <Redirect to="/pokemons" />;
  }

  return <MonsterForm onSubmit={handleCreatePokemon} />;
};

export default PokemonAdd;
