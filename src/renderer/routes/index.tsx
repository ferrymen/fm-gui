import React from "react";
import ViewCounter from "../view/counter/Counter";
// import ViewIndex from "../view/index/Index";
import { Switch, Route } from "react-router-dom";
import ViewRoot from "../view/root/Root";
import ViewSetting from "../view/setting/Setting";

/**
 * Order required
 * "/counter"|"/"
 */
export default () => (
  <Switch>
    <Route path="/counter" component={ViewCounter} />
    {/* <Route path="/" component={ViewIndex} /> */}
    <Route path="/setting" component={ViewSetting} />
    <Route path="/" component={ViewRoot} />
  </Switch>
);
