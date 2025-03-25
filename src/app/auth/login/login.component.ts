import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AuthService } from '../../services/auth.service';
// import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HeaderComponent,FooterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  userName: string = '';  // ✅ Used `username` instead of `email`
  password: string = '';
  userType: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  singUp() {
    this.router.navigate(['/signup']);
  }

  login() {
     
    let errorMessage = '';

    if (!this.userName.trim() && !this.password.trim()) {
      errorMessage = 'Username and Password are required!';
    } else if (!this.userName.trim()) {
      errorMessage = 'Username is required!';
    } else if (!this.password.trim()) {
      errorMessage = 'Password is required!';
    }
  
    if (errorMessage) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
        confirmButtonColor: '#218838'
      });
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