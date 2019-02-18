import React from "react";
import { Paper } from "@material-ui/core";
import { TabsVertical, TabsVerticalItem } from "../tab";
import { Link } from "react-router-dom";
import { IMenuModel } from "../../model";

interface IProps {
  activeIndex: number;
  changeMenu: (path: string) => void;
  menu: IMenuModel;
}

export const Side = (props: IProps) => {
  const { activeIndex, changeMenu, menu } = props;

  return (
    <Paper square>
      <TabsVertical
        value={activeIndex}
        // variant="fullWidth"
        // indicatorColor="primary"
        // onChange={changeMenu}
        textColor="primary"
      >
        {
          menu.childrens.map((path, index) => {
            const Component = menu.icons[index];
            return <TabsVerticalItem key={index} onClick={() => changeMenu(path)} icon={<Component />} component={(itemProps: any) => <Link to={path} {...itemProps} />} />
          })
        }
      </TabsVertical>
    </Paper>
  )
};
