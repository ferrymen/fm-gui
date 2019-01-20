import { IStateRoot } from "../reducer";

export type TActionCounter = IIncrement | IDncrement;

interface IIncrement {
  type: string;
}

interface IDncrement {
  type: string;
}

export const increment = () => ({
  type: "COUNTER_INCREMENT",
});

export const decrement = () => ({
  type: "COUNTER_DECREMENT",
});

export const incrementOdd = () => {
  return (
    dispatch: (action: TActionCounter) => void,
    getState: () => IStateRoot,
  ) => {
    const { counter } = getState().Counter;

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
};

export const incrementAsync = (delay: number = 1000) => {
  return (
    dispatch: (action: TActionCounter) => void,
  ) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
};
