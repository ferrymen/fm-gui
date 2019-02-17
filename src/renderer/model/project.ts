export interface IProjectModel {
  id: number;
  name: string;
  path: string;
  active: boolean;
}

export namespace NProjectModel {
  export enum EFilter {
    ACTIVE = "active"
  }
}
