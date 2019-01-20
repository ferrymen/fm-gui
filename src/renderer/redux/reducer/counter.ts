import { RootActions } from "../action";

export interface ICounterState {
  counter: number;
}

const intialState = {
  counter: 0,
};

export const reducerCounter = (
  state: ICounterState = intialState,
  action: RootActions,
) => {
  switch (action.type) {
    case "COUNTER_INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "COUNTER_DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
