import { applyMiddleware, createStore, Reducer } from "redux";
import thunk from "redux-thunk";
import { IRootState, rootReducer } from "../reducer";

const enhancer = applyMiddleware(thunk);

function configureStore(initialState?: IRootState) {
  return createStore(rootReducer as Reducer<any>, initialState, enhancer);
}

export default {
  configureStore,
};
