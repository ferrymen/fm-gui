import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { injectIntl, InjectedIntl } from "react-intl";

interface IProps {
  intl: InjectedIntl;
}

const HeaderBase = (props: IProps) => {
  const { intl } = props;

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton color="inherit" style={{paddingLeft: 0}} component={(itemProps: any) => <Link to="/" {...itemProps} />}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" color="inherit">
          {intl.formatMessage({ id: "common.back" })}
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

export const Header = injectIntl(HeaderBase);
