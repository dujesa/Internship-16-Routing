import { readPokemonDetails, updatePokemon } from "../../data";
import MonsterEdit from "../Layouts/MonsterEdit";

const PokemonEdit = () => {
  const handleUpdatePokemon = (monster) => {
    return updatePokemon(monster).then(
      (updatedPokemon) => !!Object.keys(updatedPokemon).length
    );
  };

  return (
    <MonsterEdit
      readMonsterDetails={readPokemonDetails}
      updateMonster={handleUpdatePokemon}
      redirectRoute="/pokemons"
    />
  );
};

export default PokemonEdit;
