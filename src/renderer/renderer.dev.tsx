import React from "react";
import { render } from "react-dom";
import App from "./App.dev";
import Root from "./view/root/Root";
import Store from "./redux/store/store.dev";

const store = Store.configureStore();

render(
  <Root store={store} history={Store.history}>
    <App></App>
  </Root>,
  document.getElementById("app"),
);

// react Ignored an update to unaccepted module
if (module.hot) {
  module.hot.accept("./view/root/Root", () => {
    const RootHot = require("./view/root/Root").default;

    render(
      <RootHot store={store} history={Store.history}>
        <App></App>
      </RootHot>,
      document.getElementById("app"),
    );
  })
}