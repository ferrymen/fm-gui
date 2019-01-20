export interface IStateHome {
  projects: number;
}

export interface IActionHome {
  payload: IProject;
  type?: string;
}

export interface IProject {
  name: string;
  path: string;
}
