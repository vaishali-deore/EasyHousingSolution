import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../seller/view-property/view-property.model';

@Injectable({
  providedIn: 'root',
})
export class BuyerService {
  private baseUrl = 'http://localhost:5052/api/Seller';
  private sellerDetails = 'http://localhost:5052/api/Buyer/GetOwnerContactDetails';
  private addToWishList = 'http://localhost:5052/api/Gateway';
  private getWishList = 'http://localhost:5052/api/Buyer/GetWishlist';
  private DeleteFromWishList = 'http://localhost:5052/api/Gateway';

  constructor(private http: HttpClient) {}
  // 🔹 Get all properties
  getAllProperties(): Observable<Property[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<Property[]>(`${this.baseUrl}/GetAllProperty`, {
      headers,
    });
  }

  searchProperties(region: string, type: string, priceOrder: string) {
    console.log('searchProperties:', region, type, priceOrder);
    const url = `http://localhost:5052/api/Buyer/SearchProperty?region=${region}&type=${type}&priceOrder=${
      priceOrder || 'asc'
    }`;
    return this.http.get(url);
  }

  getSellerDetails(propertyId: number): Observable<any> {
    return this.http.get<any>(`${this.sellerDetails}?propertyId=${propertyId}`);
  }

  addToCart(buyerId: number, propertyId: number): Observable<any> {
    const url = `${this.addToWishList}/AddToWishList/?buyerId=${buyerId}&propertyId=${propertyId}`;
    return this.http.post(url, null); // No body needed
  }
  viewCart() {}

  getWishlist(buyerId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.getWishList}/?buyerId=${buyerId}`
    );
  }

  deleteFromWishlist(buyerId: number, propertyId: number): Observable<any> {
    return this.http.delete(
      `${this.DeleteFromWishList}/DeleteFromWishList/?buyerId=${buyerId}&propertyId=${propertyId}`
    );
  }
}
