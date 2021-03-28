import { createPokemon } from "../../data";
import MonsterForm from "./../Layouts/MonsterForm";

const PokemonAdd = () => {
  const handleCreatePokemon = (monster) => {
    createPokemon(monster);
  };

  return <MonsterForm onSubmit={handleCreatePokemon} />;
};

export default PokemonAdd;
