import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../state';
import { Observable } from 'rxjs/Observable';
import * as Actions from '../actions/todo.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input() title = 'Dashboard';
  todos: Observable<Todo>;

  constructor(private store: Store<AppState>) {
    this.todos = store.select('todo');
  }

  deleteAll() {
    this.store.dispatch(new Actions.ClearTodo());
  }
}
