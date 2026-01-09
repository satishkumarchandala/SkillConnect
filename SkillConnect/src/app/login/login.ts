import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  credentials = {
    mobileNumber: '',
    password: ''
  };

  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.errorMessage = '';

    // Get all registered users from session storage
    const users = JSON.parse(sessionStorage.getItem('registeredUsers') || '[]');
    
    // Find user with matching credentials
    const user = users.find((u: any) => 
      u.mobileNumber === this.credentials.mobileNumber && u.password === this.credentials.password
    );

    if (user) {
      // Store current user in session storage
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      
      // Redirect to home page
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid mobile number or password';
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
