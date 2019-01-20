import { createHashHistory } from "history";
import { routerActions, routerMiddleware } from "react-router-redux";
import { applyMiddleware, createStore, DeepPartial, Reducer } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { IStateRoot, rootReducer } from "../reducer";

interface IDebugWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (args: any) => any;
}

const history = createHashHistory();

function configureStore(initialState?: DeepPartial<IStateRoot>) {
  const middlewares = [];
  const enhancers = [];

  middlewares.push(thunk);

  const router = routerMiddleware(history);
  middlewares.push(router);
  // Redux DevTools Configuration
  const actionCreators = {
    ...routerActions,
  };

  const composeEnhancers = (window as IDebugWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    actionCreators,
  });

  const logger = createLogger({
    collapsed: true,
    level: "info",
  });
  middlewares.push(logger);

  enhancers.push(applyMiddleware(...middlewares));

  const enhancer = composeEnhancers(...enhancers);

  const store = createStore(rootReducer as Reducer<any>, initialState, enhancer);

  // if (module.hot) {
  //   module.hot.accept("../reducer", () => {
  //     store.replaceReducer(require("../reducer").default);
  //   });
  // }

  return store;
}

export default {
  configureStore,
  history,
};
