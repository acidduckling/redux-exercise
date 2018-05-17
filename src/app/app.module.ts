import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { todoReducer } from './reducers/todo.reducer';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, DashboardComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      todoReducer: todoReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
