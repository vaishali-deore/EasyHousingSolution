import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FormsModule,      
    LoginComponent,  
    SignupComponent,
    FooterComponent,
    HeaderComponent,
    RouterModule,
    
  ]
})
export class AppModule { }
