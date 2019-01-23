import React from "react";
import { Route, Switch } from "react-router";
import ViewCounter from "../view/counter/Counter";
import ViewHome from "../view/home/Home";

/**
 * Order required
 * "/counter"|"/"
 */
export default () => (
  <Switch>
    <Route path="/counter" component={ViewCounter} />
    <Route path="/" component={ViewHome} />
  </Switch>
);
