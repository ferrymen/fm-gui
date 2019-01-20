import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IProject } from "../../types";

interface IProp {
  projects: IProject[];
}

export default class ViewHome extends Component<IProp> {
  public render() {
    const {
      projects,
    } = this.props;

    return (
      <div>
        <h2>Home</h2>
        We are using node {process.versions.node},
        Chrome {process.versions.chrome},
        and Electron {process.versions.electron}.
        <br />
        Projects: {projects}
        <hr />
        <Link to="/counter">to Counter</Link>
      </div>
    );
  }
}
