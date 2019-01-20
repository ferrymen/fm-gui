import React, { Component } from "react";
import { Provider } from "react-redux";
import { Store } from "redux";

interface IProps {
  store: Store<any>;
}

export default class Root extends Component<IProps> {
  public render() {
    return (
      <Provider store={this.props.store}>
        {this.props.children}
      </Provider>
    );
  }
}
