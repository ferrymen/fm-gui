import React from "react";
import ViewCounter from "../view/counter/Counter";
// import ViewIndex from "../view/index/Index";
import { Switch, Route, Redirect } from "react-router-dom";
import { ViewProject } from "../view/project";
import { ViewSetting } from "../view/setting";
import { IRootState } from "../reducer";

/**
 * Order required
 * "/counter"|"/"
 */
export default (props: any) => {
  const state: IRootState = props.store.getState();

  return (
    <Switch>
      <Route path="/project" component={ViewProject} />
      <Route path="/counter" component={ViewCounter} />
      {/* <Route path="/" component={ViewIndex} /> */}
      <Route path="/setting" component={ViewSetting} />
      {/* <Redirect from="/" to="/project" /> */}
      <Route path="/" render={() => {
        if (state.projects.length > 0) {
          return <Redirect to="/project" />;
        } else {
          return <Redirect to="/project" />;
        }
      }} />
    </Switch>
  )
};
