import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  minDate: string = '';
  constructor(
    private todoService: TodosService,
    private snackbar: MatSnackBar
  ) {}

  onSubmit(form: any) {
    if (form.valid) {
      const dateNow = new Date();
      const dueDate = new Date(form.value.dueDate);
      const todo: Todo = {
        ...form.value,
        createdAt: dateNow,
        dueDate: dueDate,
        id: (Math.random() * 10000).toFixed(0),
        isComplete: false,
      };
      this.todoService.addNewTodo(todo).subscribe();
      form.reset();
      this.snackbar.open('Tarefa criada com sucesso', '', { duration: 5000 });
      return;
    }
  }
}
