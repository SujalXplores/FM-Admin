import { Component } from "@angular/core";
import { Chart } from "chart.js";
import { DashboarddataService } from "./dashboarddata.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent {
  constructor(public _data: DashboarddataService) {}

  public order_data: any[];
  public bill_data: any[];
  public bill_data_display: any[] = [];
  public bill_data_name_display: any[] = [];
  public order_date: any[] = [];
  public order_amount: any[] = [];
  // public paypalAmount: number=0;
  // public Cash_On_Dlivery_Amount: number=120;
  // public card_Amount: number=500;

  ngOnInit() {
    this._data.getAllorder().subscribe((data1: any[]) => {
      this.order_data = data1;
      for (let i = 0; i < data1.length; i++) {
        this.order_date.push(this.order_data[i].order_date);
        this.order_amount.push(this.order_data[i].order_amount);
      }
      console.log(this.order_data);
    });

    this._data.getTopOrder().subscribe((data1: any[]) => {
      this.bill_data = data1;
      for (let i = 0; i < data1.length; i++) {
        this.bill_data_display.push(this.bill_data[i].pro_price);
        this.bill_data_name_display.push(this.bill_data[i].pro_name);
      }
      console.log(this.bill_data_display);
    });

    // this._data.getInvoiceByMode("Paypal").subscribe((data: any) => {
    //   console.log(data);
    //   console.log(data[0].total);
    //   if (data[0].total) {
    //     this.paypalAmount = data[0].total;
    //   } else {
    //     this.paypalAmount = 0;
    //   }
    //   console.log(this.paypalAmount);
    // });

    // this._data.getInvoiceByMode("Cash On Delivery").subscribe((data: any) => {
    //   console.log(data);
    //   if (data[0].total) {
    //     this.Cash_On_Dlivery_Amount = data[0].total;
    //   } else {
    //     this.Cash_On_Dlivery_Amount = 0;
    //   }
    //   console.log(this.Cash_On_Dlivery_Amount);
    // });

    // this._data.getInvoiceByMode("Card").subscribe((data: any) => {
    //   console.log(data);
    //   if (data[0].total) {
    //     this.card_Amount = data[0].total;
    //   } else {
    //     this.card_Amount = 0;
    //   }
    //   console.log(this.card_Amount);
    // });
  }

  public pieData: any[] = [
    { category: "Cash On Delivery", value: 40 },
    { category: "Paypal", value: 30 },
    { category: "Card", value: 30 },
  ];

  public series: any[] = [
    {
      name: "Medicines",
      data: [200, 500, 750, 300, 200, 100, 50, 80, 86, 80, 124, 321],
    },
  ];
  public categories: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
}
