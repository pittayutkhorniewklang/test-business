import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrl: './manage-order.component.css'
})
export class ManageOrderComponent implements OnInit{
  orders: any[] = [];
  searchQuery: string = ''; // กำหนดค่า searchQuery ที่จะถูกผูกกับ ngModel

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  // โหลดข้อมูลออเดอร์ทั้งหมดจาก Service
  loadOrders() {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  // ค้นหาข้อมูลออเดอร์ตาม searchQuery
  searchOrders() {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data.filter((order: { customer: string; orderId: string; }) =>
        order.customer.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        order.orderId.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    });
  }

}
