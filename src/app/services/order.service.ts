import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrlOrders = 'http://localhost/shop_backend/get_orders.php';  // URL สำหรับดึงคำสั่งซื้อ
  private apiUrlRejectOrder = 'http://localhost/shop_backend/reject_order.php';  // URL สำหรับปฏิเสธคำสั่งซื้อ
  private apiUrlUpdateOrder = 'http://localhost/shop_backend/update_order.php';  // URL สำหรับอัปเดตคำสั่งซื้อ

  constructor(private http: HttpClient) {}

  // ดึงคำสั่งซื้อทั้งหมด
  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlOrders);
  }

  // ปฏิเสธคำสั่งซื้อ
  rejectOrder(orderId: number): Observable<any> {
    return this.http.post(this.apiUrlRejectOrder, { order_id: orderId });
  }

  // อัปเดตสถานะคำสั่งซื้อ
  updateOrderStatus(orderId: number, deliveryStatus: string, paymentStatus: string): Observable<any> {
    return this.http.put(this.apiUrlUpdateOrder, {
      order_id: orderId,
      delivery_status: deliveryStatus,
      payment_status: paymentStatus
    });
  }
}
