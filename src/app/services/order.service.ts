import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:3000/orders'; // URL ของ API

  constructor(private http: HttpClient) {}

  // ฟังก์ชันสำหรับสร้างคำสั่งซื้อใหม่
  createOrder(order: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, order);
  }

  // ฟังก์ชันสำหรับดึงข้อมูลคำสั่งซื้อทั้งหมด (สำหรับหน้า Manage Orders)
  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // ฟังก์ชันสำหรับอัปเดตสถานะคำสั่งซื้อ
  updateOrderStatus(orderId: number, deliveryStatus: string, paymentStatus: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${orderId}`, { deliveryStatus, paymentStatus });
  }

  // ฟังก์ชันสำหรับรีเจ็คคำสั่งซื้อ
  rejectOrder(orderId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${orderId}`);
  }
}
