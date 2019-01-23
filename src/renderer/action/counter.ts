import { createAction } from "redux-actions";

export namespace NCounterAction {
  export enum EType {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    INCREMENT_IF_ODD = "INCREMENT_IF_ODD",
    INCREMENT_ASYNC = "INCREMENT_ASYNC"
  }

  export const increment = createAction(NCounterAction.EType.INCREMENT);
  export const decrement = createAction(NCounterAction.EType.DECREMENT);
  export const incrementIfOdd = createAction(
    NCounterAction.EType.INCREMENT_IF_ODD
  );
  export const incrementAsync = createAction(
    NCounterAction.EType.INCREMENT_ASYNC
  );
}

export type OCounterAction = Omit<typeof NCounterAction, "EType">;

// import { IStateRoot } from "../reducer";

// export type TActionCounter = IIncrement | IDncrement;

// interface IIncrement {
//   type: string;
// }

// interface IDncrement {
//   type: string;
// }

// export const increment = () => ({
//   type: "COUNTER_INCREMENT",
// });

// export const decrement = () => ({
//   type: "COUNTER_DECREMENT",
// });

// export const incrementOdd = () => {
//   return (
//     dispatch: (action: TActionCounter) => void,
//     getState: () => IStateRoot,
//   ) => {
//     const { counter } = getState().Counter;

//     if (counter % 2 === 0) {
//       return;
//     }

//     dispatch(increment());
//   };
// };

// export const incrementAsync = (delay: number = 1000) => {
//   return (
//     dispatch: (action: TActionCounter) => void,
//   ) => {
//     setTimeout(() => {
//       dispatch(increment());
//     }, delay);
//   };
// };
