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
  todos: Todo[] = [];

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id); //deleta todo da interface
    this.todoService.deleteTodo(todo.id).subscribe();
  }

  trackByFn(index: number, todo: Todo): number {
    return todo.id;
  }
}
