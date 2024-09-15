import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent implements OnInit {
  product: any;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.product = this.productService.getProductById(productId);
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}

