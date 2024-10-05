import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [];  // เก็บรายการสินค้าในตะกร้า
  total: number = 0;  // ตัวแปรสำหรับเก็บยอดรวม

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log(this.items);  // ตรวจสอบว่ารายการสินค้าในตะกร้าถูกต้องหรือไม่
    this.calculateTotal();
  }
  // ฟังก์ชันสำหรับลดจำนวนสินค้า
  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotal();  // คำนวณยอดรวมใหม่หลังจากการเปลี่ยนแปลง
    }
  }

  // ฟังก์ชันสำหรับเพิ่มจำนวนสินค้า
  incrementQuantity(item: any) {
    item.quantity++;
    this.calculateTotal();  // คำนวณยอดรวมใหม่หลังจากการเปลี่ยนแปลง
  }

  // ฟังก์ชันสำหรับลบสินค้าออกจากตะกร้า
  removeItem(item: any) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);  // ลบสินค้าจากตะกร้า
      this.calculateTotal();  // คำนวณยอดรวมใหม่หลังจากการลบ
    }
  }

  // ฟังก์ชันสำหรับคำนวณยอดรวม
  calculateTotal() {
    this.total = this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  // ฟังก์ชันสำหรับล้างตะกร้า
  clearCart() {
    this.items = this.cartService.clearCart();  // ล้างสินค้าในตะกร้า
    this.total = 0;  // ตั้งยอดรวมเป็น 0
  }
}
