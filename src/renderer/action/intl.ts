import { createAction } from "redux-actions";
import { IIntlModel } from "../model";

export namespace NIntlAction {
  export enum EType {
    CHANGE_LOCALE = "CHANGE_LOCALET",
  }

  export const changeLocale = createAction<PartialPick<IIntlModel, "locale">>(
    EType.CHANGE_LOCALE
  )
}

export type OIntlAction = Omit<typeof NIntlAction, "EType">