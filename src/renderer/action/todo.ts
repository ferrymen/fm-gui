import { createAction } from "redux-actions";
import { ITodoModel } from "../model";

export namespace NTodoAction {
  export enum EType {
    ADD_TODO = "ADD_TODO",
    EDIT_TODO = "EDIT_TODO",
    DELETE_TODO = "DELETE_TODO",
    COMPLETE_TODO = "COMPLETE_TODO",
    COMPLETE_ALL = "COMPLETE_ALL",
    CLEAR_COMPLETED = "CLEAR_COMPLETED"
  }

  export const addTodo = createAction<PartialPick<ITodoModel, "text">>(
    NTodoAction.EType.ADD_TODO
  );
  export const editTodo = createAction<PartialPick<ITodoModel, "id">>(
    NTodoAction.EType.EDIT_TODO
  );
  export const deleteTodo = createAction<ITodoModel["id"]>(
    NTodoAction.EType.DELETE_TODO
  );
  export const completeTodo = createAction<ITodoModel["id"]>(
    NTodoAction.EType.COMPLETE_TODO
  );
  export const completeAll = createAction(NTodoAction.EType.COMPLETE_ALL);
  export const clearCompleted = createAction(NTodoAction.EType.CLEAR_COMPLETED);
}

export type OTodoAction = Omit<typeof NTodoAction, "EType">;
