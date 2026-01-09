import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
  },

 
  { path: 'register', component: Register },
  { path: 'home', component: Home }
];
