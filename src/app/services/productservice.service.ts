import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ใช้ HttpClient สำหรับดึงข้อมูลจาก API
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrlAllProducts = 'http://localhost/shop_backend/get_all_products.php'; // URL ของ API สำหรับดึงสินค้าทั้งหมด
  private apiUrlProductById = 'http://localhost/shop_backend/get_product_by_id.php'; // URL ของ API สำหรับดึงสินค้าตาม ID
  private apiUrlDeleteProduct = 'http://localhost/shop_backend/delete_product.php'; // URL ของ API สำหรับลบสินค้า

  constructor(private http: HttpClient) {}

  // ฟังก์ชันสำหรับดึงสินค้าทั้งหมด
  getProducts(): Observable<any[]> {
    console.log('Fetching all products from API');  // ตรวจสอบการเรียก API
    return this.http.get<any[]>(this.apiUrlAllProducts);  // เรียก API ดึงข้อมูลสินค้าทั้งหมด
  }
  
  // ฟังก์ชันสำหรับดึงสินค้าตาม ID
  getProductById(id: number): Observable<any> {
    const url = `${this.apiUrlProductById}?id=${id}`;
    console.log('Fetching product by ID from API:', url);  // ตรวจสอบการเรียก API ด้วย ID
    return this.http.get<any>(url);  // เรียก API เพื่อดึงสินค้าตาม ID
  }

  // ฟังก์ชันสำหรับลบสินค้า
  deleteProduct(id: number): Observable<any> {
    const url = `${this.apiUrlDeleteProduct}?id=${id}`;
    console.log('Deleting product by ID from API:', url);  // ตรวจสอบการเรียก API สำหรับลบสินค้า
    return this.http.delete(url);  // เรียก API เพื่อทำการลบสินค้าตาม ID
  }
}
