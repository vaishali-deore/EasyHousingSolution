// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   imports: [],
//   standalone: true,
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent {

// }
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // ✅ Import Router

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent implements OnInit {
  currentPath: string = ''; // ✅ Declare the property

  constructor(private route: ActivatedRoute, private router: Router) {} // ✅ Inject Router

  ngOnInit() {
    this.currentPath = this.route.snapshot.routeConfig?.path || '';
    console.log('Current Route Path:', this.currentPath);
  }

  logout() {
    confirm('are u want to log out application');
    // clear local storage
    localStorage.clear();
    // ✅ Clear session storage or authentication data if needed
    sessionStorage.clear();
    // ✅ Redirect to the home page
    this.router.navigate(['/']);
  }

  home() {
    this.router.navigate(['/']);
  }

  singUp() {
    this.router.navigate(['/signup']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  wishlist() {
    this.router.navigate(['/buyer/wishlist']);
  }

  signUpSeller() {
    this.router.navigate(['/signup']);
  }

  viewSellerProperties() {
    this.router.navigate(['seller/view-property']);
  }

  manageUsers() {
    alert('work in progress..!!');
  }

  viewAdminProperties() {
    this.router.navigate(['admin']);
  }
}
