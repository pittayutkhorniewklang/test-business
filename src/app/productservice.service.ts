import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ใช้ HttpClient สำหรับดึงข้อมูลจาก API
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost/shop_backend/get_products.php'; // URL ของ API สำหรับดึงสินค้าทั้งหมด
  private apiUrlById = 'http://localhost/shop_backend/get_products.php'; // URL ของ API สำหรับดึงสินค้าตาม ID

  constructor(private http: HttpClient) {}

  // ฟังก์ชันสำหรับดึงสินค้าทั้งหมด
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // เรียก API ดึงข้อมูลสินค้าทั้งหมด
  }

  // ฟังก์ชันสำหรับดึงสินค้าตาม ID
  getProductById(id: number): Observable<any> {
    const url = `${this.apiUrlById}?id=${id}`; // เพิ่ม ID เข้าไปใน URL สำหรับดึงสินค้าตาม ID
    return this.http.get<any>(url); // เรียก API เพื่อดึงสินค้าตาม ID
  }
}
