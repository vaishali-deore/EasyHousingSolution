import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../../services/buyer.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import Swal from 'sweetalert2';
import { Property } from '../../landing/landing.component';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule, HeaderComponent, FooterComponent,LoaderComponent],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  buyerId = 101; // Dynamic if needed
  wishlist: any[] = [];
  loading = false;


  constructor(private wishlistService: BuyerService) {}

  ngOnInit() {
    this.loadWishlist();
  }

  loadWishlist() {
    this.loading = true;
    this.wishlistService.getWishlist(this.buyerId).subscribe(
      (data) => {
        this.wishlist = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading wishlist:', error);
        this.loading = false;
        
        // Set hardcoded wishlist data when an error occurs
        this.wishlist = [
          {
            propertyId: 1,
            propertyName: 'Luxury Apartment',
            propertyType: 'Apartment',
            propertyOption: 'Rent',
            address: 'Downtown, NY',
            priceRange: '$2000/month',
            initialDeposit: '$4000',
            landmark: 'Near Central Park',
            imageUrl: 'property1.jpg'
          },
          {
            propertyId: 2,
            propertyName: 'Cozy Cottage',
            propertyType: 'House',
            propertyOption: 'Buy',
            address: 'Countryside, TX',
            priceRange: '$150,000',
            initialDeposit: '$30,000',
            landmark: 'Near Green Hills',
            imageUrl: 'property2.jpg'
          },
          {
            propertyId: 3,
            propertyName: 'Modern Villa',
            propertyType: 'Villa',
            propertyOption: 'Buy',
            address: 'Beverly Hills, CA',
            priceRange: '$2,000,000',
            initialDeposit: '$500,000',
            landmark: 'Near Hollywood Sign',
            imageUrl: 'property3.jpg'
          }
        ];
      }
    );
  }
  

  deletePropertyFromWishList(propertyId: number) {
    console.log('Deleting property:', propertyId);
    this.wishlistService.deleteFromWishlist(this.buyerId, propertyId).subscribe(
      () => {
        alert('Property removed from wishlist!');
        this.loadWishlist();
      },
      (error) => {
        console.error('Error deleting property:', error);
      }
    );
  }

   buyProperty(property: Property) {
    console.log('Buying property:', property);
      Swal.fire({
        icon: 'success',
        title: 'Buy...',
        text: `Buying property: ${property}`,
        confirmButtonColor: '#218838',
      });
    }
}
