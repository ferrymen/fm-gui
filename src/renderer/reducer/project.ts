import { NRootState } from "./root";
import { handleActions } from "redux-actions";
import { IProjectModel } from "../model";
import { NProjectAction } from "../action";
import { getProjectInfoByPath } from "../utils";

const initialState: NRootState.IProjectState = [];

export const projectReducer = handleActions<NRootState.IProjectState, IProjectModel>(
  {
    [NProjectAction.EType.ADD_PROJECT]: (state, action) => {
      return state;
    },
    [NProjectAction.EType.IMPORT_PROJECT]: (state, action) => {
      if (action.payload && action.payload.path) {
        const projectInfo = getProjectInfoByPath(action.payload.path);
        return [
          ...state,
          {
            id: state.reduce((max, todo) => Math.max(todo.id || 1, max), 0) + 1,
            name: projectInfo.name,
            path: projectInfo.path,
            active: false,
          },
        ]
      }
      return state;
    },
    [NProjectAction.EType.SELECT_PROJECT]: (state, action) => {
      return state.map((project) => {
        if (!project || !action || !action.payload) {
          return project;
        }
        return project.id === action.payload.id ? { ...project, active: true } : { ...project, active: false }
      });
    },
  },
  initialState
)