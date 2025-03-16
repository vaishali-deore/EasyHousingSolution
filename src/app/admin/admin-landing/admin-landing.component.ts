import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AdminViewPropertyComponent } from '../view-property/view-property.component';
import { Router } from '@angular/router';
import { ViewPropertyOwnerComponent } from '../view-property-owner/view-property-owner.component';

@Component({
  selector: 'app-admin-landing',
  imports: [HeaderComponent,FooterComponent,AdminViewPropertyComponent],
  standalone: true,
  templateUrl: './admin-landing.component.html',
  styleUrl: './admin-landing.component.css'
})
export class AdminLandingComponent {
  constructor(private router: Router) {}

 
  navigateToPropertyOwner() {
    this.router.navigate(['view-property-owner']); // ✅ Corrected path
  }

  navigateToPropertyRegion() {
    this.router.navigate(['view-property-region']); // ✅ Corrected path
  }
}
