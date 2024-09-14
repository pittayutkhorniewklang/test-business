import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllProductComponent implements OnInit {
  products: any[] = []; // ตัวแปรเก็บรายการสินค้า

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.products; // ดึงข้อมูลสินค้าทั้งหมด
  }
}