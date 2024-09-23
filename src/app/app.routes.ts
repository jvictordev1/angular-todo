import { Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // renderiza página home no index
  { path: 'new', component: AddTodoComponent }, // renderiza componente para adicionar nova tarefa no path 'new'
  { path: 'details/:id', component: DetailsComponent }, // renderiza página de detalhes de tarefa
  { path: 'edit/:id', component: EditComponent }, // renderiza página de edição de tarefa
]; // estabelecimento de rotas para aplicação
