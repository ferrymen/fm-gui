import { createAction } from "redux-actions";
import { IProjectModel } from "../model";

export namespace NProjectAction {
  export enum EType {
    ADD_PROJECT = "ADD_PROJECT",
    IMPORT_PROJECT = "IMPORT_PROJECT",
  }

  export const addProject = createAction<PartialPick<IProjectModel, "path">>(
    EType.ADD_PROJECT
  )

  export const importProject = createAction<PartialPick<IProjectModel, "path">>(
    EType.IMPORT_PROJECT
  )
}

export type OProjectAction = Omit<typeof NProjectAction, "EType">
