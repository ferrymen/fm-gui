import { NRootState } from "./root";
import { handleActions } from "redux-actions";
import { InjectedIntl } from "react-intl";
import { NIntlAction } from "../action/intl";

const initialState: NRootState.TIntl = {
  locale: "en"
};

export const intlReducer = handleActions<NRootState.TIntl, InjectedIntl>(
  {
    [NIntlAction.EType.CHANGE_LOCALE]: (state, action) => {
      return {
        ...state,
        locale: action.payload!.locale
      };
    }
  },
  initialState
)
