import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SellerLandingComponent } from './seller/seller-landing/seller-landing.component'
import { AddPropertyComponent } from './seller/add-property/add-property.component';
import { ViewPropertyComponent } from './seller/view-property/view-property.component';
import { AdminLandingComponent } from './admin/admin-landing/admin-landing.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminViewPropertyComponent } from './admin/view-property/view-property.component';
import { ViewPropertyOwnerComponent } from './admin/view-property-owner/view-property-owner.component';
import { ViewPropertyRegionComponent } from './admin/view-property-region/view-property-region.component';
import { UserLandingComponent } from './user/landing/landing.component';
import { PropertyListComponent } from './user/property-list/property-list.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { UpdatePropertyComponent } from './seller/update-property/update-property.component';
// import { ViewPropertyOwnerComponent } from './admin/view-property-owner/view-property-owner.component';
// import { ViewPropertyRegionComponent } from './admin/view-property-region/view-property-region.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'seller', component: SellerLandingComponent },
  { path: 'seller/add-property', component: AddPropertyComponent },
  { path: 'seller', component: SellerLandingComponent },
  { path: 'admin', component: AdminLandingComponent 


    // children: [
    //   { path: 'view-property-owner', component: ViewPropertyOwnerComponent },
    //   { path: 'view-property-region', component: ViewPropertyRegionComponent }
    // ]

  },
  { path: 'components/header', component: HeaderComponent },
  { path: 'admin/view-property', component: AdminViewPropertyComponent },
  { path: 'view-property-owner', component: ViewPropertyOwnerComponent },
  { path: 'view-property-region', component: ViewPropertyRegionComponent },
  { path: 'userlanding', component: UserLandingComponent },
  { path: 'propertylist', component: PropertyListComponent },
  { path: 'components/card', component: PropertyCardComponent },
  { path: 'update-property/:id', component: UpdatePropertyComponent },
  
  



  // Lazy load the Seller module
  // { path: 'seller', loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
