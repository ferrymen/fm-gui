import { ICounterModel, ITodoModel, IThemeModel } from "../model";
import { RouterState } from "react-router-redux";

export interface IRootState {
  counter: NRootState.TCounterState;
  router?: RouterState;
  todos?: NRootState.TTodoState;
  theme: NRootState.IThemeState;
}

export namespace NRootState {
  export type TCounterState = ICounterModel;
  export type TTodoState = ITodoModel[];
  export type IThemeState = IThemeModel;
}
