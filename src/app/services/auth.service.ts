import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private signupUrl = 'http://localhost:5052/api/Auth/register'; // ✅ API endpoint
    private loginUrl = 'http://localhost:5052/api/Auth/login';

    constructor(private http: HttpClient) {}
  
    signup(signupPayload: any): Observable<any> {

        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
          });
          
        console.log("Auth Paylaod in auth service::",signupPayload,headers,this.signupUrl)
        return this.http.post(this.signupUrl, signupPayload, { headers });
    }


    login(userName: string, password: string): Observable<any> {
        console.log(`${this.loginUrl}?Username=${userName}&Password=${password}`)
        console.log('userName',userName," ","password",password)
        return this.http.post(`${this.loginUrl}?Username=${userName}&Password=${password}`,[]);
      }
  }
