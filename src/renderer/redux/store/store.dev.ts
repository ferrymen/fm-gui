import { createHashHistory } from "history";
import { routerActions, routerMiddleware } from "react-router-redux";
import { applyMiddleware, createStore, Reducer } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { IRootState, rootReducer } from "../reducer";

interface IDebugWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (args: any) => any;
}

const history = createHashHistory();

function configureStore(initialState?: IRootState) {
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

  return createStore(rootReducer as Reducer<any>, initialState, enhancer);
}

export default {
  configureStore,
  history,
};
