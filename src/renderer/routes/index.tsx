import React from "react";
// import ViewIndex from "../view/index/Index";
import { Switch, Route, Redirect } from "react-router-dom";
import { ViewProject, ViewProjectEmpty } from "../view/project";
import { ViewSetting } from "../view/setting";
import { IRootState } from "../reducer";
import { ViewCounter } from "../view/counter/Counter";

/**
 * Order required
 * "/counter"|"/"
 */
export default (props: any) => {
  const state: IRootState = props.store.getState();

  return (
    <Switch>
      <Route path="/project" component={ViewProject} />
      <Route path="/empty" component={ViewProjectEmpty} />
      <Route path="/counter" component={ViewCounter} />
      {/* <Route path="/" component={ViewIndex} /> */}
      <Route path="/setting" component={ViewSetting} />
      {/* <Redirect from="/" to="/project" /> */}
      <Route path="/" render={() => {
        return <Redirect to="/project" />;
        // if (state.projects.length > 0) {
        //   return <Redirect to="/project" />;
        // } else {
        //   return <Redirect to="/empty" />;
        // }
      }} />
    </Switch>
  )
};
