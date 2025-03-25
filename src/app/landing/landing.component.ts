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

   imagePaths = [
    '/images/img_1.jpg',
    '/images/img_2.jpg',
    '/images/img_3.jpg',
    '/images/img_4.jpg',
    '/images/img_5.jpg',
    '/images/img_6.jpg',
    '/images/img_7.jpg',
    '/images/img_8.jpg',
    '/images/img_9.jpg',
    '/images/img_10.jpg'
];

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

        // if getting any issue to add image then uncomment this 
        // this.properties = response;


        // comment if any issue to add image
        this.properties = response.map(property => ({
          ...property,
          imageUrl: this.imagePaths[Math.floor(Math.random() * this.imagePaths.length)]
        }));


        this.loading = false;
      },
      (error) => {
        console.error('Error fetching properties:', error);
        alert('Failed to fetch properties.');
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
      }
    );
  }
}