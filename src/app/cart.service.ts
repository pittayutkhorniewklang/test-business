import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];  // เก็บรายการสินค้าที่เพิ่มในตะกร้า

  // ฟังก์ชันเพิ่มสินค้าในตะกร้า
  addToCart(product: any) {
    const existingProduct = this.items.find(item => item.id === product.id);  // ค้นหาสินค้าที่มีอยู่แล้วในตะกร้า
    if (existingProduct) {
      existingProduct.quantity += product.quantity;  // เพิ่มจำนวนสินค้าที่มีอยู่แล้ว
    } else {
      this.items.push({ ...product, quantity: product.quantity });  // เพิ่มสินค้าใหม่ในตะกร้า พร้อมจำนวนสินค้า
    }
    console.log('สินค้าในตะกร้าหลังเพิ่ม:', this.items);  // ตรวจสอบรายการสินค้าที่ถูกเพิ่ม
  }

  // ฟังก์ชันดึงสินค้าจากตะกร้า
  getItems(): any[] {
    return this.items;
  }

  // ฟังก์ชันล้างสินค้าทั้งหมดในตะกร้า
  clearCart() {
    this.items = [];
    return this.items;
  }
}
