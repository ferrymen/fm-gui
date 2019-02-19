import { createAction } from "redux-actions";
import { IThemeModel } from "../model/theme";

export namespace NThemeAction {
  export enum EType {
    CHANGE_THEME_TYPE = "CHANGE_THEME_TYPE",
    CHANGE_PALETTE_TYPE = "CHANGE_PALETTE_TYPE",
    CHANGE_DIRECTION = "CHANGE_DIRECTION"
  }

  export const changeThemeType = createAction<PartialPick<IThemeModel, "type">>(EType.CHANGE_THEME_TYPE);

  // export const changePaletteType = createAction<
  //   PartialPick<IThemeModel, "palette">
  // >(EType.CHANGE_PALETTE_TYPE);

  // export const changeDirection = createAction<
  //   PartialPick<IThemeModel, "direction">
  // >(EType.CHANGE_DIRECTION);
}

export type OThemeAction = Omit<typeof NThemeAction, "EType">;
