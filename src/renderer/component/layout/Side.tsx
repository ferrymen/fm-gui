import React from "react";
import { Paper } from "@material-ui/core";
import { TabsVertical, TabsVerticalItem } from "../tab";
import { Storage, Favorite, PersonPin, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

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
        <TabsVerticalItem icon={<Favorite />} component={(itemProps: any) => <Link to="/counter" {...itemProps} />} />
        <TabsVerticalItem icon={<Settings />} component={(itemProps: any) => <Link to="/setting" {...itemProps} />} />
      </TabsVertical>
    </Paper>
  )
};
