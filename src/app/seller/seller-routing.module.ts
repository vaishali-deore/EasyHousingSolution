import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerLandingComponent } from './seller-landing/seller-landing.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ViewPropertyComponent } from './view-property/view-property.component';

const routes: Routes = [
  { path: '', component: SellerLandingComponent }, // Seller landing page
  { path: 'add-property', component: AddPropertyComponent }, // Add Property page
  { path: 'view-property', component: ViewPropertyComponent }, // View Property page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
