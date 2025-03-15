import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, LandingComponent],
  template: `
    <app-landing *ngIf="isHomePage"></app-landing>
    <router-outlet *ngIf="!isHomePage"></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHomePage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHomePage = this.router.url === '/';
    });
  }
}
