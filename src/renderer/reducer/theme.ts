import { handleActions } from "redux-actions";
import { NRootState } from "./root";
import { IThemeModel } from "../model";
import { NThemeAction } from "../action";

const initialState: NRootState.IThemeState = {
  palette: { type: "light" },
  direction: "ltr"
};

export const themeReducer = handleActions<NRootState.IThemeState, IThemeModel>(
  {
    [NThemeAction.EType.CHANGE_PALETTE_TYPE]: (state, action) => ({
      ...state,
      palette: action.payload!.palette
    }),
    [NThemeAction.EType.CHANGE_DIRECTION]: (state, action) => ({
      ...state,
      direction: action.payload!.direction
    })
  },
  initialState
);
