import React, { Component } from "react";
import { connect } from "react-redux";
import { IRootState, NRootState } from "../../reducer";
import { Dispatch, bindActionCreators } from "redux";
import { omit } from "../../utils";
import { Header, Side } from "../../component/layout";
import { Setting } from "../../component/setting";
import { OIntlAction, NIntlAction } from "../../action/intl";
import { Layout } from "../../ui";
import { RouteComponentProps } from "react-router";
import { OMenuAction, NMenuAction } from "../../action";

export interface IProps extends RouteComponentProps {
  // intl: Partial<InjectedIntl>;
  intl: NRootState.TIntl;
  menu: NRootState.TMenuState,
  actionsIntl: OIntlAction;
  actionsMenu: OMenuAction,
}

@connect(
  (state: IRootState, ownProps): Pick<IProps, "intl" | "menu"> => ({
    intl: state.intl,
    menu: state.menu,
  }),
  (dispatch: Dispatch): Pick<IProps, "actionsIntl" | "actionsMenu"> => ({
    actionsIntl: bindActionCreators(omit(NIntlAction, "EType"), dispatch),
    actionsMenu: bindActionCreators(omit(NMenuAction, "EType"), dispatch)
  })
)
export class ViewSetting extends Component<IProps> {
  public render() {
    const { intl, actionsIntl, actionsMenu, match, menu, history } = this.props;

    return (
      <Layout
        // side={<Side activeIndex={menu.actived} changeMenu={() => actionsMenu.changeMenu({path: match.path})} menu={menu} />}
        side={<Side activeIndex={menu.actived} changeMenu={(path: string) => actionsMenu.changeMenu({path: path})} menu={menu} />}
        header={<Header history={history} />}
        // main={<Routes />}
        main={
          <Setting
            intl={intl}
            actions={actionsIntl}
          />
        }
      >
    </Layout>
    );
  }
}
