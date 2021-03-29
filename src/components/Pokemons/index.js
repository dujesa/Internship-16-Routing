import { Route, Switch } from "react-router";
import PokemonAdd from "./PokemonAdd";
import PokemonDelete from "./PokemonDelete";
import PokemonDetails from "./PokemonDetails";
import PokemonEdit from "./PokemonEdit";
import PokemonList from "./PokemonList";

const Pokemons = () => {
  return (
    <Switch>
      <Route exact path="/pokemons">
        <PokemonList />
      </Route>
      <Route exact path="/pokemons/add">
        <PokemonAdd />
      </Route>
      <Route exact path="/pokemons/:id">
        <PokemonDetails />
      </Route>
      <Route exact path="/pokemons/edit/:id">
        <PokemonEdit />
      </Route>
      <Route exact path="/pokemons/delete/:id">
        <PokemonDelete />
      </Route>
    </Switch>
  );
};

export default Pokemons;
