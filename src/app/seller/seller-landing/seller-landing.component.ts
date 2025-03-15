// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-seller-landing',
//   standalone: true,
//   templateUrl: './seller-landing.component.html',
//   styleUrls: ['./seller-landing.component.css']
// })
// export class SellerLandingComponent {

//   constructor(private router: Router) {}

//   navigateToAddProperty() {
//     this.router.navigate(['/seller/add-property']);
//   }

//   navigateToViewProperty() {
//     this.router.navigate(['/seller/view-property']);
//   }
// }



import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-landing',
  standalone: true,
  imports: [CommonModule],  // ✅ Import FormsModule here
  templateUrl: './seller-landing.component.html',
  styleUrls: ['./seller-landing.component.css']
})
export class SellerLandingComponent {
  images: string[] = [
    'assets/property1.jpg',
    'assets/property2.jpg',
    'assets/property3.jpg'
  ];
  currentIndex = 0;

  constructor(private router: Router) {}

  navigateToAddProperty() {
    this.router.navigate(['/seller/add-property']);
  }

  navigateToViewProperty() {
    this.router.navigate(['/seller/view-property']);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
