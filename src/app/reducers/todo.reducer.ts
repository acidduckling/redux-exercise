import { TodoItem, Todo } from '../models/todo.model';
import * as Actions from '../actions/todo.actions';

export type Action = Actions.All;

const defaultState: Todo = {
  items: [
    {
      isDone: false,
      value: 'Default value'
    }
  ],
  lastUpdate: new Date()
};

export function todoReducer(state: Todo = defaultState, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case Actions.CREATE_TODO:
      const newToDo: TodoItem = {
        isDone: false,
        value: action.payload
      };

      return {
        items: [...state.items, newToDo],
        lastUpdate: new Date()
      } as Todo;

    case Actions.REMOVE_TODO:
      return {
        items: state.items.filter((v, i) => i !== action.payload),
        lastUpdate: new Date()
      } as Todo;

    case Actions.TOGGLE_TODO:
      const newState = {
        items: [...state.items],
        lastUpdate: new Date()
      } as Todo;
      newState.items[action.payload].isDone = !newState.items[action.payload]
        .isDone;
      return newState;

    case Actions.CLEAR_TODO:
      return {
        items: [],
        lastUpdate: new Date()
      } as Todo;
    default:
      return defaultState;
  }
}
