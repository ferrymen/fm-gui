import React from "react";
import { Select, MenuItem, List, ListSubheader, ListItem, ListItemText, ListItemSecondaryAction } from "@material-ui/core";
import { injectIntl, InjectedIntl } from "react-intl";
import { locales } from "../../locales";
import { OIntlAction } from "../../action/intl";

interface IProps {
  intl: InjectedIntl;
  locale?: string;
  actions: OIntlAction;
}

const SettingBase = (props: IProps) => {
  const { intl, locale, actions } = props;

  return (
    <List subheader={<ListSubheader>{intl.formatMessage({ id: "common.settings" })}</ListSubheader>}>
      <ListItem>
        <ListItemText primary={intl.formatMessage({ id: "common.settings.language" })} />
        <ListItemSecondaryAction>
          <Select
            value={locale}
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

export const Setting = injectIntl(SettingBase);