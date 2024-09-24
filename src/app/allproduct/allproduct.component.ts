import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router'; // นำเข้า Router

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllProductComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) { } // Inject Router

  ngOnInit(): void {
    this.products = this.productService.products;
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => 
      product.category.includes('allproduct')
    );
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log('เพิ่มสินค้าลงในตะกร้า:', product);  // ตรวจสอบสินค้าที่ถูกเพิ่ม
    alert('เพิ่มสินค้าลงในตะกร้าแล้ว!');
    this.router.navigate(['/cart']);
  }
}