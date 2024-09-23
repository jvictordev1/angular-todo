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
  // este componente foi criado para lidar com o formulário de adição de nova tarefa
  constructor(
    private todoService: TodosService,
    private snackbar: MatSnackBar
  ) {}
  // no construtor, utilizo de dois serviços para alimentar o componente: snackbar para mostrar notificação de adição de nova tarefa
  // e todosService para lidar com as chamadas à api
  onSubmit(form: any) {
    // função responsável por lidar com a validação do formulário e chamada a api
    if (form.valid) {
      // caso o formulário seja válido
      const dateNow = new Date(); // obtenho data e hora atual (criação da tarefa)
      const dueDate = new Date(form.value.dueDate); // transformo a data e hora limite num objeto do tipo date
      const todo: Todo = {
        ...form.value,
        createdAt: dateNow,
        dueDate: dueDate,
        id: (Math.random() * 10000).toFixed(0),
        isComplete: false,
      }; // objeto do tipo Todo para registrar no banco de dados
      this.todoService.addNewTodo(todo).subscribe(); // chamada à api para adição de novo Todo
      form.reset(); // reset dos campos do formulário
      this.snackbar.open('Tarefa criada com sucesso', '', { duration: 5000 }); // snackbar de adição de nova tarefa
      return;
    }
  }
}
