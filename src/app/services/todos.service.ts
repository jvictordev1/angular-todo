import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  // serviço criado para lidar com api do json-server
  private url: string = 'http://localhost:3000/todos'; // url da api
  constructor(private http: HttpClient) {} // utilização o serviço httpclient

  addNewTodo(todo: Todo) {
    // método utilizado para criar nova tarefa
    return this.http.post<Todo>(this.url, todo); // retorna observable para criação de nova tarefa
  }
  getAllTodos() {
    // método utilizado para retornar todas as tarefas
    return this.http.get<Todo[]>(this.url); // retorna observable para criação obtenção de todas tarefas
  }
  getTodoById(todoId: number) {
    // método utilizado para retornar tarefa com id igual ao parametro
    return this.http.get<Todo>(`${this.url}/${todoId}`); // retorna observable para obtenção de tarefa especifica
  }
  updateTodo(todo: Todo) {
    // método utilizado para atualizar tarefa com id igual ao parametro
    return this.http.put<Todo>(`${this.url}/${todo.id}`, todo); // retorna observable para atualizar uma dada tarefa
  }
  deleteTodo(todoId: number) {
    // método utilizado para apagar uma dada tarefa
    return this.http.delete<Todo>(`${this.url}/${todoId}`); // retorna observable para deletar uma dada tarefa
  }
}
