import { ICounterModel, ITodoModel } from "../model";
import { RouterState } from "react-router-redux";

export interface IRootState {
  counter: NRootState.TCounterState;
  router?: RouterState;
  todos?: NRootState.TTodoState;
}

export namespace NRootState {
  export type TCounterState = ICounterModel;
  export type TTodoState = ITodoModel[];
}
