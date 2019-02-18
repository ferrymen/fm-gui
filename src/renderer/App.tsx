import React, { Component, ReactNode, Fragment } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { configureStore, history } from "./store";
import { MuiThemeProvider } from "@material-ui/core";
import { lightblue } from "./ui/theme";
import { IntlProvider, addLocaleData } from "react-intl";
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import { getMessagesForLocale, ConnectedIntlProvider } from "./locales";
import Routes from "./routes";

const store = configureStore();

addLocaleData([
  ...en,
  ...zh,
])

interface IState {
  activeIndex: number;
}

export default class App extends Component<{}, IState> {
  constructor (props: any) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event: any, activeIndex: number) {
    this.setState({ activeIndex });
  };

  public render (): ReactNode {
    // const locale = "en";
    // const locale = "zh-CN";

    return (
      <Provider store={store}>
        <ConnectedIntlProvider>
          <MuiThemeProvider theme={lightblue}>
            <ConnectedRouter store={store} history={history}>
              <Routes store={store} />
            </ConnectedRouter>
          </MuiThemeProvider>
        </ConnectedIntlProvider>
      </Provider>
    )
  }
};
