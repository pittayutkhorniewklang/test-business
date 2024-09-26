import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();  // ดึงสินค้าจากตะกร้าเมื่อคอมโพเนนต์ถูกโหลด
  }

  // ฟังก์ชันสำหรับดึงสินค้าและคำนวณราคารวม
  loadCartItems() {
    this.items = this.cartService.getItems();  // ดึงสินค้าจากตะกร้า
    console.log('สินค้าจากตะกร้า:', this.items);  // ตรวจสอบรายการสินค้าที่ดึงมา
    this.calculateTotal();  // คำนวณยอดรวมสินค้าในตะกร้า
  }
  

  // ฟังก์ชันคำนวณราคารวม
  calculateTotal() {
    this.total = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);  // คำนวณราคารวมตามจำนวนสินค้า
  }

  // เพิ่มจำนวนสินค้า
  incrementQuantity(item: any) {
    item.quantity++;
    this.calculateTotal();  // คำนวณราคารวมใหม่หลังเพิ่มจำนวนสินค้า
  }

  // ลดจำนวนสินค้า
  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotal();  // คำนวณราคารวมใหม่หลังลดจำนวนสินค้า
    }
  }

  // ล้างสินค้าทั้งหมดในตะกร้า
  clearCart() {
    this.items = this.cartService.clearCart();  // ล้างสินค้าทั้งหมดในตะกร้า
    this.calculateTotal();  // คำนวณราคารวมใหม่หลังล้างตะกร้า
  }
}
