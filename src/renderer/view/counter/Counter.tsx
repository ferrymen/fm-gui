import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, increment } from "../../redux/action/counter";

interface IProps {
  counter: number;
  decrement: () => void;
  increment: () => void;
}

@connect(
  (state) => (
    {
      counter: state.Counter.counter,
    }
  ),
  (dispatch) => (
    {
      decrementDo: () => dispatch(decrement()),
      incrementDo: () => dispatch(increment()),
    }
  ),
)
export default class ViewCounter extends Component<IProps> {
  public render() {
    const {
      counter,
      decrementDo,
      incrementDo,
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
          <button onClick={incrementDo}>增加</button>
          <button onClick={decrementDo}>减少</button>
        </div>
        <div>{counter}</div>
      </div>
    );
  }
}
