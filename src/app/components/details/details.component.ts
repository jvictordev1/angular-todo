import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/Todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  // componente criado para mostrar detalhes sobre uma tarefa
  todo: Todo | undefined;
  isLoading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodosService
  ) {}
  // utilização de serviços de rota e todoService
  ngOnInit(): void {
    // quando o componente for renderizado
    const routeParams = this.route.snapshot.paramMap; // obtém parametros de rota
    const todoId = Number(routeParams.get('id')); // obtem parametro id da rota
    this.todoService
      .getTodoById(todoId)
      .subscribe((data) => (this.todo = data)); // utiliza service para obter todos as tarefas do banco
    this.isLoading = false; // seta a animação de carregamento de página para falso
  }
}
