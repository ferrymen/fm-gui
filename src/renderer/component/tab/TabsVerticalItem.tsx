import { withStyles, Tab } from "@material-ui/core";

export const TabsVerticalItem = withStyles(theme => ({
  selected: {
    color: "tomato",
    borderBottom: "2px solid tomato"
  }
}))(Tab);
