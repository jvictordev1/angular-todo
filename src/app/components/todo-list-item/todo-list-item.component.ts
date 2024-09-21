import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
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
