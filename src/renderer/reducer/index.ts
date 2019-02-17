import { routerReducer, RouterState } from "react-router-redux";
import { combineReducers } from "redux";
import { IRootState, NRootState } from "./root";
import { todoReducer } from "./todos";
import { counterReducer } from "./counter";
import { themeReducer } from "./theme";
import { projectReducer } from "./projects";

export { IRootState, NRootState };

export const rootReducer = combineReducers<IRootState>({
  router: routerReducer,
  todos: todoReducer as any,
  counter: counterReducer as any,
  // theme: themeReducer as any,
  projects: projectReducer as any,
});
