import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  activeSection = 'home';
  currentUser: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    // Get current user from session storage
    const userStr = sessionStorage.getItem('currentUser');
    if (!userStr) {
      // If no user is logged in, redirect to login
      this.router.navigate(['/login']);
      return;
    }
    this.currentUser = JSON.parse(userStr);
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
