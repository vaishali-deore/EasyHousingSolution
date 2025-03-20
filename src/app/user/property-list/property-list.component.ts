import { Component, OnInit } from '@angular/core';
import { Property } from './property.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Router } from '@angular/router';
import { PropertyCardComponent } from '../../components/property-card/property-card.component';
import { BuyerService } from '../../services/buyer.service';
import { FormsModule } from '@angular/forms';
// import { Property } from '../../models/property.model';

@Component({
  selector: 'app-property-list',
  imports: [CommonModule, HeaderComponent, FooterComponent,FormsModule],

  standalone:true,
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: any[] = [];
  searchParams = {
    region: '',
    type: '',
    priceOrder: ''
  };


  constructor(private propertyService: BuyerService,
    private router: Router
  ) {}


  
  ngOnInit() {
    this.loadProperties();
  }

  // 🔹 Fetch Properties from API
  loadProperties() {
    this.propertyService.getAllProperties().subscribe(
      (response) => {
        console.log('res::get all proeprty ',response)
        this.properties = response;
      },
      (error) => {
        console.error('Error fetching properties:', error);
        alert('Failed to fetch properties.');
      }
    );
  }

  // 🔍 Search Properties
  searchProperties() {
    console.log('searchParams:', this.searchParams);
    this.propertyService.searchProperties(this.searchParams.region,this.searchParams.type,this.searchParams.priceOrder).subscribe(
      (data:any) => {
        console.log("data search property",data);
        this.properties = data;
      },
      (error) => {
        console.error('Error searching properties:', error);
      }
    );
  }

  // 🛒 Add to Cart
  addToCart(property: any) {
    this.propertyService.addToCart(property);
    alert('Property added to cart!');
  }

  // 🛍 View Cart

  viewCart() {
    alert("Redirecting to cart...");
    this.router.navigate(['components/card']);  // Redirect to cart page
}

}
