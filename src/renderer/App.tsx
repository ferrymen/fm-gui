import React, { Component, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default class App extends Component<IProps> {
  public render() {
    return <div>{this.props.children}</div>;
  }
}
