import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];  // เก็บรายการสินค้าที่เพิ่มในตะกร้า

  addToCart(product: any) {
    const existingProduct = this.items.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });  // เพิ่มสินค้าเข้าไปใน array items พร้อมจำนวนสินค้า
    }
    console.log('สินค้าในตะกร้าหลังเพิ่ม:', this.items);  // ตรวจสอบรายการสินค้าที่ถูกเพิ่ม
  }

  getItems(): any[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
