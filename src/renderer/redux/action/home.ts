import { IProject } from "../../types";
import { IActionHome } from "../../types";
import { IRootState } from "../reducer";

const addProject = (action: IActionHome): IActionHome => ({
  payload: action.payload,
  type: "HOME_ADD_PROJECT",
});

const removeProject = (action: IActionHome): IActionHome => ({
  payload: action.payload,
  type: "HOME_REMOVE_PROJECT",
});

export const ActionCreatorHome = {
  addProject,
  removeProject,
};
