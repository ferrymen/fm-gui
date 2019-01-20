import { IRootState } from "../reducer";

export type CounterAction = IIncrement | IDncrement;

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
    dispatch: (action: CounterAction) => void,
    getState: () => IRootState,
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
    dispatch: (action: CounterAction) => void,
  ) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
};
