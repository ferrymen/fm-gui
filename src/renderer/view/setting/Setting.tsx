import React, { Component } from "react";
import { connect } from "react-redux";
import { IRootState, NRootState } from "../../reducer";
import { Dispatch, bindActionCreators } from "redux";
import { omit } from "../../utils";
import { Header } from "../../component/layout";
import { Setting } from "../../component/setting";
import { OIntlAction, NIntlAction } from "../../action/intl";

export interface IProps {
  // intl: Partial<InjectedIntl>;
  intl: NRootState.TIntl;
  actions: OIntlAction;
}

@connect(
  (state: IRootState, ownProps): Pick<IProps, "intl"> => ({
    intl: state.intl
  }),
  (dispatch: Dispatch): Pick<IProps, "actions"> => ({
    actions: bindActionCreators(omit(NIntlAction, "EType"), dispatch)
  })
)
export class ViewSetting extends Component<IProps> {
  public render() {
    const { intl, actions } = this.props;
    return (
      <div>
        <Header />
        <Setting
          intl={intl}
          actions={actions}
        />
      </div>
    );
  }
}
