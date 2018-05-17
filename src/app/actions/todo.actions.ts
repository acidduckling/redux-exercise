import { Action } from '@ngrx/store';
import { TodoItem } from '../models/todo.model';

export const CREATE_TODO = '[TODO] Create';
export const REMOVE_TODO = '[TODO] Remove';

export class CreateTodo implements Action {
  readonly type = CREATE_TODO;
  constructor(public payload: TodoItem) {}
}
export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;
  constructor(public payload: number) {}
}

export type All = CreateTodo | RemoveTodo;
