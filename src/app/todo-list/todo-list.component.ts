import { Component, OnInit, Input } from '@angular/core';
import { TodoItem, Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../state';
import { Observable } from 'rxjs/Observable';
import * as Actions from '../actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() listTitle: string;

  todos: Observable<Todo>;

  constructor(private store: Store<AppState>) {
    this.todos = store.select('todo');
  }

  ngOnInit() {}

  createTodoItem(value: string) {
    this.store.dispatch(new Actions.CreateTodo(value));
  }

  removeTodoItem(index: number) {
    this.store.dispatch(new Actions.RemoveTodo(index));
  }

  toggleDone(index: number) {
    this.store.dispatch(new Actions.ToggleTodo(index));
  }
}
