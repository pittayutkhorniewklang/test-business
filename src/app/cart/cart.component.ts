import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

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
    this.items = this.cartService.getItems();  // ดึงสินค้าจากตะกร้า
    console.log('สินค้าจากตะกร้า:', this.items);  // ตรวจสอบรายการสินค้าที่ดึงมา
    this.calculateTotal();  // คำนวณยอดรวมสินค้าในตะกร้า
  }

  calculateTotal() {
    this.total = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0); // คำนวณราคารวมตามจำนวนสินค้า
  }

  incrementQuantity(item: any) {
    item.quantity++;
    this.calculateTotal();
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotal();
    }
  }

  clearCart() {
    this.items = this.cartService.clearCart();
    this.calculateTotal();
  }
}
