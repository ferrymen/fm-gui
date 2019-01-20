import React, { Component, ReactNode } from "react";

export default class App extends Component {
  public render() {
    return <div>{this.props.children}</div>;
  }
}
