import { updatePokemon } from "../../data";
import MonsterForm from "../Layouts/MonsterForm";

const PokemonEdit = () => {
  const pokemon = { name: "Bulbasor", description: "Nan" };

  const handleUpdatePokemon = (pokemon) => {
    updatePokemon(pokemon);
  };

  return <MonsterForm monster={pokemon} onSubmit={handleUpdatePokemon} />;
};

export default PokemonEdit;
