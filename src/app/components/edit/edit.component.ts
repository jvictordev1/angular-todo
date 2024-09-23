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
  // componente criado para lidar com a edição de tarefas
  todo: Todo | undefined;
  todoDate: string | undefined;
  isLoading: boolean = true;
  private todoId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodosService,
    private snackbar: MatSnackBar
  ) {}
  // utilização de serviços de rota, todoService e snackbar
  ngOnInit(): void {
    // quando o componente for renderizado
    const routeParams = this.route.snapshot.paramMap; // obtem parametros de rota
    this.todoId = Number(routeParams.get('id')); // obtem o parametro id da rota
    this.todoService.getTodoById(this.todoId).subscribe((data) => {
      // método para buscar tarefa com id passado na rota
      this.todo = data; // tarefa é colocada na propriedade todo
      this.todoDate = new Date(this.todo.dueDate).toISOString().slice(0, 16); // obtem data em formato ISOString
      this.isLoading = false; // seta carregamento de página para falso
    });
  }
  onSubmit(form: any) {
    // quando o formulário de edição for enviado
    if (form.valid) {
      // se os campos do formulário estiverem válidos
      const dueDate = new Date(form.value.dueDate); // atualiza data limite da tarefa
      const todo: Todo = {
        ...form.value,
        id: this.todoId,
        isComplete: this.todo!.isComplete,
        dueDate: dueDate,
      }; // constroi objeto do tipo Todo com dados do formulário
      this.todoService.updateTodo(todo).subscribe(); // chama serviço para atualizar Todo
      form.reset(); // reseta valores do input
      this.snackbar.open('Tarefa editada com sucesso', '', { duration: 5000 }); // snackbar de sucesso
      return;
    }
  }
}
