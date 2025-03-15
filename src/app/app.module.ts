// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// // import { AppComponent } from './app.component';
// // import { LandingComponent } from './landing/landing.component';
// // import { LoginComponent } from './login/login.component';
// // import { SignupComponent } from './signup/signup.component';
// import { RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { LandingComponent } from './landing/landing.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LandingComponent,
//     LoginComponent,
//     SignupComponent
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot([
//       { path: '', component: LandingComponent },
//       { path: 'login', component: LoginComponent },
//       { path: 'signup', component: SignupComponent }
//     ])
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    FormsModule,      
    LoginComponent,  // ✅ Import the standalone component instead of declaring it
    SignupComponent
  ]
})
export class AppModule { }
