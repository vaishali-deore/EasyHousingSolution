import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();

  getCompanyInfo(): string {
    return "Easy Housing Solutions - Your Trusted Real Estate Partner.";
  }

}
