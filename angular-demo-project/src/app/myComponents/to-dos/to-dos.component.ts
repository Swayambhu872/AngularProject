import { Component } from '@angular/core';
import { ToDo } from '../../model/ToDo';
import { NgFor } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
@Component({
  selector: 'app-to-dos',
  standalone: true,
  imports: [NgFor, TodoItemComponent],
  templateUrl: './to-dos.component.html',
  styleUrl: './to-dos.component.css',
})
export class ToDosComponent {
  todos: ToDo[];
  constructor() {
    this.todos = [
      {
        serialNo: 1,
        title: 'Study',
        description: 'Study everyday',
        active: true,
      },
      {
        serialNo: 2,
        title: 'Eat',
        description: 'Eat on time.',
        active: true,
      },
      {
        serialNo: 3,
        title: 'Sleep',
        description: 'Sleep on time',
        active: false,
      },
    ];
  }

  deleteTodo(todo: ToDo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
