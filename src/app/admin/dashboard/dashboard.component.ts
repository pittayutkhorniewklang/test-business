import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalSales: number = 0;
  newOrders: number = 0;
  activeUsers: number = 0;
  revenue: number = 0;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getTotalSales().subscribe(data => {
      this.totalSales = data.totalSales;
    });

    this.dashboardService.getNewOrders().subscribe(data => {
      this.newOrders = data.newOrders;
    });

    this.dashboardService.getActiveUsers().subscribe(data => {
      this.activeUsers = data.activeUsers;
    });

    this.dashboardService.getRevenue().subscribe(data => {
      this.revenue = data.totalRevenue;
    });
  }
}
