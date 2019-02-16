import React, { SFC, ComponentType } from "react";
import SplitPane from "react-split-pane";
import { withStyles, withTheme, WithStyles, WithTheme } from "@material-ui/core";
import { createStyle, ClassKey } from "./style";

interface ILayoutProps {
  type?: string;
}

const LayoutBase: SFC<ILayoutProps & WithStyles<ClassKey> & WithTheme> = props => {
  const { classes, theme } = props;
  // let size = undefined;
  // let dragging = false;
  // const handleDragStart = () => {
  //   dragging = true;
  // };
  // const handleDragFinished = () => {
  //   dragging = false;
  //   setTimeout(() => {
  //     size = undefined;
  //   }, 0)
  // };
  // const handleDrag = (width: number) => {
  //   if (width > 50 && width <= 100) {
  //     size = 50;
  //   } else {
  //     size = undefined;
  //   }
  // };

  return (
    <SplitPane
      split="vertical"
      minSize={100}
      maxSize={300}
      defaultSize="20%"
      // size={dragging ? undefined : size}
      // onChange={handleDrag}
      // onDragStarted={handleDragStart}
      // onDragFinished={handleDragFinished}
      className="primary">
      <SplitPane split="vertical" maxSize={50}>
        <div>side</div>
        <div>left</div>
      </SplitPane>
      <SplitPane split="horizontal" maxSize={50}>
        <div>header</div>
        <SplitPane split="horizontal" defaultSize="80%" maxSize={-50}>
          <SplitPane split="vertical" defaultSize="80%" maxSize={-50}>
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
