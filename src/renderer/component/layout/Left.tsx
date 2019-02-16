import React, { Fragment } from "react";
import { TabContainer } from "../tab";
import { Tooltip, Divider } from "@material-ui/core";
import { Flex, Box } from "@rebass/grid";
import { AddCircleOutline, FolderOpenOutlined } from "@material-ui/icons";

interface IProps {
  activeIndex: number;
}

export const Left = (props: IProps) => {
  const { activeIndex } = props;

  return (
    <Fragment>
      { activeIndex === 0 &&
        <TabContainer>
          <Flex justifyContent="flex-end" flexDirection="row">
            <Box px={1}>
              <Tooltip title="New Project">
                <AddCircleOutline />
              </Tooltip>
            </Box>
            <Box px={1}>
              <Tooltip title="Import Project">
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
