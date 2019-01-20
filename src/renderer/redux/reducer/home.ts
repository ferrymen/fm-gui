import { IStateHome } from "../../types";
import { TActionHome } from "../action/home";

const intialState = {
  projects: [],
};

export const reducerHome = (
  state: IStateHome = intialState,
  action: TActionHome,
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
