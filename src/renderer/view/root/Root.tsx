import { History } from "history";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Store } from "redux";
import Routes from "../../routes";

interface IProps {
  store: Store<any>;
  history: History;
}

export default class Root extends Component<IProps> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter store={this.props.store} history={this.props.history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}
