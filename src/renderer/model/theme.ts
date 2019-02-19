import { ThemeOptions, Theme } from "@material-ui/core/styles/createMuiTheme";

export interface IThemeModel {
  theme: Theme,
  themes: Array<string>,
  type: string
}
