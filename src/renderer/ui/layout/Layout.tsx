import React, { SFC, ComponentType } from "react";
import SplitPane from "react-split-pane";
import { withStyles } from "@material-ui/core";
import { createStyle } from "./style";

interface ILayoutProps {
  type?: string;
}

const LayoutBase: SFC<ILayoutProps> = props => {
  return (
    <SplitPane
      split="vertical"
      minSize={50}
      maxSize={300}
      defaultSize={100}
      className="primary"
    >
      <div>min: 50px, max: 300px</div>
      <SplitPane split="horizontal">
        <div>default min: 50px</div>
        <div />
      </SplitPane>
    </SplitPane>
  );
};

const LayoutWithStyle: ComponentType<{}> = withStyles(createStyle)(LayoutBase);

export const Layout: ComponentType<{}> = LayoutWithStyle;
