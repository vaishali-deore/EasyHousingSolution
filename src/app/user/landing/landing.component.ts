import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  imports: [FooterComponent, HeaderComponent]
})
export class UserLandingComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/propertylist']); // Redirects to login page
  }
}
