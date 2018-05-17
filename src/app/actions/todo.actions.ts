import { Action } from '@ngrx/store';
import { TodoItem } from '../models/todo.model';

export const CREATE_TODO = '[TODO] Create';
export const REMOVE_TODO = '[TODO] Remove';
export const TOGGLE_TODO = '[TODO] Toggle';
export const CLEAR_TODO = '[TODO] Clear';

export class CreateTodo implements Action {
  readonly type = CREATE_TODO;
  constructor(public payload: string) {}
}
export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;
  constructor(public payload: number) {}
}

export class ToggleTodo implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public payload: number) {}
}

export class ClearTodo implements Action {
  readonly type = CLEAR_TODO;
}

export type All = CreateTodo | RemoveTodo | ToggleTodo | ClearTodo;
