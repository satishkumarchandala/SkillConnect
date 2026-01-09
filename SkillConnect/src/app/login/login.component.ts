import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  readonly form: FormGroup;
  errorMessage = '';

  constructor(private readonly fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { mobile, password } = this.form.value;
    this.errorMessage = '';

    // Get all registered users from session storage
    const users = JSON.parse(sessionStorage.getItem('registeredUsers') || '[]');
    
    // Find user with matching credentials
    const user = users.find((u: any) => 
      u.mobileNumber === mobile && u.password === password
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

  get mobileCtrl() {
    return this.form.get('mobile');
  }

  get passwordCtrl() {
    return this.form.get('password');
  }
}
