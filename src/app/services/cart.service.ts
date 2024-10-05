import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];  // ตัวแปรเก็บสินค้าในตะกร้า

  constructor() {}

  // ฟังก์ชันสำหรับเพิ่มสินค้าไปยังตะกร้า
  addToCart(product: any) {
    this.cart.push(product);
    console.log('Product added to cart:', product);  // ตรวจสอบว่าการเพิ่มสินค้าทำงาน
  }

  // ฟังก์ชันสำหรับดึงรายการสินค้าจากตะกร้า
  getItems() {
    return this.cart;  // ส่งกลับรายการสินค้าในตะกร้า
  }

  // ฟังก์ชันสำหรับล้างตะกร้า
  clearCart() {
    this.cart = [];  // ล้างสินค้าทั้งหมดในตะกร้า
    return this.cart;  // ส่งกลับตะกร้าว่าง
  }
}
