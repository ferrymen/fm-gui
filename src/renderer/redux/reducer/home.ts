import { IHomeState } from "../../types";
import { RootActions } from "../action";

const intialState = {
  projects: [],
};

export const reducerHome = (
  state: IHomeState = intialState,
  action: RootActions,
) => {
  switch (action.type) {
    case "HOME_ADD_PROJECT":
      return {
        ...state,
        projects: state.projects.concat(action.payload.projects),
      };
    case "HOME_REMOVE_PROJECT":
      return {
        ...state,
        projects: state.projects.splice(action.payload.projects),
      };
    default:
      return state;
  }
};
