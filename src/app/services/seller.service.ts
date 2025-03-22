import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Property } from '../seller/view-property/view-property.model';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private baseUrl = 'http://localhost:5052/api/Seller';
  private apiUrl = 'http://localhost:5052/api/Seller/UploadImage';


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


  getPropertyById(propertyId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/GetPropertyById/${propertyId}`);
  }

  updateProperty(propertyId: number, propertyData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.baseUrl}/UpdateProperty/${propertyId}`, JSON.stringify(propertyData), { headers });
  }

  uploadImages(propertyId: number, images: File[]): Observable<any> {
    const formData = new FormData();
    
    images.forEach((image) => {
      formData.append('files', image);
    });

    return this.http.post(`${this.apiUrl}?propertyId=${propertyId}`, formData);
  }

  // getImageByPropertyId(propertyId: number) {
  //   return this.http.get(`${this.baseUrl}/ViewImage/${propertyId}`);

  //   // return this.http.get<string>(`${this.baseUrl}/ViewImage/${propertyId}`);
  // }

  getImageByPropertyId(propertyId: number): Observable<string> {
    return this.http.get<{ image1: string }>(`${this.baseUrl}/ViewImage/${propertyId}`).pipe(
        map(response => `data:image/jpeg;base64,${response.image1}`),  // Convert Base64 to image URL
        catchError((error) => {
            console.error(`Error fetching image for property ${propertyId}:`, error);
            return of('/assets/images/default-property.jpg'); // Default image on error
        })
    );
}


}