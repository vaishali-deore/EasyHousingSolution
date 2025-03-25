import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../landing/landing.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:5052/api/Admin/ViewProperty';

  constructor(private http: HttpClient) {}

  // 🔍 Fetch Properties (All or Filtered by Region & Owner)
  searchProperties(region: string = '', owner: string = ''): Observable<Property[]> {
    const token = localStorage.getItem('authToken');  // Get JWT Token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  // Add Authorization Header
    });

    // 🛠️ If no parameters, fetch all properties
    const url = region || owner ? `${this.apiUrl}?region=${region}&owner=${owner}` : this.apiUrl;
    return this.http.get<Property[]>(url, { headers });
  }

  activateProperty(propertyId: number): Observable<any> {
    const token = localStorage.getItem('authToken');  // 🔹 Get JWT Token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  // 🔹 Add Authorization Header
    });
  
    return this.http.put<any>(`http://localhost:5052/api/Admin/VerifyProperty/${propertyId}`, {}, { headers });
  }
  
  deActivateProperty(propertyId: number, reason: string): Observable<any> {
    const token = localStorage.getItem('authToken'); // Get JWT Token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Add Authorization Header
    });
  
    const url = `http://localhost:5052/api/Admin/DeactivateProperty/${propertyId}/${reason}`;
  
    return this.http.put<any>(url, {}, { headers });
  }
  

}
