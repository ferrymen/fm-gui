import React, { Component } from "react";
import { connect } from "react-redux";
import { IRootState, NRootState } from "../../reducer";
import { OCounterAction, NCounterAction } from "../../action";
import { Dispatch, bindActionCreators } from "redux";
import { omit } from "../../utils";

export interface IProps {
  counter: NRootState.TCounterState;
  actions: OCounterAction;
}

@connect(
  (state: IRootState, ownProps): Pick<IProps, "counter"> => ({
    counter: state.counter
  }),
  (dispatch: Dispatch): Pick<IProps, "actions"> => ({
    actions: bindActionCreators(omit(NCounterAction, "EType"), dispatch)
  })
)
export default class ViewCounter extends Component<IProps> {
  public render() {
    const { counter, actions } = this.props;

    return (
      <div>
        <div>
          <button onClick={actions.increment}>增加</button>
          <button onClick={actions.decrement}>减少</button>
        </div>
        <div>{counter.count}</div>
      </div>
    );
  }
}
