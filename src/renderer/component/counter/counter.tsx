import React, { Component } from "react";

interface IProps {
  increment: () => void;
  incrementOdd: () => void;
  incrementAsync: () => void;
  decrement: () => void;
  counter: number;
}

export default class Counter extends Component<IProps> {
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
          <button onClick={increment}>增加</button>
          <button onClick={decrement}>减少</button>
        </div>
        <div>{counter}</div>
      </div>
    );
  }
}
