import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
  imports: [HeaderComponent, FooterComponent]
})
export class PropertyCardComponent {
  @Input() property: any; // Receive property data
  @Output() addToCartEvent = new EventEmitter<any>(); // Emit add-to-cart event
  @Output() deletePropertyEvent = new EventEmitter<number>(); // Emit delete event


  properties = [
    { id: 1, image: 'assets/property1.jpg', price: 50000, address: '123 Main Street, New York, NY' },
    { id: 2, image: 'assets/property2.jpg', price: 75000, address: '456 Elm Street, Los Angeles, CA' },
    { id: 3, image: 'assets/property3.jpg', price: 62000, address: '789 Maple Avenue, Chicago, IL' },
    { id: 4, image: 'assets/property4.jpg', price: 85000, address: '321 Oak Street, Houston, TX' },
    { id: 5, image: 'assets/property5.jpg', price: 92000, address: '654 Pine Avenue, San Francisco, CA' },
    { id: 6, image: 'assets/property6.jpg', price: 71000, address: '987 Cedar Road, Miami, FL' }
  ];

  deleteProperty(propertyId: number) {
    this.properties = this.properties.filter(property => property.id !== propertyId);
  }

}
