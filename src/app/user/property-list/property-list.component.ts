import { Component } from '@angular/core';
import { Property } from './property.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Router } from '@angular/router';
import { PropertyCardComponent } from '../../components/property-card/property-card.component';
// import { Property } from '../../models/property.model';

@Component({
  selector: 'app-property-list',
  imports: [CommonModule, HeaderComponent, FooterComponent],
  standalone:true,
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  constructor(private router: Router) {}

  properties: Property[] = [
    {
      id: 1,
      image: 'assets/property1.jpg',
      price: 50000,
      address: '123 Main Street, New York, NY'
    },
    {
      id: 2,
      image: 'assets/property2.jpg',
      price: 75000,
      address: '456 Elm Street, Los Angeles, CA'
    },
    {
      id: 3,
      image: 'assets/property3.jpg',
      price: 62000,
      address: '789 Maple Avenue, Chicago, IL'
    },
    {
      id: 4,
      image: 'assets/property4.jpg',
      price: 85000,
      address: '101 Oak Street, Miami, FL'
    },
    {
      id: 5,
      image: 'assets/property5.jpg',
      price: 95000,
      address: '222 Pine Avenue, San Francisco, CA'
    },
    {
      id: 6,
      image: 'assets/property6.jpg',
      price: 72000,
      address: '333 Cedar Road, Houston, TX'
    }
];

  addToCart(property: Property) {
    console.log('Added to cart:', property);
    alert(`Property at ${property.address} added to cart!`);
  }

  viewCart() {
    alert("Redirecting to cart...");
    this.router.navigate(['components/card']);  // Redirect to cart page
}

}
