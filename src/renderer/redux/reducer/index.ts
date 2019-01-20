import { routerReducer, RouterState } from "react-router-redux";
import { combineReducers } from "redux";
import { IStateHome } from "../../types";
import { reducerCounter } from "./counter";
import { reducerHome } from "./home";

export interface IRootState {
  Counter: ICounterState;
  Home: IStateHome;
  Router: RouterState; // if no, don't jump
}

export const rootReducer = combineReducers({
  Counter: reducerCounter,
  Home: reducerHome,
  Router: routerReducer,
});
