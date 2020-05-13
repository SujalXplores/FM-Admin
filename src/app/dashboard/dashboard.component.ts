import { Component, ViewChild, ElementRef } from "@angular/core";
import { DashboarddataService } from "./dashboarddata.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent {
  @ViewChild('resizedDiv') resizedDiv:ElementRef;
  constructor(public _data: DashboarddataService) {}

  public order_data: any[];
  public bill_data: any[];
  public bill_data_display: any[] = [];
  public bill_data_name_display: any[] = [];

  public order_date: any[] = [];
  public order_amount: any[] = [];

  public paypalAmount: number = 0;
  public Cash_On_Dlivery_Amount: number = 0;

  public revenue: any[] = [];
  public total_order: any [] = [];
  public customers: any [] = [];
  public delivery_partners: any [] = [];

  public type_data: any[] = [];
  public type: any [] = [];
  public count: any [] = [];

  ngOnInit() {
    this._data.getRevenue().subscribe((data2: any[]) => {
      this.revenue = data2[0].revenue;
    });

    this._data.getTotalOrder().subscribe((data3: any[]) => {
      this.total_order = data3[0].total_order;
    });

    this._data.getCustomer().subscribe((data4: any[]) => {
      this.customers = data4[0].customers;
    });

    this._data.getDeliveryPartner().subscribe((data5: any[]) => {
      this.delivery_partners = data5[0].delivery_partners;
    });

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
    
    this._data.getInvoiceByMode("cod").subscribe((data: any) => {
      console.log("COD="+data.value);
      console.log(data[0].total);
      if (data[0].total) {
        this.Cash_On_Dlivery_Amount = data[0].total;
      } else {
        this.Cash_On_Dlivery_Amount = 0;
      }
      console.log("COD amt"+this.Cash_On_Dlivery_Amount);
    });

    this._data.getInvoiceByMode("paypal").subscribe((data: any) => {
      console.log("Paypal="+data.value);
      console.log(data[0].total);
      if (data[0].total) {
        this.paypalAmount = data[0].total;
      } else {
        this.paypalAmount = 0;
      }
      console.log("paypal amt"+this.paypalAmount);
    });
  }
}