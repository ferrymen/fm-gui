import React, { Component } from "react";
import { connect } from "react-redux";
import { IRootState, NRootState } from "../../reducer";
import { Dispatch, bindActionCreators } from "redux";
import { omit } from "../../utils";
import { Header } from "../../component/layout";
import { Setting } from "../../component/setting";
import { InjectedIntl } from "react-intl";
import { OIntlAction, NIntlAction } from "../../action/intl";

export interface IProps {
  intl: Partial<InjectedIntl>;
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
export default class ViewCounter extends Component<IProps> {
  public render() {
    const { intl, actions } = this.props;
    return (
      <div>
        <Header />
        <Setting
          locale={intl.locale}
          actions={actions}
        />
      </div>
    );
  }
}
