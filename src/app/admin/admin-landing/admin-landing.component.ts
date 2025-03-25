import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { Property } from '../../landing/landing.component';

@Component({
  selector: 'app-admin-landing',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule,LoaderComponent],
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css'] // ✅ Fixed `styleUrls`
})
export class AdminLandingComponent implements OnInit {
  properties: any[] = [];
  searchRegion: string = '';
  searchOwner: string = '';
  loading: boolean = false;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.searchProperties(); // ✅ Call searchProperties() on load
  }

  // 🔍 Search (or Fetch All) Properties
  searchProperties() {
    this.loading = true;
    this.adminService.searchProperties(this.searchRegion, this.searchOwner).subscribe(
      (data: any) => {
        this.properties = data;
        this.loading = false;
      },
      (error) => {
            // 🌟 Default Property Data when backend fails
            // const defaultData: any[] = [
            //   {
            //     propertyId: 1,
            //     propertyName: 'Luxury Apartment',
            //     region:'deola',
            //     propertyType: 'apartment',
            //     propertyOption: 'sell',
            //     description: 'A beautiful apartment in the city center.',
            //     address: '123 Main Street',
            //     priceRange: 250000,
            //     initialDeposit: 20000,
            //     landmark: 'Near Central Park',
            //     isActive: true,
            //     sellerId: 101,
            //     imageUrl: 's4.jpg',
            //   },
            //   {
            //     propertyId: 2,
            //     propertyName: 'Cozy Villa',
            //     propertyType: 'villa',
            //     propertyOption: 'rent',
            //     description: 'Spacious villa with a private garden.',
            //     address: '456 Green Avenue',
            //     priceRange: 1500,
            //     initialDeposit: 300,
            //     landmark: 'Near Sunset Beach',
            //     isActive: false,
            //     sellerId: 102,
            //     imageUrl: 's4.jpg',
            //   }
            // ];
      
            // // Assign default data if API fails
            // this.properties = defaultData;
          console.error('Error fetching properties:', error);
            this.loading = false;
      
      }
    );
  }

  // ✅ Activate Property
  activateProperty(property: any) {
    if (!property.propertyId) {
      console.error("Property ID is missing!");
      return;
    }
  
    this.adminService.activateProperty(property.propertyId).subscribe(
      (response) => {
        console.log('Property activated:', response.message);
        alert(response.message || 'Property successfully activated!');
        
        // 🔄 Refresh property list after activation
        this.searchProperties();
      },
      (error) => {
        console.error('Error activating property:', error);
        alert('Failed to activate property. Please try again.');
      }
    );
  }
  

  deActivateProperty(property: any) {
    if (!property.propertyId) {
      console.error("Property ID is missing!");
      return;
    }
  
    const reason = prompt("Enter deactivation reason:"); // Ask for a reason
    if (!reason) {
      alert("Deactivation reason is required!");
      return;
    }
  
    console.log('Deactivating property with ID:', property.propertyId, 'Reason:', reason);
  
    this.adminService.deActivateProperty(property.propertyId, reason).subscribe(
      (response) => {
        console.log('Property deactivated:', response);
        alert(response.message || 'Property successfully deactivated!');
        
        // 🔄 Refresh property list after deactivation
        this.searchProperties();
      },
      (error) => {
        console.error('Error deactivating property:', error);
        alert('Failed to deactivate property. Please try again.');
      }
    );
  }
  
}
