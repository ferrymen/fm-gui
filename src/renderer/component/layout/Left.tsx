import React, { Fragment, Component, ReactNode } from "react";
import { TabContainer } from "../tab";
import { Tooltip, Divider, List, ListItem, ListItemIcon, ListItemText, Collapse, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { Flex, Box } from "@rebass/grid";
import { AddCircleOutline, FolderOpenOutlined, RadioButtonUnchecked, ExpandLess, ExpandMore, RadioButtonChecked } from "@material-ui/icons";
import { injectIntl, InjectedIntl, defineMessages } from 'react-intl';
import { OProjectAction } from "../../action";
import { NRootState } from "../../reducer";
import { remote } from "electron";
import { hideBoilerplateDesp } from "../../utils";

// const messages = defineMessages({
//   projectAdd: { id: "project.add" },
//   projecImport: { id: "project.import" },
// });

interface IProps {
  activeIndex: number;
  intl: InjectedIntl;
  projects: NRootState.IProjectState;
  actions: OProjectAction;
}

interface IState {
  selectedProject: string;
}

class LeftBase extends Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)

    this.state = {
      selectedProject: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event: any) {
    this.setState({ selectedProject: event.target.value});
  }

  public render (): ReactNode {
    const { activeIndex, intl, actions, projects } = this.props;
    const importProject = () => {
      const importPath = remote.dialog.showOpenDialog({ properties: ["openDirectory"] });
      const projectPath = importPath[0];

      actions.importProject({ path: projectPath })
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
            {
              projects.length > 0 &&
              <List
                component="nav"
              >
              {
                projects.map(it =>
                  <ListItem key={it.id} button disableGutters={true} style={{padding: "4px 0"}}>
                    <Radio
                      checked={this.state.selectedProject === it.name}
                      onChange={this.handleChange}
                      value={it.name}
                      color="primary"
                      icon={<RadioButtonUnchecked fontSize="small" style={{width: "14px", height: "14px"}} />}
                      checkedIcon={<RadioButtonChecked fontSize="small" style={{width: "14px", height: "14px"}} />}
                      style={{padding: 0}}
                    />
                    <ListItemText
                      inset
                      primary={hideBoilerplateDesp(it.name, 20)}
                      onClick={() => this.handleChange({ target: {value: it.name} })}
                      style={{padding: "0 4px"}} />
                  </ListItem>
                )
              }
              </List>
            }
          </TabContainer>
        }
        { activeIndex === 1 && <TabContainer>Favorite</TabContainer> }
        { activeIndex === 2 && <TabContainer>Profile</TabContainer> }
      </Fragment>
    )
  }
};

export const Left = injectIntl(LeftBase);
