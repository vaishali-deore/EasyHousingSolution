// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-view-property',
//   standalone: true,
//   imports: [CommonModule],  // ✅ Import FormsModule here
//   templateUrl: './view-property.component.html',
//   styleUrls: ['./view-property.component.css']
// })
// export class ViewPropertyComponent {
//   properties = [
//     { name: 'Luxury Villa', location: 'Mumbai' },
//     { name: 'Beach House', location: 'Goa' },
//     { name: 'Sky Apartment', location: 'Pune' }
//   ];
// }


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-property',
  standalone: true,
    imports: [CommonModule],  // ✅ Import FormsModule here
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent {
  properties = [
    { id: 1, name: 'Luxury Apartment', address: '123 Main St', region: 'Downtown', type: 'Apartment', price: '$200,000', option: 'Sell', verified: true },
    { id: 2, name: 'Cozy Villa', address: '456 Palm Rd', region: 'Suburb', type: 'Villa', price: '$500,000', option: 'Rent', verified: false },
    { id: 3, name: 'Modern House', address: '789 Oak Ave', region: 'Uptown', type: 'House', price: '$300,000', option: 'Sell', verified: true }
  ];

  constructor(private router: Router) {}

  editProperty(id: number) {
    alert(`Edit property with ID: ${id}`);
    this.router.navigate([`/seller/edit-property/${id}`]);
  }

  navigateToAddProperty() {
    this.router.navigate(['/seller/add-property']);  // ✅ Navigates to Add Property page
  }

  deleteProperty(id: number) {
    if (confirm('Are you sure you want to delete this property?')) {
      this.properties = this.properties.filter(property => property.id !== id);
      alert('Property deleted successfully.');
    }
  }
}
