import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layouts/Layout";
import NotFound from "./components/NotFound";
import Pokemons from "./components/Pokemons";
import Digimons from "./components/Digimons";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
          <Route path="/digimons">
            <Digimons />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
