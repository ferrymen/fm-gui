import { Component, ReactNode } from "react";
import { Layout } from "../../ui";
import { Side, Left, Header, Right, Footer } from "../../component/layout";
import React from "react";
import Routes from "../../routes";
import { NRootState, IRootState } from "../../reducer";
import { OProjectAction, NProjectAction, OMenuAction, NMenuAction } from "../../action";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { RouteComponentProps, Switch, Route } from "react-router";
import { ViewProjectDetial } from "./ProjectDetial";
import { omit } from "../../lib/utils";
import { getLocalProjects, setLocalProjects } from "../../lib/localStorage";

interface IProps extends RouteComponentProps {
  projects: NRootState.IProjectState,
  menu: NRootState.TMenuState,
  actionsProject: OProjectAction,
  actionsMenu: OMenuAction,
}

@connect(
  (state: IRootState, ownProps: RouteComponentProps): Pick<IProps, "projects" | "location" | "history" | "menu"> => {
    return {
      projects: state.projects,
      location: ownProps.location,
      history: ownProps.history,
      menu: state.menu,
    }
  },
  (dispatch: Dispatch): Pick<IProps, "actionsProject" | "actionsMenu"> => ({
    actionsProject: bindActionCreators(omit(NProjectAction, "EType"), dispatch),
    actionsMenu: bindActionCreators(omit(NMenuAction, "EType"), dispatch)
  })
)
export class ViewProject extends Component<IProps> {
  constructor (props: any) {
    super(props);
  }

  public render (): ReactNode {
    const { projects, actionsProject, actionsMenu, location, match, menu, history } = this.props;

    if (!projects.length) {
      history.push('/empty');
      return null;
    }

    return (
      <Layout
        side={<Side activeIndex={menu.actived} changeMenu={(path: string) => actionsMenu.changeMenu({path: path})} menu={menu} />}
        left={
          <Left
            activeIndex={menu.actived}
            projects={projects}
            actions={actionsProject}
          />
        }
        header={<Header history={history} />}
        // main={<Routes />}
        main={
          <div style={{wordBreak: "break-all"}}>
            <Route path="/project/:id" component={ViewProjectDetial} />
          </div>
        }
        right={<Right />}
        footer={<Footer />}
      >
    </Layout>
    )
  }
}