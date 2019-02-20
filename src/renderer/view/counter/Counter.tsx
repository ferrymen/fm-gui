import React, { Component } from "react";
import { connect } from "react-redux";
import { IRootState, NRootState } from "../../reducer";
import { OCounterAction, NCounterAction, OMenuAction, NMenuAction } from "../../action";
import { Dispatch, bindActionCreators } from "redux";
import { Header, Side } from "../../component/layout";
import { Layout } from "../../ui";
import { RouteComponentProps } from "react-router";
import { omit } from "../../lib/utils";

export interface IProps extends RouteComponentProps {
  counter: NRootState.TCounterState;
  menu: NRootState.TMenuState;
  actionsCounter: OCounterAction;
  actionsMenu: OMenuAction;
}

@connect(
  (state: IRootState, ownProps): Pick<IProps, "counter" | "menu"> => ({
    counter: state.counter,
    menu: state.menu,
  }),
  (dispatch: Dispatch): Pick<IProps, "actionsCounter" | "actionsMenu"> => ({
    actionsCounter: bindActionCreators(omit(NCounterAction, "EType"), dispatch),
    actionsMenu: bindActionCreators(omit(NMenuAction, "EType"), dispatch)
  })
)
export class ViewCounter extends Component<IProps> {
  public render() {
    const { counter, actionsCounter, actionsMenu, menu, history} = this.props;

    return (
      <Layout
        // side={<Side activeIndex={menu.actived} changeMenu={() => actionsMenu.changeMenu({path: match.path})} menu={menu} />}
        side={<Side activeIndex={menu.actived} changeMenu={(path: string) => actionsMenu.changeMenu({path: path})} menu={menu} />}
        header={<Header history={history} />}
        // main={<Routes />}
        main={
          <div>
            <button onClick={actionsCounter.increment}>增加</button>
            <button onClick={actionsCounter.decrement}>减少</button>
            <div>{counter.count}</div>
          </div>
        }
      >
    </Layout>
    );
  }
}
