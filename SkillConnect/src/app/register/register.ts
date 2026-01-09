import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  user = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    userType: '',
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

  onUserTypeChange() {
    if (this.user.userType !== 'service-provider') {
      this.user.serviceType = '';
    }
  }

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }
    this.passwordMismatch = false;
    console.log('Form submitted:', this.user);
    // Add your registration logic here
  }
}
