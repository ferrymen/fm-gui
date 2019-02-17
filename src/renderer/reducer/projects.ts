import { NRootState } from "./root";
import { handleActions } from "redux-actions";
import { IProjectModel } from "../model";
import { NProjectAction } from "../action";

const initialState: NRootState.IProjectState = [];

export const projectReducer = handleActions<NRootState.IProjectState, IProjectModel>(
  {
    [NProjectAction.EType.ADD_PROJECT]: (state, action) => {
      return state;
    },
    [NProjectAction.EType.IMPORT_PROJECT]: (state, action) => {
      console.log(action)
      if (action.payload && action.payload.path) {
        return [
          {
            id: state.reduce((max, todo) => Math.max(todo.id || 1, max), 0) + 1,
            path: action.payload.path
          },
          ...state
        ]
      }
      return state;
    }
  },
  initialState
)