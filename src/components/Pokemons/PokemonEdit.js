import { readPokemonDetails, updatePokemon } from "../../data";
import MonsterEdit from "../Layouts/MonsterEdit";

const PokemonEdit = () => {
  const handleUpdatePokemon = async (monster) => {
    const updatedPokemon = await updatePokemon(monster);
      return !!Object.keys(updatedPokemon).length;
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
