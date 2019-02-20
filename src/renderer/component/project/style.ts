import { StyleRules, Theme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

export const style = (theme: Theme): Record<string, Partial<CSSProperties>> => {
  return {
    container: {
      width: "100%",
      height: "100%",
      background: theme.palette.background.paper,
      // display: "table-cell",
      // verticalAign: "middle",
      // textAlign: "center",
      display: "flex",
      justifyContent:"center",
      alignItems: "Center",
    },
  };
};

export type ClassKey = "root" | "item" | "button" | "leftIcon";

export const createStyle = (theme: Theme): StyleRules<ClassKey> => {

  const root: CSSProperties = {
    // background: theme.palette.background.default
    flexGrow: 1,
  };

  const item: CSSProperties = {
    width: "250px"
  }

  const button: CSSProperties = {
    margin: theme.spacing.unit,
  }

  const leftIcon: CSSProperties = {
    marginRight: theme.spacing.unit,
  }

  return {
    root,
    item,
    button,
    leftIcon
  };
};