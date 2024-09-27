import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productservice.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  products: any[] = [];
  newProduct: any = {};  // เก็บข้อมูลสินค้าใหม่
  selectedFile: File | null = null;  // เก็บไฟล์ที่ถูกเลือก

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // ฟังก์ชันสำหรับโหลดสินค้าทั้งหมด
  loadProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  // ฟังก์ชันสำหรับอัปโหลดไฟล์
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('Selected file:', this.selectedFile);
  }

  // ฟังก์ชันสำหรับเพิ่มสินค้าใหม่
  addProduct() {
    const formData = new FormData();
    formData.append('name', this.newProduct.name);
    formData.append('category', this.newProduct.category);
    formData.append('brand', this.newProduct.brand);
    formData.append('stock', this.newProduct.stock);
    formData.append('price', this.newProduct.price);
    formData.append('description', this.newProduct.description);
    
    // เพิ่มไฟล์ที่ผู้ใช้อัปโหลด
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.productService.addProduct(formData).subscribe(() => {
      this.loadProducts();  // โหลดสินค้าทั้งหมดใหม่หลังจากเพิ่มสำเร็จ
      this.newProduct = {};  // เคลียร์ข้อมูลฟอร์ม
      this.selectedFile = null;  // รีเซ็ตไฟล์ที่เลือก
    }, (error) => {
      console.error('Error adding product:', error);
    });
  }

  // ฟังก์ชันสำหรับลบสินค้า
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    }, (error) => {
      console.error('Error deleting product:', error);
    });
  }

  // ฟังก์ชันสำหรับแก้ไขสินค้า
  editProduct(product: any) {
    this.newProduct = { ...product };  // คัดลอกข้อมูลสินค้าที่ต้องการแก้ไข
  }
}
