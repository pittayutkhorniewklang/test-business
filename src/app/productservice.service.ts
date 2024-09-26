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
    console.log('Fetching products from API');  // ตรวจสอบการเรียก API
    return this.http.get<any[]>(this.apiUrl);  // เรียก API ดึงข้อมูลสินค้าทั้งหมด
  }
  
  getProductById(id: number): Observable<any> {
    const url = `${this.apiUrlById}?id=${id}`;
    console.log('Fetching product by ID from API:', url);  // ตรวจสอบการเรียก API ด้วย ID
    return this.http.get<any>(url);  // เรียก API เพื่อดึงสินค้าตาม ID
  }
}
