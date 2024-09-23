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
  // componente card para tarefa
  @Input() todo!: Todo; // entrada do componente com dados sobre uma tarefa
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); // saída do componente com evento de click no botão de delete

  constructor(
    private todoService: TodosService,
    private snackbar: MatSnackBar
  ) {} // utilização de serviços todoService e snackbar

  onDelete(todo: Todo) {
    // método chamado quando o botão de delete for apertado
    this.deleteTodo.emit(todo); // emissão do evento deleteTodo na saída do componente
    this.snackbar.open('Tarefa excluida com sucesso', '', { duration: 5000 }); // snackbar de sucesso
  }
  onCompleted(todo: Todo) {
    // método chamado quando botão concluir for apertado
    todo.isComplete = !todo.isComplete; // alteração do status da tarefa
    this.todoService.updateTodo(todo).subscribe(); // chamada a api para atualizar tarefa
    this.snackbar.open('Tarefa completa com sucesso', '', { duration: 5000 }); // snackbar de sucesso
  }
}
