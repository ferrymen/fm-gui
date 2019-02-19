import React from "react";
import { Select, MenuItem, List, ListSubheader, ListItem, ListItemText, ListItemSecondaryAction, Grid, Paper, Typography, Divider } from "@material-ui/core";
import { OIntlAction } from "../../action/intl";
import { IIntlModel, IThemeModel } from "../../model";
import { OThemeAction } from "../../action";

interface IProps {
  intl: IIntlModel;
  actions: OIntlAction & OThemeAction;
  locales: Array<string>;
  theme: IThemeModel;
}

export const Setting = (props: IProps) => {
  const { intl, actions, locales, theme } = props;

  return (
    <Paper>
      <Typography variant="h6" gutterBottom align="center">
        <intl.FormattedMessage
          id="common.settings"
        />
      </Typography>
      <List
        subheader={
          <ListSubheader>
            <intl.FormattedMessage
              id="common.settings.language"
            />
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemText primary={<intl.FormattedMessage id="common.settings.language" />} />
          <ListItemSecondaryAction>
            <Select
              value={intl.locale}
              onChange={(event) => {actions.changeLocale({ locale: event.target.value })}}
              // inputProps={{
              //   name: "locale"
              // }}
            >
              {
                locales.map((it) => <MenuItem key={it} value={it}>{it}</MenuItem>)
              }
            </Select>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Divider />
      <List
        subheader={
          <ListSubheader>
            <intl.FormattedMessage
              id="common.settings.theme"
            />
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemText primary={<intl.FormattedMessage id="common.settings.theme.type" />} />
          <ListItemSecondaryAction>
            <Select
              value={theme.type}
              onChange={(event) => actions.changeThemeType({ type: event.target.value })}
              // inputProps={{
              //   name: "locale"
              // }}
            >
              {
                theme.themes.map((it) => <MenuItem key={it} value={it}>{it}</MenuItem>)
              }
            </Select>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Paper>
  )
};
