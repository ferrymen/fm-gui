import React, { SFC, ComponentType, Fragment, ReactNode } from "react";
import SplitPane from "react-split-pane";
import { withStyles, withTheme, WithStyles, WithTheme } from "@material-ui/core";
import { createStyle, ClassKey } from "./style";

interface ILayoutProps {
  side: ReactNode;
  left: ReactNode;
  header: ReactNode;
  main: ReactNode;
  right: ReactNode;
  footer: ReactNode;
}

const LayoutBase: SFC<ILayoutProps & WithStyles<ClassKey> & WithTheme> = props => {
  const { classes, theme, side, left, header, main, right, footer } = props;
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
      minSize={180}
      maxSize={300}
      defaultSize="20%"
      // size={dragging ? undefined : size}
      // onChange={handleDrag}
      // onDragStarted={handleDragStart}
      // onDragFinished={handleDragFinished}
      className="primary">
      <SplitPane split="vertical" maxSize={50}>
        <Fragment>{side}</Fragment>
        <Fragment>{left}</Fragment>
      </SplitPane>
      <SplitPane split="horizontal" maxSize={50}>
        <Fragment>{header}</Fragment>
        <SplitPane split="horizontal" defaultSize="80%" maxSize={-50}>
          <SplitPane split="vertical" defaultSize="80%" maxSize={-50}>
            <Fragment>{main}</Fragment>
            <Fragment>{right}</Fragment>
          </SplitPane>
          <Fragment>{footer}</Fragment>
        </SplitPane>
      </SplitPane>
    </SplitPane>
  );
};

// const LayoutWithStyle: ComponentType<ILayoutProps> = withStyles(createStyle)(LayoutBase); // LayoutBase: props.classes
const LayoutWithStyle = withStyles(createStyle)(LayoutBase); // LayoutBase: props.classes
const LayoutWithTheme: ComponentType<ILayoutProps> = withTheme()(LayoutWithStyle); // LayoutBase: props.theme

export const Layout: ComponentType<ILayoutProps> = LayoutWithTheme;
