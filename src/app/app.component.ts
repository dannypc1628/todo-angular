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

  ngOnInit(): void {
    var data = localStorage.getItem('todoList');
    if(data != null ) {
      this.todos = JSON.parse(data);
    }
  }

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
    this.save();
  }

  edit(id:number) {}

  addTomato(id:number){
    const todo = this.todos.find(x=>x.id === id);
    todo.tomatoCount = todo.tomatoCount+1;
    this.save();
  }

  save(){
    localStorage.setItem('todoList', JSON.stringify(this.todos));
  }
}
