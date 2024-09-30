import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ใช้ HttpClient สำหรับดึงข้อมูลจาก API
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrlAllProducts = 'http://localhost/shop_backend/get_products.php'; // URL ของ API สำหรับดึงสินค้าทั้งหมด
  private apiUrlProductById = 'http://localhost/shop_backend/get_products.php'; // URL ของ API สำหรับดึงสินค้าตาม ID
  private apiUrlDeleteProduct = 'http://localhost/shop_backend/delete_product.php'; // URL ของ API สำหรับลบสินค้า
  private apiUrlAddProduct = 'http://localhost/shop_backend/add_product.php'; // URL ของ API สำหรับเพิ่มสินค้า
  private apiUrlEditProduct = 'http://localhost/shop_backend/edit_product.php'; // URL ของ API สำหรับแก้ไขสินค้า
  private apiUrlIncreaseStock = 'http://localhost/shop_backend/increase_stock.php'; // URL สำหรับเพิ่มสต็อก
  private apiUrlReduceStock = 'http://localhost/shop_backend/reduce_stock.php'; // URL สำหรับลดสต็อก

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

  // ฟังก์ชันสำหรับแก้ไขสินค้า
  editProduct(product: any): Observable<any> {
    const formData = new FormData();
    formData.append('id', product.id);
    formData.append('name', product.name);
    formData.append('category', product.category);
    formData.append('brand', product.brand);
    formData.append('stock', product.stock.toString());  // แปลง stock เป็น string เพื่อให้เข้ากับ FormData
    formData.append('price', product.price.toString());  // แปลง price เป็น string เพื่อให้เข้ากับ FormData
    formData.append('description', product.description);

    if (product.file) {
      formData.append('file', product.file); // เพิ่มไฟล์ถ้ามีการเลือกไฟล์ใหม่
    }

    console.log('Editing product:', formData);
    return this.http.post(this.apiUrlEditProduct, formData); // ใช้ POST เพื่อแก้ไขสินค้า
  }

  // ฟังก์ชันสำหรับเพิ่มสต็อก
  increaseStock(productId: number, quantity: number): Observable<any> {
    const formData = new FormData();
    formData.append('product_id', productId.toString());
    formData.append('quantity', quantity.toString());

    console.log('Increasing stock for product:', productId, 'by quantity:', quantity);
    return this.http.post(this.apiUrlIncreaseStock, formData);
  }

  // ฟังก์ชันสำหรับลดสต็อก
  reduceStock(productId: number, quantity: number): Observable<any> {
    const formData = new FormData();
    formData.append('product_id', productId.toString());
    formData.append('quantity_sold', quantity.toString());

    console.log('Reducing stock for product:', productId, 'by quantity:', quantity);
    return this.http.post(this.apiUrlReduceStock, formData);
  }
}
