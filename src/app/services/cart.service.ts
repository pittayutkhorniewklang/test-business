import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any[] = [];  // ตัวแปรเก็บสินค้าที่อยู่ในตะกร้า

  constructor() {}

  // ฟังก์ชันสำหรับเพิ่มสินค้าลงในตะกร้า
  addToCart(product: any) {
    const existingProduct = this.items.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;  // ถ้าสินค้ามีอยู่แล้วในตะกร้า ให้เพิ่มจำนวนสินค้า
    } else {
      this.items.push(product);  // ถ้าสินค้ายังไม่มี ให้เพิ่มเป็นสินค้าใหม่
    }
    console.log('สินค้าถูกเพิ่มในตะกร้า:', this.items);  // แสดงสินค้าที่ถูกเพิ่มในตะกร้า
  }

  // ฟังก์ชันสำหรับดึงสินค้าทั้งหมดในตะกร้า
  getItems() {
    return this.items;
  }

  // ฟังก์ชันสำหรับล้างสินค้าทั้งหมดในตะกร้า
  clearCart() {
    this.items = [];
    return this.items;
  }
}
