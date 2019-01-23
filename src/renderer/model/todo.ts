
export interface ITodoModel {
  id: number;
  text: string;
  completed: boolean;
}

export namespace NTodoModel {
  export enum TFilter {
    SHOW_ALL = 'all',
    SHOW_ACTIVE = 'active',
    SHOW_COMPLETED = 'completed'
  }
}
