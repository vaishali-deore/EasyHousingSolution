import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';

export interface Property {
  propertyId: number;
  propertyName: string;
  propertyType: string;
  propertyOption: string;
  description: string;
  address: string;
  priceRange: number;
  initialDeposit: number;
  landmark: string;
  isActive: boolean;
  sellerId: number;
  imageUrl: string;
}

@Component({
  selector: 'app-landing',
  standalone: true, // Mark it as standalone
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
  ], // Import CommonModule if needed
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  properties: Property[] = [];
  filteredProperties: Property[] = [];

  constructor(private sellerService: SellerService) {}

  searchCriteria = {
    propertyName: '',
    propertyType: '',
    propertyOption: '',
    description: '',
    address: '',
    priceRange: '',
    initialDeposit: '',
    landmark: '',
  };

  showResults = false;

  // 🔹 Fetch Properties from API
  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.sellerService.getAllProperties().subscribe(
      (response: Property[]) => {
        this.properties = response;
        this.filteredProperties = [...this.properties];
        console.log('Landing page response', this.properties);
      },
      (error) => {
        console.error('Error fetching properties:', error);
        alert('Failed to fetch properties.');
      }
    );
  }

  // Search Functionality
  searchProperties() {
    this.showResults = true;
    this.filteredProperties = this.properties.filter((property) => {
      return (
        (!this.searchCriteria.propertyName ||
          property.propertyName
            .toLowerCase()
            .includes(this.searchCriteria.propertyName.toLowerCase())) &&
        (!this.searchCriteria.propertyType ||
          property.propertyType === this.searchCriteria.propertyType) &&
        (!this.searchCriteria.propertyOption ||
          property.propertyOption
            .toLowerCase()
            .includes(this.searchCriteria.propertyOption.toLowerCase())) &&
        (!this.searchCriteria.description ||
          property.description
            .toLowerCase()
            .includes(this.searchCriteria.description.toLowerCase())) &&
        (!this.searchCriteria.address ||
          property.address
            .toLowerCase()
            .includes(this.searchCriteria.address.toLowerCase())) &&
        (!this.searchCriteria.priceRange ||
          property.priceRange.toString().includes(this.searchCriteria.priceRange)) &&
        (!this.searchCriteria.initialDeposit ||
          property.initialDeposit.toString().includes(this.searchCriteria.initialDeposit)) &&
        (!this.searchCriteria.landmark ||
          property.landmark
            .toLowerCase()
            .includes(this.searchCriteria.landmark.toLowerCase()))
      );
    });
  }
}
