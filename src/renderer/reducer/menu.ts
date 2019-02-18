import { handleActions } from "redux-actions";
import { NRootState } from ".";
import { IMenuModel } from "../model";
import { NMenuAction } from "../action";
import { Storage, Favorite, Settings } from "@material-ui/icons";

const initialState: NRootState.TMenuState = {
  childrens: ["/project", "/counter", "/setting"],
  icons: [Storage, Favorite, Settings],
  actived: 0,
  path: "/project"
}

export const menuReducer = handleActions<NRootState.TMenuState, IMenuModel>(
  {
    [NMenuAction.EType.CHANGE_MENU]: (state, action) => {
      return {
        ...state,
        actived: state.childrens.indexOf(action.payload!.path),
        path: action.payload!.path
      }
    }
  },
  initialState
)