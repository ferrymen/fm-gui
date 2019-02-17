import { createAction } from "redux-actions";
import { InjectedIntl } from "react-intl";

export namespace NIntlAction {
  export enum EType {
    CHANGE_LOCALE = "CHANGE_LOCALET",
  }

  export const changeLocale = createAction<PartialPick<InjectedIntl, "locale">>(
    EType.CHANGE_LOCALE
  )
}

export type OIntlAction = Omit<typeof NIntlAction, "EType">