import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-view-property-region',
  imports:[CommonModule,FormsModule,HeaderComponent,FooterComponent],
  standalone: true,
  templateUrl: './view-property-region.component.html',
  styleUrl: './view-property-region.component.css'
})
export class ViewPropertyRegionComponent {
  searchParams = { propertyName: '', regionName: '' };
  properties = [
    { id: 101, name: 'Sunset Villa', owner: 'John Doe', region: 'California', type: 'Villa', price: 500000 },
    { id: 102, name: 'Ocean Breeze', owner: 'Alice Smith', region: 'Florida', type: 'Apartment', price: 300000 },
    { id: 103, name: 'Mountain Retreat', owner: 'Bob Johnson', region: 'Colorado', type: 'Cottage', price: 450000 },
  ];

  filteredProperties = [...this.properties];

  searchProperties() {
    this.filteredProperties = this.properties.filter(p =>
      p.name.toLowerCase().includes(this.searchParams.propertyName.toLowerCase()) &&
      p.region.toLowerCase().includes(this.searchParams.regionName.toLowerCase())
    );
  }

  deleteProperty(id: number) {
    this.properties = this.properties.filter(p => p.id !== id);
    this.searchProperties();
  }

  approveProperty(id: number) {
    alert(`Property ID ${id} approved!`);
  }
}

