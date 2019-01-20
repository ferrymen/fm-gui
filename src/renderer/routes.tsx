import React from "react";
import { Route, Switch } from "react-router";
import PageCounter from "./redux/connecter/counter";
import PageHome from "./redux/connecter/home";

export default () => (
  <Switch>
    <Route path="/counter" component={PageCounter}></Route>
    <Route path="/" component={PageHome} ></Route>
  </Switch>
);
