import { IRootState } from "../reducer";

export type counterAction = IIncrement | IDncrement;

interface IIncrement {
  type: string;
}

interface IDncrement {
  type: string;
}

const increment = () => ({
  type: "COUNTER_INCREMENT",
});

const decrement = () => ({
  type: "COUNTER_DECREMENT",
});

const incrementOdd = () => {
  return (
    dispatch: (action: counterAction) => void,
    getState: () => IRootState,
  ) => {
    const { counter } = getState().Counter;

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
};

const incrementAsync = (delay: number = 1000) => {
  return (
    dispatch: (action: counterAction) => void,
  ) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
};

export const actionCreators = {
  decrement,
  increment,
  incrementAsync,
  incrementOdd,
};
