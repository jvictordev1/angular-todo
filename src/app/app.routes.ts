import { Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: AddTodoComponent },
];
