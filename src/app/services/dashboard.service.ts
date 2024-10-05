import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:3000/dashboard'; // URL ของ API

  constructor(private http: HttpClient) {}

  getTotalSales(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/total-sales`);
  }

  getNewOrders(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/new-orders`);
  }

  getActiveUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/active-users`);
  }

  getRevenue(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/revenue`);
  }
}
