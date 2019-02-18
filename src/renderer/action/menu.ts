import { createAction } from "redux-actions";
import { IMenuModel } from "../model";

export namespace NMenuAction {
  export enum EType {
    CHANGE_MENU = "CHANGE_MENU",
  }

  export const changeMenu = createAction<PartialPick<IMenuModel, "path">>(
    EType.CHANGE_MENU
  )
}

export type OMenuAction = Omit<typeof NMenuAction, "EType">