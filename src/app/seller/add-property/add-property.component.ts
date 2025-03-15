import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [FormsModule,CommonModule],  // ✅ Import FormsModule here
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  propertyType: string = '';
  propertyName: string = '';
  address: string = '';
  region: string = '';
  propertyOption: string = '';
  description: string = '';
  images: File[] = [];
  priceRange: string = '';
  initialDeposit: string = '';
  landmark: string = '';

  constructor(private router: Router) {}

  onFileSelect(event: any) {
    if (event.target.files) {
      this.images = Array.from(event.target.files);
    }
  }

  addProperty() {
    const propertyData = {
      propertyType: this.propertyType,
      propertyName: this.propertyName,
      address: this.address,
      region: this.region,
      propertyOption: this.propertyOption,
      description: this.description,
      images: this.images,
      priceRange: this.priceRange,
      initialDeposit: this.propertyOption === 'rent' ? this.initialDeposit : null,
      landmark: this.landmark
    };

    console.log('Property Data:', propertyData);
    alert('Property added successfully!');

    // Redirect to View Properties Page
    this.router.navigate(['/seller/view-property']);
  }
}
