import { applyMiddleware, createStore, DeepPartial, Reducer } from "redux";
import thunk from "redux-thunk";
import { IStateRoot, rootReducer } from "../reducer";

const enhancer = applyMiddleware(thunk);

// Argument of type 'IStateRoot | undefined' is not assignable to parameter of type 'DeepPartial<any> | undefined'.
// Type 'IStateRoot' is not assignable to type 'DeepPartial<any>'.
function configureStore(initialState?: DeepPartial<IStateRoot>) {
  return createStore(rootReducer as Reducer<any>, initialState, enhancer);
}

export default {
  configureStore,
};
