import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  userType: string = '';  // ✅ Add this property

  // constructor(private authService: AuthService, private router: Router) {}
  constructor( private router: Router) {}


  login() {
    alert('login success')
    // this.authService.login(this.email, this.password).subscribe(
    //   (response: any) => {
        // console.log('Login Successful', response);

        // ✅ Store user type from response
        // this.userType = response.userType;
        localStorage.setItem('userType', this.userType);
        this.userType = 'seller';

        // ✅ Redirect based on userType
        if (this.userType === 'seller') {
          alert(this.userType)
          this.router.navigate(['/seller']);  // ✅ Navigate to seller landing page
        } else if (this.userType === 'buyer') {
          this.router.navigate(['/buyer']);
        } else if (this.userType === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          alert('Invalid User Type!');  // ✅ Handle unexpected values
        }
      }
      // (error) => {
      //   console.error('Login Failed', error);
      // }
    // );
  // }
}
