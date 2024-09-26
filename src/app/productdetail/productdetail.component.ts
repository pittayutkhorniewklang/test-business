import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productservice.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service'; // เพิ่ม CartService

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product: any;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService // Inject CartService
  ) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!; // ดึง product ID จาก URL

    // ใช้ subscribe เพื่อดึงข้อมูลจาก Observable จาก ProductService
    this.productService.getProductById(productId).subscribe(
      (data: any) => {
        this.product = data; // รับข้อมูลสินค้าที่ดึงมาจาก API
        console.log(this.product); // ตรวจสอบข้อมูลที่ได้รับ
      },
      (error: any) => {
        console.error("Error fetching product details: ", error);
      }
    );
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // ฟังก์ชันสำหรับเพิ่มสินค้าไปยังตะกร้า
  addToCart() {
    const productToAdd = { ...this.product, quantity: this.quantity }; // เพิ่มจำนวนสินค้า
    this.cartService.addToCart(productToAdd); // เพิ่มสินค้าไปยังตะกร้า
    alert('เพิ่มสินค้าลงในตะกร้าแล้ว!');
  }
}
