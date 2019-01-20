import React from "react";
import { render } from "react-dom";
import App from "./App.dev";
import Root from "./view/root/Root";
import Store from "./redux/store/store.dev";

const store = Store.configureStore();

render(
  <Root store={store}>
    <App></App>
  </Root>,
  document.getElementById("app"),
);
