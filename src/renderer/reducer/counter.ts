import { NRootState } from "./root";
import { handleActions } from "redux-actions";
import { ICounterModel } from "../model";
import { NCounterAction } from "../action";

const intialState: NRootState.TCounterState = {
  count: 0
};

// export const reducerCounter = (
//   state: ICounterState = intialState,
//   action: TActionCounter
// ) => {
//   switch (action.type) {
//     case "COUNTER_INCREMENT":
//       return {
//         ...state,
//         counter: state.counter + 1
//       };
//     case "COUNTER_DECREMENT":
//       return {
//         ...state,
//         counter: state.counter - 1
//       };
//     default:
//       return state;
//   }
// };

export const counterReducer = handleActions<
  NRootState.TCounterState,
  ICounterModel
>(
  {
    [NCounterAction.EType.DECREMENT]: state => {
      return {
        ...state,
        count: state.count - 1
      };
    },
    [NCounterAction.EType.INCREMENT]: state => {
      console.log(state);
      return {
        ...state,
        count: state.count + 1
      };
    }
  },
  intialState
);
