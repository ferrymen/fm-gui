import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import Routes from "./routes";

import { configureStore, history } from "./store";
import { MuiThemeProvider } from "@material-ui/core";
import { lightblue } from "./ui/theme";
import { Layout } from "./ui";
import { Link } from "react-router-dom";

const store = configureStore();

export default () => (
  <Provider store={store}>
    <MuiThemeProvider theme={lightblue}>
      <ConnectedRouter store={store} history={history}>
        <Layout
          side={<div>side</div>}
          left={<div>left</div>}
          header={
            <div>
              <Link to="/">
                <button>返回</button>
              </Link>
            </div>
          }
          main={<Routes />}
          right={<div>right</div>}
          footer={<div>footer</div>}
        >
        </Layout>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
);
