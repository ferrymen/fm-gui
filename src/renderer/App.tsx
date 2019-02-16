import React, { Component, ReactNode, Fragment } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import Routes from "./routes";
import { configureStore, history } from "./store";
import { MuiThemeProvider } from "@material-ui/core";
import { lightblue } from "./ui/theme";
import { Layout } from "./ui";
import { Side, Left, Header, Right, Footer } from "./component/layout";

const store = configureStore();

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
    const { activeIndex } = this.state;

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={lightblue}>
          <ConnectedRouter store={store} history={history}>
            <Layout
              side={<Side activeIndex={activeIndex} handleChange={this.handleChange} />}
              left={<Left activeIndex={activeIndex} />}
              header={<Header />}
              main={<Routes />}
              right={<Right />}
              footer={<Footer />}
            >
            </Layout>
          </ConnectedRouter>
        </MuiThemeProvider>
      </Provider>
    )
  }
};
