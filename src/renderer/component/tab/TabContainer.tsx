import { Typography } from "@material-ui/core";
import React from "react";

export const TabContainer = (props: any) => {
  return (
    <Typography component="div" style={{ padding: 8 * 1 }}>
      {props.children}
    </Typography>
  );
};
