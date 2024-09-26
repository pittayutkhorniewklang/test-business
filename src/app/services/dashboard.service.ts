import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'https://your-api-url.com/api'; // ปรับ URL ของ API ให้ถูกต้อง

  constructor(private http: HttpClient) {}

  getTotalSales(): Observable<any> {
    return this.http.get(`${this.apiUrl}/totalsales`); // ตัวอย่าง URL สำหรับดึงยอดขายรวม
  }

  getNewOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/neworders`); // ตัวอย่าง URL สำหรับดึงจำนวนออเดอร์ใหม่
  }

  getActiveUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/activeusers`); // ตัวอย่าง URL สำหรับดึงจำนวนผู้ใช้งานที่ยังคงใช้งาน
  }

  getRevenue(): Observable<any> {
    return this.http.get(`${this.apiUrl}/revenue`); // ตัวอย่าง URL สำหรับดึงรายได้รวม
  }
}
