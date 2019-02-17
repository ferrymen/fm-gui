import { Component, ReactNode } from "react";
import { Layout } from "../../ui";
import { Side, Left, Header, Right, Footer } from "../../component/layout";
import React from "react";
import Routes from "../../routes";
import { NRootState, IRootState } from "../../reducer";
import { OProjectAction, NProjectAction } from "../../action";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { omit } from "../../utils";
import { RouteComponentProps, Switch, Route } from "react-router";
import ViewProjectDetial from "../project/ProjectDetial";

interface IProps extends RouteComponentProps {
  projects: NRootState.IProjectState,
  actions: OProjectAction
}

interface IState {
  activeIndex: number;
}

@connect(
  (state: IRootState, ownProps: RouteComponentProps): Pick<IProps, "projects" | "location" | "history"> => {
    return {
      projects: state.projects,
      location: ownProps.location,
      history: ownProps.history,
    }
  },
  (dispatch: Dispatch): Pick<IProps, "actions"> => ({
    actions: bindActionCreators(omit(NProjectAction, "EType"), dispatch)
  })
)
export default class Root extends Component<IProps, IState> {
  constructor (props: any) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event: any, activeIndex: number) {
    this.setState({ activeIndex });
  }

  public render (): ReactNode {
    const { projects, actions, location } = this.props;
    const { activeIndex } = this.state;

    return (
      <Layout
        side={<Side activeIndex={activeIndex} handleChange={this.handleChange} />}
        left={
          <Left
            activeIndex={activeIndex}
            projects={projects}
            actions={actions}
          />
        }
        header={<Header />}
        // main={<Routes />}
        main={
          <div style={{wordBreak: "break-all"}}>
            <Route path="/project" component={ViewProjectDetial} />
          </div>
        }
        right={<Right />}
        footer={<Footer />}
      >
    </Layout>
    )
  }
}