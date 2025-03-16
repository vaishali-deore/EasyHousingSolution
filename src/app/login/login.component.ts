import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HeaderComponent,FooterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  userType: string = '';  // ✅ Add this property

  // currently we not api integrated
  // constructor(private authService: AuthService, private router: Router) {}
  constructor( private router: Router) {}


  singUp() {
    this.router.navigate(['/signup']);
  }

  login() {
    alert('login success')
    // this.authService.login(this.email, this.password).subscribe(
    //   (response: any) => {
        // console.log('Login Successful', response);

        // ✅ Store user type from response
        // this.userType = response.userType;

        // localStorage.setItem('userType', this.userType);
        this.userType = 'buyer';

        // ✅ Redirect based on userType
        if (this.userType.toLocaleLowerCase() === 'seller'.toLowerCase()) {
          alert(this.userType)
          this.router.navigate(['/seller']);  // ✅ Navigate to seller landing page
        } else if (this.userType === 'buyer') {
          this.router.navigate(['/userlanding']);
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
