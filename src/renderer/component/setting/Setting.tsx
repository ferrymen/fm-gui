import React from "react";
import { Select, MenuItem, List, ListSubheader, ListItem, ListItemText, ListItemSecondaryAction } from "@material-ui/core";
import { locales } from "../../locales";
import { OIntlAction } from "../../action/intl";
import { IIntlModel } from "../../model";

interface IProps {
  intl: IIntlModel;
  actions: OIntlAction;
}

export const Setting = (props: IProps) => {
  const { intl, actions } = props;

  return (
    <List subheader={
      <ListSubheader>
        <intl.FormattedMessage
            id="common.settings"
        />
      </ListSubheader>}>
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
              Object.keys(locales).map((it) => <MenuItem key={it} value={it}>{it}</MenuItem>)
            }
          </Select>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  )
};
