import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SellerLandingComponent } from './seller/seller-landing/seller-landing.component'
import { AddPropertyComponent } from './seller/add-property/add-property.component';
import { ViewPropertyComponent } from './seller/view-property/view-property.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'seller', component: SellerLandingComponent },
  { path: 'seller/add-property', component: AddPropertyComponent },
  { path: 'seller/view-property', component: ViewPropertyComponent },

  // Lazy load the Seller module
  // { path: 'seller', loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
