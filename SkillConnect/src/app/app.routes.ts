import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'home', component: Home }
];
