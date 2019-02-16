import React, { Fragment } from "react";
import { TabContainer } from "../tab";
import { Tooltip, Divider } from "@material-ui/core";
import { Flex, Box } from "@rebass/grid";
import { AddCircleOutline, FolderOpenOutlined } from "@material-ui/icons";
import { injectIntl, InjectedIntl, defineMessages } from 'react-intl';

// const messages = defineMessages({
//   projectAdd: { id: "project.add" },
//   projecImport: { id: "project.import" },
// });

interface IProps {
  activeIndex: number;
  intl: InjectedIntl;
}

const LeftBase = (props: IProps) => {
  const { activeIndex, intl } = props;

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
            <Box px={1}>
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
};

export const Left = injectIntl(LeftBase);
