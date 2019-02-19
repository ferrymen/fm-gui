import React, { Component, ReactNode, Fragment } from "react";
import { Provider, connect } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { configureStore, history } from "./store";
import { MuiThemeProvider } from "@material-ui/core";
import { lightblue } from "./ui/theme";
import { IntlProvider, addLocaleData } from "react-intl";
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import { getMessagesForLocale, ConnectedIntlProvider } from "./locales";
import Routes from "./routes";
import { IRootState } from "./reducer";

function mapStateToProps(state: IRootState) {
  const { theme } = state.theme;
  return { theme: theme };
}

const ConnectedMuiThemeProvider = connect(mapStateToProps)(({ children, theme }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
));

const store = configureStore();

addLocaleData([
  ...en,
  ...zh,
])

export default class App extends Component<{}> {
  public render (): ReactNode {
    // const locale = "en";
    // const locale = "zh-CN";
    const state: IRootState = store.getState() as any;
    const theme = state.theme.theme

    return (
      <Provider store={store}>
        <ConnectedIntlProvider>
          <ConnectedMuiThemeProvider>
            <ConnectedRouter store={store} history={history}>
              <Routes store={store} />
            </ConnectedRouter>
          </ConnectedMuiThemeProvider>
        </ConnectedIntlProvider>
      </Provider>
    )
  }
};
