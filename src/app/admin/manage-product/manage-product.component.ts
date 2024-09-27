import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productservice.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css'] // แก้ไขชื่อเป็น styleUrls
})
export class ManageProductComponent implements OnInit {
  
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // ฟังก์ชันสำหรับดึงสินค้าทั้งหมด
  loadProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    }, (error) => {
      console.error('Error fetching products:', error); // เพิ่มการจัดการ error
    });
  }

  // ฟังก์ชันสำหรับเพิ่มสินค้า
  addProduct() {
    // Logic สำหรับการเพิ่มสินค้า
    console.log('Add product logic here');
  }

  // ฟังก์ชันสำหรับลบสินค้า
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts(); // โหลดสินค้าทั้งหมดใหม่หลังจากลบ
    }, (error) => {
      console.error('Error deleting product:', error); // เพิ่มการจัดการ error
    });
  }

  // ฟังก์ชันสำหรับแก้ไขสินค้า
  editProduct(product: any) {
    // Logic สำหรับการแก้ไขสินค้า
    console.log('Edit product logic here', product);
  }
}
