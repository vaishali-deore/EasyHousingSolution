import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'app-update-property',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent implements OnInit {
  propertyId!: number;
  propertyData: any = {
    propertyId: null,
    propertyName: '',
    propertyType: '',
    propertyOption: '',
    description: '',
    address: '',
    priceRange: null,
    initialDeposit: null,
    landmark: '',
    isActive: false,
    sellerId:2,
  };

  constructor(
    private route: ActivatedRoute,
    private propertyService: SellerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.propertyId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPropertyDetails();
  }

  loadPropertyDetails(): void {
    this.propertyService.getPropertyById(this.propertyId).subscribe(
      (response) => {
        this.propertyData = response;
      },
      (error) => {
        console.error('Error fetching property details:', error);
      }
    );
  }

  updateProperty(): void {

    console.log("pId",this.propertyId)    
    console.log("p Data",this.propertyData)
    this.propertyService.updateProperty(this.propertyId, this.propertyData).subscribe(
      (response) => {
        alert('Property updated successfully!');
        this.router.navigate(['/seller/view-property']);
      },
      (error) => {
        console.error('Error updating property:', error);
        alert('Failed to update property.');
      }
    );
  }
}
