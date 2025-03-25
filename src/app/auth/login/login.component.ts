import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  userName: string = '';  
  password: string = '';
  userType: string = '';

  userNameError: string = '';  
  passwordError: string = ''; 

  constructor(private authService: AuthService, private router: Router) {}

  singUp() {
    this.router.navigate(['/signup']);
  }

  login(event: Event) {
    event.preventDefault(); 

    this.userNameError = '';  
    this.passwordError = '';

    if (!this.userName.trim()) {
      this.userNameError = 'Username is required!';
    }
    if (!this.password.trim()) {
      this.passwordError = 'Password is required!';
    }

    // Stop login if errors exist
    if (this.userNameError || this.passwordError) {
      return;
    }

    this.authService.login(this.userName, this.password).subscribe(
      (response: any) => {
        console.log('Login Successful', response);
        
        // Extract user type and token from response
        this.userType = response.userType;
        const token = response.token;

        // Store in localStorage
        localStorage.setItem('userType', this.userType);
        localStorage.setItem('authToken', token);

        // Redirect based on userType
        if (this.userType.toLowerCase() === 'seller') {
          this.router.navigate(['/seller']);
        } else if (this.userType.toLowerCase() === 'buyer') {
          this.router.navigate(['/']);
        } else if (this.userType.toLowerCase() === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          alert('Invalid User Type!');
        }
      },
      (error:any) => {
        console.error('Login Failed', error);
        alert('Login Failed. Please check your credentials.');
      }
    );
  }
}