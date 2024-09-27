import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/orders'; // เปลี่ยน URL ตามที่คุณใช้งานจริง

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addOrder(order: any): Observable<any> {
    return this.http.post(this.apiUrl, order);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
