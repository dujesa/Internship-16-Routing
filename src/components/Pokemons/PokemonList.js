import { useEffect, useState } from "react";

import { readPokemons } from "./../../data";
import MonsterList from "./../Layouts/MonsterList";
import Loading from "./../Loading";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    readPokemons().then(setPokemons);
  }, []);

  if (!pokemons) {
    return <Loading />;
  }

  return <MonsterList monsters={pokemons} resource="pokemon" />;
};

export default PokemonList;
