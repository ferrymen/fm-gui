import { handleActions } from "redux-actions";
import { NRootState } from "./root";
import { IThemeModel } from "../model";
import { NThemeAction } from "../action";
import * as Theme from "../ui/theme";

// const initialState: NRootState.IThemeState = {
//   palette: { type: "light" },
//   direction: "ltr"
// };

// export const themeReducer = handleActions<NRootState.IThemeState, IThemeModel>(
//   {
//     [NThemeAction.EType.CHANGE_PALETTE_TYPE]: (state, action) => ({
//       ...state,
//       palette: action.payload!.palette
//     }),
//     [NThemeAction.EType.CHANGE_DIRECTION]: (state, action) => ({
//       ...state,
//       direction: action.payload!.direction
//     })
//   },
//   initialState
// );

const initialState: NRootState.IThemeState = {
  theme: Theme.lightblue,
  themes: Object.keys(Theme),
  type: "lightblue",
};

export const themeReducer = handleActions<NRootState.IThemeState, IThemeModel>(
  {
    [NThemeAction.EType.CHANGE_THEME_TYPE]: (state, action) => ({
      ...state,
      type: action.payload!.type,
      theme: (Theme as any)[action.payload!.type]
    }),
  },
  initialState
);
