import React, { SFC, ComponentType } from "react";
import SplitPane from "react-split-pane";
import { withStyles, withTheme, WithStyles, WithTheme } from "@material-ui/core";
import { createStyle, ClassKey } from "./style";

interface ILayoutProps {
  type?: string;
}

const LayoutBase: SFC<ILayoutProps & WithStyles<ClassKey> & WithTheme> = props => {
  const { classes, theme } = props;
  return (
    <SplitPane split="vertical" defaultSize="20%" className="primary">
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

const LayoutWithStyle: any = withStyles(createStyle)(LayoutBase); // LayoutBase: props.classes
const LayoutWithTheme: ComponentType<{}> = withTheme()(LayoutWithStyle); // LayoutBase: props.theme

export const Layout: ComponentType<{}> = LayoutWithTheme;
