import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from './view-property.model';
import { SellerService } from '../../services/seller.service';
import { LoaderComponent } from '../../components/loader/loader.component';
import { catchError, forkJoin, map, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-view-property',
  standalone: true,
    imports: [CommonModule,LoaderComponent],  // ✅ Import FormsModule here
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {
  properties: Property[] = [];
  loading = false;


  constructor(private sellerService: SellerService, private router: Router) {}

  ngOnInit() {
    this.loadProperties();
  }

  // 🔹 Fetch Properties from API
  loadProperties() {
  this.loading = true;
    this.sellerService.getAllProperties().subscribe(
      (response) => {
        console.log('res::get all proeprty ',response)
        this.properties = response;
        this.loading = false;

        // Fetch image URLs for each property
        // this.properties.forEach((property) => {
        //   this.getImageByPropertyId(property.propertyId).subscribe((imageUrl) => {
        //     property.imageUrl = imageUrl; // Store image URL in the property object
        //   });
        //   });
          console.log("get all proeprty res",this.properties);

      },
      (error) => {
        console.error('Error fetching properties:', error);
        alert('Failed to fetch properties.');
        this.loading = false;

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
  
  getImageByPropertyId(propertyId: number): Observable<string> {
    return this.sellerService.getImageByPropertyId(propertyId).pipe(
      tap(response => console.log("API Response:", response)), // Log API response
      map(response => {
        const imageUrl = `data:image/jpeg;base64,${response}`; // Treat response as a Base64 string
        console.log("Converted Image URL:", imageUrl); // Log converted URL
        return imageUrl;
      }),
      catchError((error) => {
        console.error(`Error fetching image for property ${propertyId}:`, error);
        return of('property1.jpg'); // Fallback to default image
      })
    );
  }
  
}