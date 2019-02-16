import React, { Fragment } from "react";
import { TabContainer } from "../tab";

interface IProps {
  activeIndex: number;
}

export const Left = (props: IProps) => {
  const { activeIndex } = props;

  return (
    <Fragment>
      { activeIndex === 0 && <TabContainer>Project</TabContainer> }
      { activeIndex === 1 && <TabContainer>Favorite</TabContainer> }
      { activeIndex === 2 && <TabContainer>Profile</TabContainer> }
    </Fragment>
  )
};
