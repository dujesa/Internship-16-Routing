import { readPokemonDetails } from "../../data";
import MonsterDetails from "./../Layouts/MonsterDetails";

const PokemonDetails = () => {
  return (
    <MonsterDetails
      readMonsterDetails={readPokemonDetails}
      resource="pokemon"
    />
  );
};

export default PokemonDetails;
