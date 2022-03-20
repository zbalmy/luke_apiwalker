import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderForm from "./components/HeaderForm";
import People from "./views/People";
import Planets from "./views/Planets";

function App() {
  return (
    <BrowserRouter>
      <HeaderForm />
      <Switch>
        <Route path="/planets/:id">
          <Planets />
        </Route>
        <Route path="/people/:id">
          <People />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
