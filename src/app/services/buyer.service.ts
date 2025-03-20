import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../seller/view-property/view-property.model';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  private baseUrl = 'http://localhost:5052/api/Seller';

  constructor(private http: HttpClient) {}
     // 🔹 Get all properties
     getAllProperties(): Observable<Property[]> {
      const token = localStorage.getItem('authToken');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
  
      return this.http.get<Property[]>(`${this.baseUrl}/GetAllProperty`, { headers });
    }
  

    searchProperties(region: string, type: string, priceOrder: string) {
      console.log('searchProperties:', region, type, priceOrder);
      const url = `http://localhost:5052/api/Buyer/SearchProperty?region=${region}&type=${type}&priceOrder=${priceOrder || 'asc'}`;
      return this.http.get(url);
  }
  

  addToCart(property: any) {
  }

  viewCart() {  }

}