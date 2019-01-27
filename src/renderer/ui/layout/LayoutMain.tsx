import React, { ComponentType } from "react";
import { ReactNode, StatelessComponent } from "react";
import { WithTheme, withTheme } from "@material-ui/core";

export interface ILayoutMainProps {
  header: ReactNode;
  footer: ReactNode;
}

const LayoutMainBase: StatelessComponent<
  ILayoutMainProps & WithTheme
> = props => {
  const { header, footer, children, theme } = props;

  return (
    <div>
      <div>{header}</div>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  );
};

const LayoutMainWithTheme: ComponentType<ILayoutMainProps> = withTheme()(
  LayoutMainBase
);

export const LayoutMain: ComponentType<ILayoutMainProps> = (LayoutMainWithTheme);
