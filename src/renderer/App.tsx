import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import Routes from "./routes";

import { configureStore, history } from "./store";
import { MuiThemeProvider } from "@material-ui/core";
import { lightblue } from "./ui/theme";
import { Layout } from "./ui";

const store = configureStore();

export default () => (
  <Provider store={store}>
    <MuiThemeProvider theme={lightblue}>
      <Layout
        side={<div>side</div>}>
        <ConnectedRouter store={store} history={history}>
          <Routes />
        </ConnectedRouter>
      </Layout>
    </MuiThemeProvider>
  </Provider>
);
