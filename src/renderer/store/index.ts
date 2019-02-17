import { createHashHistory, createBrowserHistory } from "history";
import { routerActions, routerMiddleware } from "react-router-redux";
import { applyMiddleware, compose, createStore, DeepPartial, Reducer, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer, IRootState } from "../reducer";

// interface IDebugWindow extends Window {
//   __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (args: any) => any;
// }

// for use in modern web browsers that support the HTML5 history API
export const history = createBrowserHistory();
// for use in legacy web browsers
// export const history = createHashHistory();

export function configureStore(initialState?: DeepPartial<IRootState>) {
  const middlewares = [];

  middlewares.push(thunk);

  const router = routerMiddleware(history);
  middlewares.push(router);
  // Redux DevTools Configuration
  // const actionCreators = {
  //   ...routerActions,
  // };

  // const composeEnhancers = (window as IDebugWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  //   actionCreators,
  // });

  const composeEnhancers: any = process.env.NODE_ENV === "development" ? composeWithDevTools : compose;

  const logger = createLogger({
    collapsed: true,
    level: "info",
  });
  middlewares.push(logger);

  // tslint:disable-next-line:max-line-length
  const store: Store<{}> = createStore(rootReducer as Reducer<any>, initialState, composeEnhancers(applyMiddleware(...middlewares)));

  // if (module.hot) {
  //   module.hot.accept("../reducer", () => {
  //     store.replaceReducer(require("../reducer").default);
  //   });
  // }

  return store;
}
