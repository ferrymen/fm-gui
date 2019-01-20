export type TActionHome = IAddProject | IRemoveProject;

interface IAddProject {
  payload: any;
  type: string;
}

interface IRemoveProject {
  payload: any;
  type: string;
}

export const addProject = (action: TActionHome): TActionHome => ({
  payload: action.payload,
  type: "HOME_ADD_PROJECT",
});

export const removeProject = (action: TActionHome): TActionHome => ({
  payload: action.payload,
  type: "HOME_REMOVE_PROJECT",
});
