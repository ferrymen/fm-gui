import React from "react";
import { Paper } from "@material-ui/core";
import { TabsVertical, TabsVerticalItem } from "../tab";
import { Storage, Favorite, PersonPin } from "@material-ui/icons";

interface IProps {
  activeIndex: number;
  handleChange: (event: any, activeIndex: number) =>void;
}

export const Side = (props: IProps) => {
  const { activeIndex, handleChange } = props;

  return (
    <Paper square>
      <TabsVertical
        value={activeIndex}
        // variant="fullWidth"
        // indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <TabsVerticalItem icon={<Storage />} />
        <TabsVerticalItem icon={<Favorite />} />
        <TabsVerticalItem icon={<PersonPin />} />
      </TabsVertical>
    </Paper>
  )
};
