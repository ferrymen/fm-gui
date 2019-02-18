import { ICounterModel, ITodoModel, IThemeModel, IProjectModel, IIntlModel, IMenuModel } from "../model";
import { RouterState } from "react-router-redux";

export interface IRootState {
  intl: NRootState.TIntl;
  counter: NRootState.TCounterState;
  router?: RouterState;
  todos?: NRootState.TTodoState;
  // theme: NRootState.IThemeState;
  projects: NRootState.IProjectState;
  menu: NRootState.TMenuState;
}

export namespace NRootState {
  export type TIntl = IIntlModel;
  export type TCounterState = ICounterModel;
  export type TTodoState = ITodoModel[];
  export type IThemeState = IThemeModel;
  export type IProjectState = IProjectModel[];
  export type TMenuState = IMenuModel;
}
