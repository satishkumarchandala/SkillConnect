import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Home } from './home/home';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

 
  { path: 'register', component: Register },
  { path: 'home', component: Home }
];
