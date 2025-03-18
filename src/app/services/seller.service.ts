import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../seller/view-property/view-property.model';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private baseUrl = 'http://localhost:5052/api/Seller';

  constructor(private http: HttpClient) {}

  addProperty(propertyData: any): Observable<any> {
    const token = localStorage.getItem('authToken');  // 🔹 Get JWT Token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  // 🔹 Add Authorization Header
    });

    console.log(`${this.baseUrl}/AddProperty`, propertyData, { headers })

    return this.http.post(`${this.baseUrl}/AddProperty`, propertyData, { headers });
  }

   // 🔹 Get all properties
   getAllProperties(): Observable<Property[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Property[]>(`${this.baseUrl}/GetAllProperty`, { headers });
  }

  // 🔹 Delete a property
  deleteProperty(propertyId: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete(`${this.baseUrl}/DeleteProperty/${propertyId}`, { headers });
  }
}