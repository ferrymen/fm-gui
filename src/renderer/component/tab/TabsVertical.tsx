import { withStyles, Tabs } from "@material-ui/core";

export const TabsVertical = withStyles(theme => ({
  flexContainer: {
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: theme.palette.primary.main
  },
  indicator: {
    display: "none",
  }
}))(Tabs)
