import { Component, OnInit } from '@angular/core';
import { Todo } from './interface/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo-angular';

  todos: Todo[] = [];
  todoInput = '';
  private;

  ngOnInit(): void {}

  create() {
    const newTodo: Todo = {
      title: this.todoInput,
      id: Date.now(),
      order: this.todos.length + 1,
      tomatoCount: 0,
      completed: false,
    };
    this.todos.push(newTodo);
    this.todoInput="";
  }

  private editTodo() {}
}
