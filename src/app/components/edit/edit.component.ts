import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/Todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent implements OnInit {
  todo: Todo | undefined;
  todoDate: string | undefined;
  isLoading: boolean = true;
  private todoId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodosService,
    private snackbar: MatSnackBar
  ) {}
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.todoId = Number(routeParams.get('id'));
    this.todoService.getTodoById(this.todoId).subscribe((data) => {
      this.todo = data;
      this.todoDate = new Date(this.todo.dueDate).toISOString().slice(0, 16);
      this.isLoading = false;
    });
  }
  onSubmit(form: any) {
    if (form.valid) {
      const dateNow = new Date();
      const dueDate = new Date(form.value.dueDate);
      const todo: Todo = {
        ...form.value,
        id: this.todoId,
        createdAt: dateNow,
        dueDate: dueDate,
        isComplete: false,
      };
      this.todoService.updateTodo(todo).subscribe();
      form.reset();
      this.snackbar.open('Tarefa editada com sucesso', '', { duration: 5000 });
      return;
    }
  }
}
