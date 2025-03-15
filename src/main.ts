import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LandingComponent } from './app/landing/landing.component';
import { LoginComponent } from './app/login/login.component';
import { SignupComponent } from './app/signup/signup.component';
import { SellerLandingComponent } from './app/seller/seller-landing/seller-landing.component';
import { AddPropertyComponent } from './app/seller/add-property/add-property.component';
import { ViewPropertyComponent } from './app/seller/view-property/view-property.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: LandingComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'seller', component: SellerLandingComponent },
      { path: 'seller/add-property', component: AddPropertyComponent },
      { path: 'seller/view-property', component: ViewPropertyComponent },
      
      
    ])
  ]
}).catch(err => console.error(err));
