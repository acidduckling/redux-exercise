import { TodoItem } from '../models/todo.model';
import * as Actions from '../actions/todo.actions';

export type Action = Actions.All;

const defaultState: TodoItem[] = [];

export function todoReducer(state: TodoItem[] = defaultState, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case Actions.CREATE_TODO:
      return [...state, action.payload];
    case Actions.REMOVE_TODO:
      return state.filter(v => v.id === action.payload);

    default:
      return defaultState;
  }
}
