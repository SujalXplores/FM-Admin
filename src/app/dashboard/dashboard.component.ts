import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { DashboarddataService } from './dashboarddata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public _data: DashboarddataService) {}

  public bill_data: any[];
  public bill_data_display: any[] = [];
  public bill_data_name_display: any[] = [];

  ngOnInit() {
    this._data.getTopOrder().subscribe((data1: any[]) => {
      this.bill_data = data1;
      for (let i = 0; i < data1.length; i++) {
        this.bill_data_display.push(this.bill_data[i].pro_price);
        this.bill_data_name_display.push(this.bill_data[i].pro_name);
      }
      console.log(this.bill_data_display);
    });
  }
  
  public pieData: any[] = [
    { category: "Cash on Delivery", value: 40 },
    { category: "Paypal", value: 50 },
    { category: "Credit/Debit Card", value: 10 },
  ];

  public series: any[] = [
    {
      name: "Medicines",
      data: [
        200,500,750,300,200,100,50,80,86,80,124,321
      ],
    },
    {
      name: "HealthCare Products",
      data: [
        100,200,450,100,40,10,90,100,806,890,324,121
      ],
    },
  ];
  public categories: string[] = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
  ];
}
