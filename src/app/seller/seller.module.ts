import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerRoutingModule } from './seller-routing.module';
import { SellerLandingComponent } from './seller-landing/seller-landing.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ViewPropertyComponent } from './view-property/view-property.component';

@NgModule({
  imports: [
    CommonModule,
    SellerRoutingModule,
    SellerLandingComponent,  // ✅ Import standalone components
    AddPropertyComponent,  // ✅ Import standalone components
    ViewPropertyComponent  // ✅ Import standalone components
  ]
})
export class SellerModule { }
