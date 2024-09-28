import { Component, OnInit } from '@angular/core'; 
import { ProductService } from '../../services/productservice.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  products: any[] = [];
  newProduct: any = {};  // เก็บข้อมูลสินค้าใหม่หรือสินค้าแก้ไข
  selectedFile: File | null = null;  // เก็บไฟล์ที่ถูกเลือก
  isEditing: boolean = false;  // ตรวจสอบว่าอยู่ในโหมดแก้ไขหรือไม่
  stockAdjustment: number = 0;  // ค่าการปรับสต็อกที่ต้องการเพิ่มหรือลด

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // ฟังก์ชันสำหรับโหลดสินค้าทั้งหมด
  loadProducts() {
    console.log('Fetching all products');  // ตรวจสอบว่าฟังก์ชันนี้ถูกเรียก
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log('Products loaded successfully', this.products);  // แสดงข้อมูลสินค้าที่ถูกโหลด
      },
      (error) => {
        console.error('Error fetching products:', error);  // แสดงข้อผิดพลาดถ้ามี
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
    console.log('saveProduct function called');  // ตรวจสอบว่าฟังก์ชันนี้ถูกเรียก
    const formData = new FormData();
    formData.append('name', this.newProduct.name);
    formData.append('category', this.newProduct.category);
    formData.append('brand', this.newProduct.brand);
    formData.append('stock', this.newProduct.stock.toString());  // แปลงสต็อกเป็น string
    formData.append('price', this.newProduct.price.toString());
    formData.append('description', this.newProduct.description);

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);  // ถ้ามีไฟล์ให้เพิ่มใน FormData
    }

    if (this.isEditing) {
      formData.append('id', this.newProduct.id);  // แนบ ID สำหรับการแก้ไข
      console.log('Editing product:', this.newProduct);  // แสดงข้อมูลสินค้าที่จะแก้ไข
      this.productService.editProduct(formData).subscribe(() => {
        console.log('Product edited successfully');
        this.loadProducts();
        this.resetForm();
      }, (error) => {
        console.error('Error editing product:', error);
      });
    } else {
      console.log('Adding new product:', this.newProduct);  // แสดงข้อมูลสินค้าที่จะเพิ่ม
      this.productService.addProduct(formData).subscribe(() => {
        console.log('Product added successfully');
        this.loadProducts();
        this.resetForm();
      }, (error) => {
        console.error('Error adding product:', error);
      });
    }
  }

  // ฟังก์ชันสำหรับเพิ่มสต็อก
  increaseStock(productId: number, quantity: number) {
    console.log('Increasing stock for product id:', productId, 'by quantity:', quantity);
    if (quantity && quantity > 0) {
      this.productService.increaseStock(productId, quantity).subscribe(() => {
        console.log('Stock increased successfully');
        this.loadProducts();
        this.stockAdjustment = 0;  // รีเซ็ตจำนวนที่กรอก
      }, (error) => {
        console.error('Error increasing stock:', error);
      });
    }
  }

  // ฟังก์ชันสำหรับลดสต็อก
  reduceStock(productId: number, quantity: number) {
    console.log('Reducing stock for product id:', productId, 'by quantity:', quantity);
    if (quantity && quantity > 0) {
      this.productService.reduceStock(productId, quantity).subscribe(() => {
        console.log('Stock reduced successfully');
        this.loadProducts();
        this.stockAdjustment = 0;  // รีเซ็ตจำนวนที่กรอก
      }, (error) => {
        console.error('Error reducing stock:', error);
      });
    }
  }

  // ฟังก์ชันสำหรับแก้ไขสินค้า
  editProduct(product: any) {
    console.log('Editing product:', product);
    this.newProduct = { ...product };  // คัดลอกข้อมูลสินค้าที่ต้องการแก้ไข
    this.selectedFile = null;  // เคลียร์ไฟล์ที่เลือก
    this.stockAdjustment = product.stock;  // เติมค่าจำนวนสต็อกปัจจุบันลงในฟอร์ม
    this.isEditing = true;
  }

  // ฟังก์ชันสำหรับลบสินค้า
  deleteProduct(id: number) {
    console.log('Delete product function called for product ID:', id); // ตรวจสอบว่าฟังก์ชันถูกเรียกหรือไม่
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        console.log('Product deleted successfully');  // ตรวจสอบการลบสำเร็จ
        this.loadProducts();
      }, (error) => {
        console.error('Error deleting product:', error);
      });
    }
  }

  // ฟังก์ชันสำหรับรีเซ็ตฟอร์ม
  resetForm() {
    console.log('Resetting form');
    this.newProduct = {};
    this.selectedFile = null;
    this.stockAdjustment = 0;  // รีเซ็ตสต็อกที่กรอก
    this.isEditing = false;
  }
}
