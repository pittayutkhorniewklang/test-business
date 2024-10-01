import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productservice.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  products: any[] = [];
  product: any = {};  // เก็บข้อมูลสินค้าใหม่หรือสินค้าแก้ไข
  selectedFile: File | null = null;  // เก็บไฟล์ที่ถูกเลือก
  isEditing: boolean = false;  // ตรวจสอบว่าอยู่ในโหมดแก้ไขหรือไม่

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // ฟังก์ชันสำหรับโหลดสินค้าทั้งหมด
  loadProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log('Products loaded:', this.products);
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

  // ฟังก์ชันสำหรับเพิ่มสินค้าใหม่หรือบันทึกการแก้ไขสินค้า
  saveProduct() {
    console.log('saveProduct function called');
    console.log('Product data before saving:', this.product);

    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('category', this.product.category);
    formData.append('brand', this.product.brand);
    formData.append('stock', this.product.stock);
    formData.append('price', this.product.price);
    formData.append('description', this.product.description);
    
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);  // ถ้ามีไฟล์ให้เพิ่มใน FormData
    }

    if (this.isEditing) {
      // กรณีแก้ไขสินค้า
      formData.append('id', this.product.id);  // แนบ ID สำหรับการแก้ไข
      this.productService.editProduct(formData).subscribe(() => {
        this.loadProducts();  // โหลดสินค้าทั้งหมดใหม่หลังจากแก้ไขสำเร็จ
        this.resetForm();  // รีเซ็ตข้อมูลฟอร์ม
      }, (error) => {
        console.error('Error editing product:', error);
      });
    } else {
      // กรณีเพิ่มสินค้าใหม่
      this.productService.addProduct(formData).subscribe(() => {
        this.loadProducts();  // โหลดสินค้าทั้งหมดใหม่หลังจากเพิ่มสำเร็จ
        this.resetForm();  // รีเซ็ตข้อมูลฟอร์ม
      }, (error) => {
        console.error('Error adding product:', error);
      });
    }
  }

  // ฟังก์ชันสำหรับลบสินค้า
  deleteProduct(id: number) {
    console.log('deleteProduct function called with id:', id);
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();
      }, (error) => {
        console.error('Error deleting product:', error);
      });
    }
  }

  // ฟังก์ชันสำหรับแก้ไขสินค้า
  editProduct(product: any) {
    console.log('editProduct function called with product:', product);
    this.product = { ...product };  // คัดลอกข้อมูลสินค้าที่ต้องการแก้ไข
    this.selectedFile = null;  // เคลียร์ไฟล์ที่เลือกเพื่อให้ผู้ใช้เลือกไฟล์ใหม่ถ้าต้องการ
    this.isEditing = true;  // ตั้งสถานะว่าอยู่ในโหมดแก้ไข
  }

  // ฟังก์ชันสำหรับรีเซ็ตฟอร์ม
  resetForm() {
    console.log('Resetting form');
    this.product = {};  // เคลียร์ข้อมูลฟอร์ม
    this.selectedFile = null;  // รีเซ็ตไฟล์ที่เลือก
    this.isEditing = false;  // รีเซ็ตโหมดแก้ไข
  }
}
