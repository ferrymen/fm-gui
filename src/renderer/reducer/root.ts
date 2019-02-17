import { ICounterModel, ITodoModel, IThemeModel, IProjectModel } from "../model";
import { RouterState } from "react-router-redux";

export interface IRootState {
  counter: NRootState.TCounterState;
  router?: RouterState;
  todos?: NRootState.TTodoState;
  // theme: NRootState.IThemeState;
  projects: NRootState.IProjectState;
}

export namespace NRootState {
  export type TCounterState = ICounterModel;
  export type TTodoState = ITodoModel[];
  export type IThemeState = IThemeModel;
  export type IProjectState = IProjectModel[];
}
