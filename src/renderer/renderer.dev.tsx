import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import App from "./App.dev";
import Store from "./redux/store/store.dev";

const store = Store.configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter store={store} history={Store.history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app"),
);

// react Ignored an update to unaccepted module
if ((module as any).hot) {
  (module as any).hot.accept("./App.dev", () => {
    const AppHot = require("./App.dev").default;

    render(
      <Provider store={store}>
        <ConnectedRouter store={store} history={Store.history}>
          <AppHot />
        </ConnectedRouter>
      </Provider>,
      document.getElementById("app"),
    );
  });
}
