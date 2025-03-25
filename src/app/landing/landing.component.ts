import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BuyerService } from '../services/buyer.service';
import { MatDialog } from '@angular/material/dialog';
import { SellerDetailsDialogComponent } from '../components/seller-details-dialog/seller-details-dialog.component';
import Swal from 'sweetalert2';
import { LoaderComponent } from '../components/loader/loader.component';

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
    LoaderComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  properties: Property[] = [];
  loading = false;
  buyerId = 101; // Replace with dynamic buyerId if needed

  constructor(
    private router: Router,
    private propertyService: BuyerService,
    private dialog: MatDialog
  ) {}

  searchCriteria = {
    propertyType: '',
    region: '',
    priceRange: 'asc', // Default value set to 'asc'
  };

  showResults = false;

  userType: string | null = null;

  ngOnInit() {
    this.userType = localStorage.getItem('userType');
    this.loadProperties();
  }

  // 🔹 Fetch Properties from API or Set Default Data
  loadProperties() {
    this.loading = true;
    this.propertyService.getAllProperties().subscribe(
      (response) => {
        console.log('Fetched properties:', response);
        this.properties = response;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching properties:', error);
        alert('Failed to fetch properties.');
        // Load default data if API fails
        this.properties = [...defaultData];
        this.loading = false;
      }
    );
  }

  // 🔍 Search Properties
  searchProperties() {
    this.loading = true;
    console.log('Search criteria:', this.searchCriteria);
    this.propertyService
      .searchProperties(
        this.searchCriteria.region,
        this.searchCriteria.propertyType,
        this.searchCriteria.priceRange
      )
      .subscribe(
        (data: any) => {
          console.log('Search results:', data);
          this.properties = data;
          this.loading = false;
        },
        (error) => {
          console.error('Error searching properties:', error);
          this.loading = false;
        }
      );
  }

  // 🛍 View Cart
  // viewCart() {
  //   alert('Redirecting to cart...');
  //   this.router.navigate(['components/cart']); // Corrected path
  // }

  buyProperty(property: Property) {
    Swal.fire({
      icon: 'success',
      title: 'Oops...',
      text: `Buying property: ${property.propertyName}`,
      confirmButtonColor: '#218838',
    });
  }

  addToCart(property: any) {
    this.propertyService.addToCart(this.buyerId, property.propertyId).subscribe(
      (response) => {
        console.log('Added to cart:', response);
        // alert(`${property.propertyName} added to cart!`);
        Swal.fire({
          icon: 'success',
          title: 'Oops...',
          text: `${property.propertyName} added to cart!`,
          confirmButtonColor: '#218838',
        });
      },
      (error) => {
        console.error('Error adding to cart:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${property.propertyName} Not added !`,
          confirmButtonColor: '#218838',
        });
      }
    );
  }

  getSellerDetails(propertyId: number) {
    this.propertyService.getSellerDetails(propertyId).subscribe(
      (response) => {
        // Open the dialog with API response data
        this.dialog.open(SellerDetailsDialogComponent, {
          width: '400px',
          data: {
            sellerEmail: response.emailId,
            sellerPhone: response.phoneNumber,
          },
        });
      },
      (error) => {
        console.error('Error fetching seller details:', error);
        // const sellerData = {
        //   sellerName: 'John Doe',
        //   sellerPhone: '+91 9876543210',
        // };

        // // Open the dialog
        // this.dialog.open(SellerDetailsDialogComponent, {
        //   width: '400px',
        //   data: sellerData,
        // });
      }
    );
  }
}

// Default Property Data
const defaultData: Property[] = [
  {
    propertyId: 1,
    propertyName: 'Luxury Apartment',
    propertyType: 'apartment',
    propertyOption: 'sell',
    description: 'A beautiful apartment in the city center.',
    address: '123 Main Street',
    priceRange: 250000,
    initialDeposit: 20000,
    landmark: 'Near Central Park',
    isActive: true,
    sellerId: 101,
    imageUrl: 's4.jpg',
  },
  {
    propertyId: 2,
    propertyName: 'Cozy Villa',
    propertyType: 'villa',
    propertyOption: 'rent',
    description: 'Spacious villa with a garden.',
    address: '456 Lake View',
    priceRange: 1500,
    initialDeposit: 3000,
    landmark: 'Near Lake District',
    isActive: true,
    sellerId: 102,
    imageUrl: 's4.jpg',
  },
  {
    propertyId: 3,
    propertyName: 'Modern House',
    propertyType: 'house',
    propertyOption: 'sell',
    description: 'A modern house with a private pool.',
    address: '789 Sunset Blvd',
    priceRange: 400000,
    initialDeposit: 50000,
    landmark: 'Near Sunset Beach',
    isActive: true,
    sellerId: 103,
    imageUrl: 's4.jpg',
  },
  {
    propertyId: 4,
    propertyName: 'Commercial Office',
    propertyType: 'commercial',
    propertyOption: 'rent',
    description: 'A fully furnished office space.',
    address: '101 Corporate Avenue',
    priceRange: 5000,
    initialDeposit: 10000,
    landmark: 'Near Downtown',
    isActive: true,
    sellerId: 104,
    imageUrl: 's4.jpg',
  },
  {
    propertyId: 5,
    propertyName: 'Penthouse Suite',
    propertyType: 'apartment',
    propertyOption: 'sell',
    description: 'A luxurious penthouse with city views.',
    address: '202 High Rise Tower',
    priceRange: 900000,
    initialDeposit: 100000,
    landmark: 'Near City Center',
    isActive: true,
    sellerId: 105,
    imageUrl: 's4.jpg',
  },
  {
    propertyId: 6,
    propertyName: 'Countryside Cottage',
    propertyType: 'house',
    propertyOption: 'rent',
    description: 'A peaceful countryside retreat.',
    address: '303 Green Valley',
    priceRange: 2000,
    initialDeposit: 5000,
    landmark: 'Near Riverbank',
    isActive: true,
    sellerId: 106,
    imageUrl: 's4.jpg',
  },
];
