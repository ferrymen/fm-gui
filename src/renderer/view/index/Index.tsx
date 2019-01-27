import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ICounterModel, ITodoModel } from "../../model";
import { IRootState } from "../../reducer";
import { Layout } from "../../ui";

export namespace NHome {
  export interface IProps {
    todos: ITodoModel[];
  }
}

const Header = () => {
  return <div>Header</div>;
}

const Footer = () => {
  return <div>Footer</div>;
}

// no hot reload
// https://github.com/gaearon/react-hot-loader/issues/1120
// https://github.com/reduxjs/react-redux/pull/1137
@connect((state: IRootState) => ({
  todos: state.todos
}))
export default class ViewHome extends Component<NHome.IProps> {
  public render() {
    return (
      <div>
        <Layout>
        </Layout>
        {/* <h2>Home</h2>
        We are using node {process.versions.node}, Chrome{" "}
        {process.versions.chrome}, and Electron {process.versions.electron}.
        <br />
        <hr />
        <Link to="/counter">to Counter</Link> */}
      </div>
    );
  }
}
