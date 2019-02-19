import { routerReducer, RouterState } from "react-router-redux";
import { combineReducers } from "redux";
import { IRootState, NRootState } from "./root";
import { todoReducer } from "./todos";
import { counterReducer } from "./counter";
import { themeReducer } from "./theme";
import { projectReducer } from "./project";
import { intlReducer } from "./intl";
import { menuReducer } from "./menu";

export { IRootState, NRootState };

export const rootReducer = combineReducers<IRootState>({
  intl: intlReducer as any,
  router: routerReducer,
  todos: todoReducer as any,
  counter: counterReducer as any,
  theme: themeReducer as any,
  projects: projectReducer as any,
  menu: menuReducer as any,
});
