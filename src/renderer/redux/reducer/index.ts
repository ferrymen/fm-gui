import { routerReducer, RouterState } from "react-router-redux";
import { combineReducers } from "redux";
import { counterReducer, ICounterState } from "./counter";

export interface IRootState {
  Counter: ICounterState;
  Router: RouterState; // if no, don't jump
}

export const rootReducer = combineReducers({
  Counter: counterReducer,
  Router: routerReducer,
});
