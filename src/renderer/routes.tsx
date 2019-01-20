import React from "react";
import { Route, Switch } from "react-router";
// import PageCounter from "./redux/connecter/counter";
import ViewCounter from "./view/counter/Counter";
import ViewHome from "./view/home/Home";

export default () => (
  <Switch>
    <Route path="/counter" component={ViewCounter}></Route>
    <Route path="/" component={ViewHome} ></Route>
  </Switch>
);
