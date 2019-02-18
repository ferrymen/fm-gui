import React, { Component } from "react";
import { connect } from "react-redux";
import { IRootState, NRootState } from "../../reducer";
import { NProjectModel, IProjectModel } from "../../model";
import { ProjectDetial } from "../../component/project";
import { OProjectAction, NProjectAction } from "../../action";
import { Dispatch, bindActionCreators } from "redux";
import { omit } from "../../utils";
import { RouteComponentProps } from "react-router";

export interface IProps extends RouteComponentProps {
  // intl: Partial<InjectedIntl>;
  intl: NRootState.TIntl;
  projects: NRootState.IProjectState;
  actions: OProjectAction;
}

@connect(
  (state: IRootState, ownProps): Pick<IProps, "intl" | "projects"> => ({
    intl: state.intl,
    projects: state.projects
  }),
  (dispatch: Dispatch): Pick<IProps, "actions"> => ({
    actions: bindActionCreators(omit(NProjectAction, "EType"), dispatch)
  })
)
export class ViewProjectDetial extends Component<IProps> {
  public render() {
    const { intl, actions, projects, match } = this.props;

    return (
      <ProjectDetial
          intl={intl}
          actions={actions}
          project={projects.filter((project) => String(project.id) === (match.params as any).id)[0]}
        />
    );
  }
}