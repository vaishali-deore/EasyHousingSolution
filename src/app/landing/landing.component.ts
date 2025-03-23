import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-landing',
  standalone: true, // Mark it as standalone
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent], // Import CommonModule if needed
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent { }
