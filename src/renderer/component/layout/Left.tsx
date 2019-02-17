import React, { Fragment, Component, ReactNode } from "react";
import { TabContainer } from "../tab";
import { Tooltip, Divider } from "@material-ui/core";
import { Flex, Box } from "@rebass/grid";
import { AddCircleOutline, FolderOpenOutlined } from "@material-ui/icons";
import { injectIntl, InjectedIntl, defineMessages } from 'react-intl';
import { connect } from "react-redux";
import { OProjectAction, NProjectAction } from "../../action";
import { IRootState, NRootState } from "../../reducer";
import { Dispatch, bindActionCreators } from "redux";
import { omit } from "../../utils";

// const messages = defineMessages({
//   projectAdd: { id: "project.add" },
//   projecImport: { id: "project.import" },
// });

interface IProps {
  activeIndex: number;
  intl: InjectedIntl;
  projects?: NRootState.IProjectState;
  actions?: OProjectAction;
}

@connect(
  (state: IRootState, ownProps): Pick<IProps, "projects"> => ({
    projects: state.projects
  }),
  (dispatch: Dispatch): Pick<IProps, "actions"> => ({
    actions: bindActionCreators(omit(NProjectAction, "EType"), dispatch)
  })
)
class LeftBase extends Component<IProps> {
  public render (): ReactNode {
    const { activeIndex, intl, actions } = this.props;
    const importProject = () => {
      actions!.importProject({ path: 'tt' })
    }

    return (
      <Fragment>
        { activeIndex === 0 &&
          <TabContainer>
            <Flex justifyContent="flex-end" flexDirection="row">
              <Box px={1}>
                <Tooltip
                title={intl.formatMessage({ id: "project.add" })}
                // title={intl.formatMessage(messages.projectAdd)}
                >
                  <AddCircleOutline />
                </Tooltip>
              </Box>
              <Box px={1} onClick={importProject}>
                <Tooltip title={intl.formatMessage({ id: "project.import" })}>
                  <FolderOpenOutlined />
                </Tooltip>
              </Box>
            </Flex>
            <Divider />
          </TabContainer>
        }
        { activeIndex === 1 && <TabContainer>Favorite</TabContainer> }
        { activeIndex === 2 && <TabContainer>Profile</TabContainer> }
      </Fragment>
    )
  }
};

export const Left = injectIntl(LeftBase);
