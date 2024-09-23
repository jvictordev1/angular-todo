import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodosService } from '../../services/todos.service';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListItemComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  // componente criado para lidar com lista de Todos
  todos: Todo[] = [];

  constructor(private todoService: TodosService) {} // utilização de serviço todoService

  ngOnInit(): void {
    // quando o componente for renderizado
    this.todoService.getAllTodos().subscribe((data) => {
      // chama método para obter todas as Tarefas
      this.todos = data; // atribui dados de retorno da api a propriedade todos
    });
  }

  deleteTodo(todo: Todo) {
    // método chamado quando uma tarefa for deletada
    this.todos = this.todos.filter((t) => t.id !== todo.id); //deleta a tarefa da interface
    this.todoService.deleteTodo(todo.id).subscribe(); // chama método do serviço para deletar tarefa do banco de dados
  }

  trackByFn(index: number, todo: Todo): number {
    // função criada para utilizar atributo trackBy no *ngFor
    return todo.id; // retorna id do todo
  }
}
