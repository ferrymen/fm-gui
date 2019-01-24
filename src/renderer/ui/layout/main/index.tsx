import React, { ComponentType } from "react";
import { ReactNode, StatelessComponent } from "react";
import { WithTheme, withTheme } from "@material-ui/core";

export interface IMainLayoutProps {
  menu: ReactNode;
  footer: ReactNode;
}

const MainLayoutBase: StatelessComponent<
  IMainLayoutProps & WithTheme
> = props => {
  const { menu, footer, children, theme } = props;

  return (
    <div>
      <div>{menu}</div>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  );
};

const MainLayoutWithTheme: ComponentType<IMainLayoutProps> = withTheme()(
  MainLayoutBase
);

export const MainLayout: ComponentType<IMainLayoutProps> = (MainLayoutWithTheme);
