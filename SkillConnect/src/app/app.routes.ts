import { Routes } from '@angular/router';
import { Register } from './register/register';
import { LoginComponent } from './login/login.component';
import { Home } from './home/home';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

 
  { path: 'register', component: Register },
  { path: 'home', component: Home }
];
