import { NRootState } from "./root";
import { handleActions } from "redux-actions";
import { FormattedMessage } from "react-intl";
import { NIntlAction } from "../action/intl";
import { IIntlModel } from "../model";

const initialState: NRootState.TIntl = {
  locale: "en",
  FormattedMessage: FormattedMessage
};

export const intlReducer = handleActions<NRootState.TIntl, IIntlModel>(
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
