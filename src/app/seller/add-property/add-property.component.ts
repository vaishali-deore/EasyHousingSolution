import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Import FormsModule here
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent {
  propertyName: string = '';
  propertyType: string = '';
  propertyOption: string = '';
  description: string = '';
  address: string = '';
  priceRange: number = 0;
  initialDeposit: number = 0;
  landmark: string = '';
  isActive: boolean = false;

  imagePreviews: string[] = []; // Store image URLs
  images: File[] = []; // Store selected image files
  errorMessage: string = ''; // Error message for exceeding limit

  constructor(private sellerService: SellerService, private router: Router) {}

  getSellerId(): number {
    const token = localStorage.getItem('authToken');
    if (!token) return 0;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.sellerId || 0; // Extract sellerId from token
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
      sellerId: this.getSellerId(),
    };

    console.log('Property Data:', propertyData);

    this.sellerService.addProperty(propertyData).subscribe(
      (response) => {
        console.log('Property Added Successfully:', response);
        alert('Property added successfully!');
        this.uploadImages(response.propertyId); // 🔹 Call uploadImages method
        this.router.navigate(['/seller/view-property']);
      },
      (error) => {
        console.error('Error adding property:', error);
        alert('Failed to add property. Please try again.');
      }
    );
  }

  //This func exceute when we upload image and save images in images array
  onFileSelect(event: any) {
    const selectedFiles: File[] = Array.from(event.target.files as FileList); // Explicit cast

    // Check if total images exceed 6
    if (this.images.length + selectedFiles.length > 6) {
      this.errorMessage = 'You can only upload a maximum of 6 images!';
      return;
    }

    this.errorMessage = ''; // Clear error if within limit

    for (let file of selectedFiles) {
      this.images.push(file); // Add file to images array

      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && e.target.result) {
          this.imagePreviews.push(e.target.result as string); // Add preview URL
        }
      };
      reader.readAsDataURL(file);
    }

    console.log('Selected Images:', this.images);
  }

  // this function after adding property and success res return the it will be excute
  uploadImages(propertyId: number) {
    this.sellerService.uploadImages(propertyId, this.images).subscribe(
      (response) => {

        alert(response.message);
        this.images = [];
        this.imagePreviews = [];
      },
      (error) => {
        console.log("error",error)
        alert('Image upload failed!');
      }
    );
  }
}
