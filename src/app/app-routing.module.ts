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
import { UpdatePropertyComponent } from './seller/update-property/update-property.component';
import { WishlistComponent } from './buyer/wishlist/wishlist.component';
// import { ViewPropertyOwnerComponent } from './admin/view-property-owner/view-property-owner.component';
// import { ViewPropertyRegionComponent } from './admin/view-property-region/view-property-region.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'seller', component: SellerLandingComponent },
  { path: 'seller/add-property', component: AddPropertyComponent },
  { path: 'seller', component: SellerLandingComponent },
  { path: 'admin', component: AdminLandingComponent   },
  { path: 'components/header', component: HeaderComponent },
  { path: 'update-property/:id', component: UpdatePropertyComponent },
  { path: 'buyer/wishlist', component: WishlistComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
