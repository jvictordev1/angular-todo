import { Component } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos: Todo[] = [
    {
      id: 1,
      createdAt: 'ab',
      description: 'ab',
      dueDate: 'ab',
      isComplete: true,
      title: 'ab',
    },
    {
      id: 2,
      createdAt: 'bc',
      description: 'ab',
      dueDate: 'ab',
      isComplete: true,
      title: 'ab',
    },
    {
      id: 3,
      createdAt: 'cd',
      description: 'ab',
      dueDate: 'ab',
      isComplete: true,
      title: 'ab',
    },
    {
      id: 4,
      createdAt: 'ef',
      description: 'ab',
      dueDate: 'ab',
      isComplete: true,
      title: 'ab',
    },
  ];
  todosLength: number = 1;

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id); //deleta todo da interface
    this.todosLength = this.todos.length; //atualiza quantidade de itens na lista
  }
}
