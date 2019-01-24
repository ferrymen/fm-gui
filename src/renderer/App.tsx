import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import Routes from "./routes";

import { configureStore, history } from "./store";
import { MuiThemeProvider } from "@material-ui/core";
import { lightblue } from "./ui/theme";

const store = configureStore();

export default () => (
  <Provider store={store}>
    <MuiThemeProvider theme={lightblue}>
      <ConnectedRouter store={store} history={history}>
        <Routes />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
);
