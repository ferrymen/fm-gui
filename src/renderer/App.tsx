import React, { Component, ReactNode } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import Routes from "./routes";

import { configureStore, history } from "./store";
import { MuiThemeProvider, Paper, Tabs, Tab, withStyles } from "@material-ui/core";
import { Storage, Favorite, PersonPin } from "@material-ui/icons";
import { lightblue } from "./ui/theme";
import { Layout } from "./ui";
import { Link } from "react-router-dom";

const store = configureStore();

const TabsVertical = withStyles(theme => ({
  flexContainer: {
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: theme.palette.primary.main
  },
  indicator: {
    display: "none",
  }
}))(Tabs)

const TabsVerticalItem = withStyles(theme => ({
  selected: {
    color: "tomato",
    borderBottom: "2px solid tomato"
  }
}))(Tab);

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
              side={
                <Paper square>
                  <TabsVertical
                    value={activeIndex}
                    // variant="fullWidth"
                    // indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleChange}
                  >
                    <TabsVerticalItem icon={<Storage />} />
                    <TabsVerticalItem icon={<Favorite />} />
                    <TabsVerticalItem icon={<PersonPin />} />
                  </TabsVertical>
                </Paper>
              }
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
    )
  }
};
