import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LandingComponent } from './app/landing/landing.component';
import { LoginComponent } from './app/login/login.component';
import { SignupComponent } from './app/signup/signup.component';
import { SellerLandingComponent } from './app/seller/seller-landing/seller-landing.component';
import { AddPropertyComponent } from './app/seller/add-property/add-property.component';
import { ViewPropertyComponent } from './app/seller/view-property/view-property.component';
import { AdminLandingComponent } from './app/admin/admin-landing/admin-landing.component';
import { HeaderComponent } from './app/components/header/header.component';
import { ViewPropertyRegionComponent } from './app/admin/view-property-region/view-property-region.component';
import { ViewPropertyOwnerComponent } from './app/admin/view-property-owner/view-property-owner.component';
import { provideHttpClient } from '@angular/common/http';
import { UpdatePropertyComponent } from './app/seller/update-property/update-property.component';
import { WishlistComponent } from './app/buyer/wishlist/wishlist.component';

bootstrapApplication(AppComponent, {
  providers: [
    [provideHttpClient()],
    provideRouter([
      { path: '', component: LandingComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'seller', component: SellerLandingComponent },
      { path: 'seller/add-property', component: AddPropertyComponent },
      { path: 'seller/view-property', component: ViewPropertyComponent },
      { path: 'admin', component: AdminLandingComponent },
      { path: 'components/header', component: HeaderComponent },
      { path: 'view-property-owner', component: ViewPropertyOwnerComponent },
      { path: 'view-property-region', component: ViewPropertyRegionComponent },
      { path: 'update-property/:id', component: UpdatePropertyComponent },
        { path: 'buyer/wishlist', component: WishlistComponent },
      
    ]),
  ],
}).catch((err) => console.error(err));
