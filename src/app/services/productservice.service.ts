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
  private apiUrlAddProduct = 'http://localhost/shop_backend/add_product.php'; // URL ของ API สำหรับเพิ่มสินค้า
  private apiUrlUpdateProduct = 'http://localhost/shop_backend/update_product.php'; // URL ของ API สำหรับอัปเดตสินค้า

  constructor(private http: HttpClient) {}

  // ฟังก์ชันสำหรับดึงสินค้าทั้งหมด
  getProducts(): Observable<any[]> {
    console.log('Fetching all products from API');
    return this.http.get<any[]>(this.apiUrlAllProducts);
  }

  // ฟังก์ชันสำหรับดึงสินค้าตาม ID
  getProductById(id: number): Observable<any> {
    const url = `${this.apiUrlProductById}?id=${id}`;
    console.log('Fetching product by ID from API:', url);
    return this.http.get<any>(url);
  }

  // ฟังก์ชันสำหรับลบสินค้า
  deleteProduct(id: number): Observable<any> {
    const url = `${this.apiUrlDeleteProduct}?id=${id}`;
    console.log('Deleting product by ID from API:', url);
    return this.http.delete(url);
  }

  // ฟังก์ชันสำหรับเพิ่มสินค้าใหม่
  addProduct(product: any): Observable<any> {
    console.log('Adding new product:', product);
    return this.http.post(this.apiUrlAddProduct, product); // ส่งข้อมูลสินค้าไปยัง API เพื่อเพิ่มสินค้า
  }

  // ฟังก์ชันสำหรับอัปเดตสินค้า
  updateProduct(product: any): Observable<any> {
    const url = `${this.apiUrlUpdateProduct}?id=${product.id}`;
    console.log('Updating product:', product);
    return this.http.put(url, product); // ส่งข้อมูลสินค้าไปยัง API เพื่ออัปเดต
  }
}
