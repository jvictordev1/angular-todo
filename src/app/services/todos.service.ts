import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private url: string = 'http://localhost:3000/todos';
  constructor(private http: HttpClient) {}

  addNewTodo(todo: Todo) {
    return this.http.post<Todo>(this.url, todo);
  }
  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }
  getTodoById(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.url}/${todoId}`);
  }
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.url}/${todo.id}`, todo);
  }
  deleteTodo(todoId: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.url}/${todoId}`);
  }
}
