import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../../services/buyer.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import Swal from 'sweetalert2';
import { Property } from '../../landing/landing.component';
import { LoaderComponent } from '../../components/loader/loader.component';

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

  imagePaths = [
    'img_1.jpg',
    'img_2.jpg',
    'img_3.jpg',
    'img_4.jpg',
    'img_5.jpg',
    'img_6.jpg',
    'img_7.jpg',
    'img_8.jpg',
    'img_9.jpg',
    'img_10.jpg'
];

  constructor(private wishlistService: BuyerService) {}

  ngOnInit() {
    this.loadWishlist();
  }

  loadWishlist() {
    this.loading = true;
    this.wishlistService.getWishlist(this.buyerId).subscribe(
      (data) => {


        //uncommet if any issue to add image to wishlist
        // this.wishlist = data;


        // comment if any issue to add image to wishlist
        this.wishlist = data.map(property => ({
          ...property,
          imageUrl: this.imagePaths[Math.floor(Math.random() * this.imagePaths.length)]
        }));


        this.loading = false;
      },
      (error) => {
        console.error('Error loading wishlist:', error);
        this.loading = false;
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
