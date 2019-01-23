import { NRootState } from "./root";
import { handleActions } from "redux-actions";
import { ITodoModel } from "../model";
import { NTodoAction } from "../action";

const initialState: NRootState.TTodoState = [
  {
    id: 1,
    text: "Demo",
    completed: false
  }
];

export const todoReducer = handleActions<NRootState.TTodoState, ITodoModel>(
  {
    [NTodoAction.EType.ADD_TODO]: (state, action) => {
      if (action.payload && action.payload.text) {
        return [
          {
            id: state.reduce((max, todo) => Math.max(todo.id || 1, max), 0) + 1,
            completed: false,
            text: action.payload.text
          },
          ...state
        ];
      }
      return state;
    },
    [NTodoAction.EType.DELETE_TODO]: (state, action) => {
      return state.filter(todo => todo.id !== action.payload!.id);
    },
    [NTodoAction.EType.EDIT_TODO]: (state, action) => {
      return state.map(todo => {
        if (!todo || !action || !action.payload) {
          return todo;
        }
        return (todo.id || 0) === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo;
      });
    },
    [NTodoAction.EType.COMPLETE_TODO]: (state, action) => {
      return state.map((todo) =>
        todo.id === (action.payload as any) ? { ...todo, completed: !todo.completed } : todo
      );
    },
    [NTodoAction.EType.COMPLETE_ALL]: (state, action) => {
      return state.map((todo) => ({ ...todo, completed: true }));
    },
    [NTodoAction.EType.CLEAR_COMPLETED]: (state, action) => {
      return state.filter((todo) => todo.completed === false);
    }
  },
  initialState
);
