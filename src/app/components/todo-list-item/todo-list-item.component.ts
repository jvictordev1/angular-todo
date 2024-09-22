import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Todo } from '../../models/Todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss',
})
export class TodoListItemComponent {
  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(
    private todoService: TodosService,
    private snackbar: MatSnackBar
  ) {}

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
    this.snackbar.open('Tarefa excluida com sucesso', '', { duration: 5000 });
  }
  onCompleted(todo: Todo) {
    todo.isComplete = !todo.isComplete;
    this.todoService.updateTodo(todo).subscribe();
    this.snackbar.open('Tarefa completa com sucesso', '', { duration: 5000 });
  }
}
