import React, { Component } from "react";
import { Link } from "react-router-dom";

interface IProp {
  increment: () => void;
  incrementOdd: () => void;
  incrementAsync: () => void;
  decrement: () => void;
  counter: number;
}

export default class ViewCounter extends Component<IProp> {
  public render() {
    const {
      increment,
      incrementOdd,
      incrementAsync,
      decrement,
      counter,
    } = this.props;

    return (
      <div>
        <div>
          <Link to="/">
            <button>返回</button>
          </Link>
        </div>
        <hr />
        <div>
          <button onClick={increment}>增加</button>
          <button onClick={decrement}>减少</button>
        </div>
        <div>{counter}</div>
      </div>
    );
  }
}
