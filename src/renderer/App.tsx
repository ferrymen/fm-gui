import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import Routes from "./routes";

import { configureStore, history } from "./redux/store/store";

const store = configureStore();

export default () => (
  <Provider store={store}>
    <ConnectedRouter store={store} history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);
