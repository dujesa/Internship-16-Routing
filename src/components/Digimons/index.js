import { Route, Switch } from "react-router";
import DigimonAdd from "./DigimonAdd";
import DigimonDetails from "./DigimonDetails";
import DigimonEdit from "./DigimonEdit";
import DigimonList from "./DigimonList";

const Digimons = () => {
  return (
    <Switch>
      <Route exact path="/digimons">
        <DigimonList />
      </Route>
      <Route exact path="/digimons/add">
        <DigimonAdd />
      </Route>
      <Route exact path="/digimons/:id">
        <DigimonDetails />
      </Route>
      <Route exact path="/digimons/edit/:id">
        <DigimonEdit />
      </Route>
    </Switch>
  );
};

export default Digimons;
