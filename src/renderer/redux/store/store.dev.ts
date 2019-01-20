import { applyMiddleware, createStore, Reducer } from "redux";
import thunk from "redux-thunk";
import { IRootState, rootReducer } from "../reducer";
import { createLogger } from "redux-logger";

interface IDebugWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (args: any) => any;
}

function configureStore(initialState?: IRootState) {
  const middlewares = [];
  const enhancers = [];
  const composeEnhancers = (window as IDebugWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

  middlewares.push(thunk);

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
};
