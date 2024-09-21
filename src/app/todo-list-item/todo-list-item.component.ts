import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css',
})
export class TodoListItemComponent {
  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}
