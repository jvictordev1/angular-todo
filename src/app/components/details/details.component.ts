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
  todo: Todo | undefined;
  isLoading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodosService
  ) {}
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const todoId = Number(routeParams.get('id'));
    this.todoService
      .getTodoById(todoId)
      .subscribe((data) => (this.todo = data));
    this.isLoading = false;
  }
}
