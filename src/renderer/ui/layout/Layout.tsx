import React, { SFC, ComponentType } from "react";
import SplitPane from "react-split-pane";
import { withStyles } from "@material-ui/core";
import { createStyle } from "./style";

interface ILayoutProps {
  type?: string;
}

const LayoutBase: SFC<ILayoutProps> = props => {
  return (
    <SplitPane split="vertical" defaultSize="20%" className="primary" >
      <div>left</div>
      <SplitPane split="horizontal" maxSize={50}>
        <div>header</div>
        <SplitPane split="horizontal" defaultSize="80%">
          <SplitPane split="vertical" defaultSize="80%">
            <div>main</div>
            <div>right</div>
          </SplitPane>
          <div>footer</div>
        </SplitPane>
      </SplitPane>
    </SplitPane>
  );
};

const LayoutWithStyle: ComponentType<{}> = withStyles(createStyle)(LayoutBase);

export const Layout: ComponentType<{}> = LayoutWithStyle;
