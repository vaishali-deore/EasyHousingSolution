import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [FormsModule,CommonModule],  // ✅ Import FormsModule here
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {  propertyName: string = '';
  propertyType: string = '';
  propertyOption: string = '';
  description: string = '';
  address: string = '';
  priceRange: number = 0;
  initialDeposit: number = 0;
  landmark: string = '';
  isActive: boolean = false;
  
  constructor(private sellerService: SellerService, private router: Router) {}

  getSellerId(): number {
    const token = localStorage.getItem('authToken');
    if (!token) return 0;
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.sellerId || 0;  // Extract sellerId from token
    } catch (error) {
      console.error('Error decoding token:', error);
      return 0;
    }
  }

  addProperty() {
    const propertyData = {
      propertyId: 0,
      propertyName: this.propertyName,
      propertyType: this.propertyType,
      propertyOption: this.propertyOption,
      description: this.description,
      address: this.address,
      priceRange: this.priceRange,
      initialDeposit: this.initialDeposit,
      landmark: this.landmark,
      isActive: false,
      sellerId: this.getSellerId()
    };

    console.log('Property Data:', propertyData);

    this.sellerService.addProperty(propertyData).subscribe(
      (response) => {
        console.log('Property Added Successfully:', response);
        alert('Property added successfully!');
        this.router.navigate(['/seller/view-property']);
      },
      (error) => {
        console.error('Error adding property:', error);
        alert('Failed to add property. Please try again.');
      }
    );
  }
}