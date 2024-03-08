import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../../model/ToDo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input()
  todo!: ToDo;

  @Output()
  onDelete: EventEmitter<ToDo> = new EventEmitter<ToDo>();

  onClick(todo: ToDo) {
    this.onDelete.emit(todo);
  }
}
