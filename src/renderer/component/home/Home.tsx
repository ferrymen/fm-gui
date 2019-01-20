import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  public render() {
    return (
      <div>
        <h2>Home</h2>
        We are using node {process.versions.node},
        Chrome {process.versions.chrome},
        and Electron {process.versions.electron}.
        <hr />
        <Link to="/counter">to Counter</Link>
      </div>
    );
  }
}
