import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  // ดึงข้อมูลคำสั่งซื้อทั้งหมด
  loadOrders() {
    this.orderService.getOrders().subscribe({
      next: (data: any[]) => {
        this.orders = data;
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
      }
    });
  }

  // ปฏิเสธคำสั่งซื้อ
  rejectOrder(orderId: number) {
    if (confirm('Are you sure you want to reject this order?')) {
      this.orderService.rejectOrder(orderId).subscribe({
        next: () => {
          alert('Order rejected successfully');
          this.loadOrders();  // โหลดข้อมูลใหม่หลังจากรีเจ็ค
        },
        error: (err) => {
          console.error('Error rejecting order:', err);
        }
      });
    }
  }

  // อัปเดตสถานะคำสั่งซื้อ
  updateOrder(orderId: number, deliveryStatus: string, paymentStatus: string) {
    this.orderService.updateOrderStatus(orderId, deliveryStatus, paymentStatus).subscribe({
      next: () => {
        alert('Order updated successfully');
        this.loadOrders();  // โหลดข้อมูลใหม่หลังจากอัปเดต
      },
      error: (err) => {
        console.error('Error updating order:', err);
      }
    });
  }
}
