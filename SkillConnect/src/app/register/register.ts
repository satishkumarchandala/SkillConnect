import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registrationSuccess = false;

  constructor(private router: Router) {}

  customer = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    customerType: '',
    serviceType: ''
  };

  serviceTypes = [
    'Plumber',
    'Electrician',
    'Carpenter',
    'Painter',
    'Mason',
    'AC Technician',
    'Appliance Repair',
    'Cleaner',
    'Gardener',
    'Pest Control'
  ];

  passwordMismatch = false;

  onCustomerTypeChange() {
    if (this.customer.customerType !== 'service-provider') {
      this.customer.serviceType = '';
    }
  }

  onSubmit() {
    if (this.customer.password !== this.customer.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }
    this.passwordMismatch = false;

    // Get existing users from session storage
    const users = JSON.parse(sessionStorage.getItem('registeredUsers') || '[]');
    
    // Check if user already exists
    const existingUser = users.find((u: any) => u.email === this.customer.email);
    if (existingUser) {
      alert('User with this email already exists!');
      return;
    }

    // Add new user to the array
    users.push({
      fullName: this.customer.fullName,
      email: this.customer.email,
      password: this.customer.password,
      mobileNumber: this.customer.mobileNumber,
      customerType: this.customer.customerType,
      serviceType: this.customer.serviceType
    });

    // Save back to session storage
    sessionStorage.setItem('registeredUsers', JSON.stringify(users));

    // Show success and redirect to login
    this.registrationSuccess = true;
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1500);
  }
}
