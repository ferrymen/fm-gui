import { combineReducers } from "redux";
import { counterReducer, ICounterState } from "./counter";

export interface IRootState {
  Counter: ICounterState;
}

export const rootReducer = combineReducers({
  Counter: counterReducer,
});
