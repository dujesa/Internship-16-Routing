import { deletePokemon } from "../../data";
import MonsterDelete from "../Layouts/MonsterDelete";

const PokemonDelete = () => {
  return (
    <MonsterDelete deleteMonster={deletePokemon} redirectRoute="/pokemons" />
  );
};

export default PokemonDelete;
