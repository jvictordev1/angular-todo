import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Todo } from '../../models/Todo';
import { TodosService } from '../../services/todos.service';
@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  constructor(private todoService: TodosService) {}
  onSubmit(form: any) {
    if (form.valid) {
      const todo: Todo = {
        createdAt: new Date(),
        id: (Math.random() * 10000).toFixed(0),
        isComplete: false,
        dueDate: new Date(form.value.dueDate),
        ...form.value,
      };
      this.todoService.addNewTodo(todo).subscribe();
      form.reset();
      return;
    }
  }
}
