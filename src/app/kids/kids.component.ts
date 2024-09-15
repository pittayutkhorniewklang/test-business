import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  products: any[] = []; // ตัวแปรเก็บรายการสินค้า
  filteredProducts: any[] = []; // ตัวแปรเก็บสินค้าหลังการกรอง

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.products; // ดึงข้อมูลสินค้าทั้งหมด
    this.filterProducts(); // กรองสินค้าตามหมวดหมู่
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => 
      product.category.includes('kid') // กรองตามหมวดหมู่ kids
    );

}
  }