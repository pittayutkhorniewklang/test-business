import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productservice.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router'; // เพิ่มการ import Router

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllProductComponent implements OnInit {
  products: any[] = [];  // ตัวแปรเก็บสินค้าทั้งหมด
  filteredProducts: any[] = [];  // ตัวแปรเก็บสินค้าที่ถูกกรอง

  constructor(
    private productService: ProductService, 
    private cartService: CartService,
    private router: Router  // Inject Router
  ) { }

  ngOnInit(): void {
    // ดึงข้อมูลสินค้าทั้งหมดจาก ProductService
    this.productService.getProducts().subscribe({
      next: (data: any[]) => {
        this.products = data;  // เก็บข้อมูลสินค้าทั้งหมด
        this.filterProducts(); // กรองสินค้าตามหมวดหมู่
      },
      error: (error) => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า:', error);  // แสดงข้อผิดพลาดหากดึงข้อมูลไม่สำเร็จ
      }
    });
  }

  // ฟังก์ชันกรองสินค้าตามหมวดหมู่
  filterProducts() {
    this.filteredProducts = this.products.filter(product => 
      product.category && product.category.includes('allproduct')
    );
  }

  // ฟังก์ชันสำหรับเพิ่มสินค้าไปยังตะกร้า
  addToCart(product: any) {
    const productToAdd = { ...product, quantity: 1 };  // กำหนดค่าเริ่มต้นให้ quantity เป็น 1
    console.log('Product added to cart:', productToAdd);  // ตรวจสอบว่าสินค้าที่ถูกเพิ่มมีข้อมูลครบถ้วนหรือไม่
    this.cartService.addToCart(productToAdd);  // เรียกใช้ CartService เพื่อเพิ่มสินค้าไปยังตะกร้า
    alert('เพิ่มสินค้าลงในตะกร้าแล้ว!');
    this.router.navigate(['/cart']);  // เพิ่มการนำทางไปหน้า cart หลังจากเพิ่มสินค้า
  }
}