export interface Todo {
  items: TodoItem[];
  lastUpdate: Date;
}

export interface TodoItem {
  value: string;
  isDone: boolean;
}
