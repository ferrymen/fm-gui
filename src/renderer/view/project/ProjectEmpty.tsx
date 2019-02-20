import React, { Component } from "react";
import { connect } from "react-redux";
import { IRootState, NRootState } from "../../reducer";
import { NProjectModel, IProjectModel } from "../../model";
import { ProjectDetial, ProjectEmpty } from "../../component/project";
import { OProjectAction, NProjectAction, OMenuAction, NMenuAction } from "../../action";
import { Dispatch, bindActionCreators } from "redux";
import { RouteComponentProps } from "react-router";
import { Layout } from "../../ui";
import { Side, Header } from "../../component/layout";
import { omit } from "../../lib/utils";

interface IProps extends RouteComponentProps {
  // intl: Partial<InjectedIntl>;
  intl: NRootState.TIntl;
  projects: NRootState.IProjectState,
  menu: NRootState.TMenuState,
  actionsProject: OProjectAction;
  actionsMenu: OMenuAction;
}

@connect(
  (state: IRootState, ownProps): Pick<IProps, "intl" | "menu"> => ({
    intl: state.intl,
    menu: state.menu
  }),
  (dispatch: Dispatch): Pick<IProps, "actionsProject" | "actionsMenu"> => ({
    actionsProject: bindActionCreators(omit(NProjectAction, "EType"), dispatch),
    actionsMenu: bindActionCreators(omit(NMenuAction, "EType"), dispatch),
  })
)
export class ViewProjectEmpty extends Component<IProps> {
  public render() {
    const { menu, actionsMenu, history, intl, actionsProject } = this.props;

    return (
      <Layout
        // side={<Side activeIndex={menu.actived} changeMenu={() => actionsMenu.changeMenu({path: match.path})} menu={menu} />}
        side={<Side activeIndex={menu.actived} changeMenu={(path: string) => actionsMenu.changeMenu({path: path})} menu={menu} />}
        header={<Header history={history} />}
        // main={<Routes />}
        main={
          <ProjectEmpty
            intl={intl}
            actions={actionsProject}
            history={history}
          />
        }
      >
      </Layout>
    );
  }
}
