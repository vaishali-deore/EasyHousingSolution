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
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-seller-landing',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FooterComponent],  // ✅ Import FormsModule here
  templateUrl: './seller-landing.component.html',
  styleUrls: ['./seller-landing.component.css']
})
export class SellerLandingComponent {
 
  // currentSlide = 0;
  // currentIndex = 0;

  // currentIndex = 0;
  // totalSlides = 5; // Updated to 5 slides

  constructor(private router: Router) {}

  navigateToAddProperty() {
    this.router.navigate(['/seller/add-property']);
  }

  navigateToViewProperty() {
    this.router.navigate(['/seller/view-property']);
  }

  currentSlideIndex = 0;

  nextSlide() {
    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    if (this.currentSlideIndex < totalSlides - 1) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0; // Loop back to first image
    }
    this.updateSlidePosition();
  }
  
  prevSlide() {
    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = totalSlides - 1; // Loop to last image
    }
    this.updateSlidePosition();
  }
  
  updateSlidePosition() {
    const carouselWrapper = document.querySelector('.carousel-wrapper') as HTMLElement;
    carouselWrapper.style.transform = `translateX(-${this.currentSlideIndex * 100}%)`;
  }
  
  
}
