import { Component } from '@angular/core';
// import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,  // ✅ This makes it a standalone component
  imports: [FormsModule],  // ✅ Import FormsModule here
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  userType: string = 'buyer';

  // constructor(private authService: AuthService, private router: Router) {}

  signup() {
    console.log("Username:", this.username);
    console.log("Password:", this.password);
    console.log("User Type:", this.userType);
    alert('Sign Up Successful!');

    
    // this.authService.signup(this.username, this.password, this.userType).subscribe(
    //   response => {
    //     console.log('Signup Successful', response);
    //     this.router.navigate(['/login']); // Redirect to login after successful signup
    //   },
    //   error => {
    //     console.error('Signup Failed', error);
    //   }
    // );
  }
}
