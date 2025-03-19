import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from './view-property.model';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'app-view-property',
  standalone: true,
    imports: [CommonModule],  // ✅ Import FormsModule here
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {
  properties: Property[] = [];

  constructor(private sellerService: SellerService, private router: Router) {}

  ngOnInit() {
    this.loadProperties();
  }

  // 🔹 Fetch Properties from API
  loadProperties() {
    this.sellerService.getAllProperties().subscribe(
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

  // 🔹 Navigate to Edit Property Page
  editProperty(id: number) {
    this.router.navigate([`/update-property/${id}`]);
  }

  // 🔹 Navigate to Add Property Page
  navigateToAddProperty() {
    this.router.navigate(['/seller/add-property']);
  }

  // 🔹 Delete Property
  deleteProperty(id: number) {
    if (confirm('Are you sure you want to delete this property?')) {
      this.sellerService.deleteProperty(id).subscribe(
        () => {
          this.properties = this.properties.filter(property => property.propertyId !== id);
          alert('Property deleted successfully.');
        },
        (error) => {
          console.error('Error deleting property:', error);
          alert('Failed to delete property.');
        }
      );
    }
  }
}