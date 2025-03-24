import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../../services/buyer.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  buyerId = 101; // Dynamic if needed
  wishlist: any[] = [];

  constructor(private wishlistService: BuyerService) {}

  ngOnInit() {
    this.loadWishlist();
  }

  loadWishlist() {
    this.wishlistService.getWishlist(this.buyerId).subscribe(
      (data) => {
        this.wishlist = data;
      },
      (error) => {
        console.error('Error loading wishlist:', error);
      }
    );
  }

  deleteProperty(propertyId: number) {
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

  buyProperty(propertyId: number) {
    this.wishlistService.buyProperty(propertyId).subscribe(
      () => {
        alert('Property purchased successfully!');
        this.loadWishlist();
      },
      (error) => {
        console.error('Error purchasing property:', error);
      }
    );
  }
}
