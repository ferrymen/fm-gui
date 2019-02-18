import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { injectIntl, InjectedIntl } from "react-intl";
import { History } from "history";

interface IProps {
  intl: InjectedIntl;
  history: History;
}

const HeaderBase = (props: IProps) => {
  const { intl, history } = props;

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        {/* <IconButton color="inherit" style={{paddingLeft: 0}} component={(itemProps: any) => <Link to="/" {...itemProps} />}> */}
        <IconButton color="inherit" style={{paddingLeft: 0}} onClick={() => history.goBack()}>
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
