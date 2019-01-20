export interface IStateHome {
  projects: IProject[];
}

export interface IStateCounter {
  counter: number;
}

export interface IProject {
  name: string;
  path: string;
}
