// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin-view-property',
//   templateUrl: './view-property.component.html',
//   styleUrls: ['./view-property.component.css'],
//   standalone: true,
//   imports:[CommonModule]
// })
// export class AdminViewPropertyComponent {
//   properties = [
//     { id: 'P101', name: 'Luxury Villa', seller: 'John Doe' },
//     { id: 'P102', name: 'Beachfront Apartment', seller: 'Jane Smith' },
//     { id: 'P103', name: 'Downtown Condo', seller: 'Mike Johnson' }
//   ];

//   deleteProperty(propertyId: string) {
//     this.properties = this.properties.filter(p => p.id !== propertyId);
//   }
//   goToApproveProperty(){
//     alert('approved property')
//   }
// }


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css'],
  imports:[CommonModule],
  standalone: true
})
export class AdminViewPropertyComponent {
  properties = [
    { id: 'P101', name: 'Luxury Villa', seller: 'John Doe', approved: false },
    { id: 'P102', name: 'Beachfront Apartment', seller: 'Jane Smith', approved: false },
    { id: 'P103', name: 'Downtown Condo', seller: 'Mike Johnson', approved: false }
  ];

  deleteProperty(propertyId: string) {
    this.properties = this.properties.filter(p => p.id !== propertyId);
  }

  approveProperty(propertyId: string) {
    
    const property = this.properties.find(p => p.id === propertyId);
    if (property) {
      property.approved = true;
    }
    confirm('Approved SuccessFully')
  }

    goToApproveProperty(){
    alert('approved property by admin')
  }
}
