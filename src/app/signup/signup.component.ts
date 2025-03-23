import { Component } from '@angular/core';
// import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,  // ✅ This makes it a standalone component
  imports: [FormsModule,CommonModule,HeaderComponent,FooterComponent],  // ✅ Import FormsModule here
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userName: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  dateofBirth: string = '';
  phoneNo: string = '';
  address: string = '';
  emailId: string = '';
  userType: string = 'buyer';
  stateId: number | null = null;
  cityId: number | null = null;
  message: string = '';


  isSubmitted: boolean = false; // Track if form is submitted


  // Sample State & City Data (Ideally, fetch this from an API)
  states = [
    { id: 1, name: 'Maharashtra' },
    { id: 2, name: 'Karnataka' },
    { id: 3, name: 'Gujarat' }
  ];

  cities = [
    { id: 1, name: 'Mumbai', stateId: 1 },
    { id: 2, name: 'Pune', stateId: 1 },
    { id: 3, name: 'Bangalore', stateId: 2 },
    { id: 4, name: 'Mysore', stateId: 2 },
    { id: 5, name: 'Ahmedabad', stateId: 3 },
    { id: 6, name: 'Surat', stateId: 3 }
  ];

  filteredCities = this.cities; // Cities that change based on selected state

  constructor(private authService: AuthService, private router: Router) {}

  goToSingIn() {
    this.router.navigate(['/login']);
  }

  
  onStateChange(event: Event) {
    const selectedStateId = (event.target as HTMLSelectElement).value;
    this.stateId = Number(selectedStateId); // Convert to number
    this.filteredCities = this.cities.filter(city => city.stateId === this.stateId);
    this.cityId = null; // Reset city selection
  }
  
  signup() {

    this.isSubmitted = true; // Mark form as submitted to show red borders

    if (!this.userName.trim() || !this.password.trim() || !this.firstName.trim() || !this.lastName.trim() ||
        !this.dateofBirth || !this.phoneNo.trim() || !this.emailId.trim() || !this.address.trim() ||
        !this.stateId || !this.cityId || !this.userType) {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all required fields!',
        confirmButtonColor: '#218838'
      });

      return;
    }


    const signupPayload = {
      userName: this.userName,
      password: this.password,
      userType: this.userType,
      firstName: this.firstName,
      lastName: this.lastName,
      dateofBirth: this.dateofBirth,
      phoneNo: this.phoneNo,
      address: this.address,
      emailId: this.emailId,
      stateId: 2,
      cityId: 2
    };

    console.log('Signup Payload:', signupPayload);

    this.authService.signup(signupPayload).subscribe(
      (response) => {
        console.log('Signup Successful', response);
        this.message = 'Signup successful! Token: ' + response.token;
        alert('Signup Successful! Redirecting to login...');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Signup Failed', error);
        this.message = 'Signup failed: ' + (error.error?.error || 'Unknown error');
      }
    );
  }
}
