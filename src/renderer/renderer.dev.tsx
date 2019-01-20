import React from "react";
import { render } from "react-dom";
import App from "./App.dev";
import Store from "./redux/store/store.dev";
import Root from "./view/root/Root";

const store = Store.configureStore();

render(
  <Root store={store} history={Store.history}>
    <App></App>
  </Root>,
  document.getElementById("app"),
);

// react Ignored an update to unaccepted module
if ((module as any).hot) {
  (module as any).hot.accept("./view/root/Root", () => {
    const RootHot = require("./view/root/Root").default;

    render(
      <RootHot store={store} history={Store.history}>
        <App></App>
      </RootHot>,
      document.getElementById("app"),
    );
  });
}
