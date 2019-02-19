import { ColorPartial } from "@material-ui/core/styles/createPalette";
import { createMuiTheme, Theme } from "@material-ui/core";
// import deepPurple from '@material-ui/core/colors/deepPurple';

const PRIMARY_COLOR = "#19191c";
const RAISED_COLOR = "#df524e";
const BACKGROUND_COLOR = "#dddddd";

const DEFAULT_SPACING = 8;

// http://mcg.mbitson.com/
const primarypalette: ColorPartial = {
  50: '#e3e3e4',
  100: '#bababb',
  200: '#8c8c8e',
  300: '#5e5e60',
  400: '#3c3c3e',
  500: PRIMARY_COLOR,
  600: '#161619',
  700: '#121214',
  800: '#0e0e11',
  900: '#080809',
  A100: '#5151ff',
  A200: '#1e1eff',
  A400: '#0000ea',
  A700: '#0000d0',
  // 'contrastDefaultColor': 'light',
  // 'contrastDefaultColor': 'light',
  // main: deepPurple[500]
};

const secondarypalette: ColorPartial = {
  50: "#fbeaea",
  100: "#f5cbca",
  200: "#efa9a7",
  300: "#e98683",
  400: "#e46c69",
  500: RAISED_COLOR,
  600: "#db4b47",
  700: "#d7413d",
  800: "#d23835",
  900: "#ca2825",
  A100: "#ffffff",
  A200: "#ffd4d3",
  A400: "#ffa1a0",
  A700: "#ff8886"
  // 'contrastDefaultColor': 'light',
};

const greypalette: ColorPartial = {
  50: "#fbfbfb",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e7e7e7",
  400: "#e2e2e2",
  500: BACKGROUND_COLOR,
  600: "#d9d9d9",
  700: "#d4d4d4",
  800: "#cfcfcf",
  900: "#c7c7c7",
  A100: "#ffffff",
  A200: "#ffffff",
  A400: "#ffffff",
  A700: "#ffffff"
  // 'contrastDefaultColor': 'dark',
};

export const lightdark: Theme = createMuiTheme({
  palette: {
    primary: primarypalette,
    secondary: secondarypalette,
    grey: greypalette,
    background: {
      default: greypalette["100"]
    },
    error: {
      main: RAISED_COLOR,
      light: RAISED_COLOR,
      dark: RAISED_COLOR,
      contrastText: RAISED_COLOR
    },
  },
  // Material-UI: you are using the deprecated typography
  // variants that will be removed in the next major release
  // https://material-ui.com/style/typography/#migration-to-typography-v2
  typography: {
    useNextVariants: true,
    title: {
      fontWeight: 400,
      color: PRIMARY_COLOR
    }
  },
  spacing: {
    unit: DEFAULT_SPACING
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: "#616161"
      }
    }
  }
});
