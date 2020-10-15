import { Component } from "@angular/core";
import { DashboarddataService } from "./dashboarddata.service";
import { Chart } from "chart.js/dist/Chart.js";
var now = new Date();
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent {
  constructor(public _data: DashboarddataService) { }
  LineChart = [];
  PieChart = [];
  DoughutChart = [];
  BarChart = [];
  paymentdata = [];

  public monthOrderCount: any[] = [];
  public orderData: any[] = [];
  months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
  month = [];

  public bill_data: any[] = [];
  public bill_data_display: any[] = [];
  public bill_data_name_display: any[] = [];

  public paypalAmount: number = 0;
  public Cash_On_Dlivery_Amount: number = 0;
  public wallet_amount: number = 0;

  public revenue: number;
  public total_order: any[] = [];
  public customers: any[] = [];
  public delivery_partners: any[] = [];

  currentYear = now.getFullYear();
  selectedYear: number = this.currentYear;

  public statusData: any[] = [];

  ngOnInit() {
    this.get_small_widget_data();
    this.get_monthly_selling();
    this.get_payment_method();
    this.getStatus();
    this.get_trending_product();
  }

  get_small_widget_data(): void {
    this._data.getRevenue().subscribe((data2: any[]) => {
      this._data.getTotalOrder().subscribe((data3: any[]) => {
        this._data.getCustomer().subscribe((data4: any[]) => {
          this._data.getDeliveryPartner().subscribe((data5: any[]) => {
            this.revenue = data2[0].revenue;
            this.total_order = data3[0].total_order;
            this.customers = data4[0].customers;
            this.delivery_partners = data5[0].delivery_partners;
          });
        });
      });
    });
  }

  get_monthly_selling(): void {
    this.monthOrderCount = [];
    this.orderData = [];
    this._data.getAllorder(this.selectedYear).subscribe((data1: any[]) => {
      this.monthOrderCount = data1;
      for (let j = 0; j < data1.length; j++) {
        this.orderData.push(this.monthOrderCount[j].COUNT);
      }
      this.month = this.months.slice(0, this.orderData.length);
      this.LineChart = new Chart('lineChart', {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [{
            label: 'Number of Items Sold in Months',
            data: this.orderData,
            fill: true,
            lineTension: 0.2,
            borderColor: "rgba(116, 0, 255, 1)",
            backgroundColor: "rgba(116, 0, 255, 0.1)",
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    });
  }

  get_payment_method(): void {
    this.paymentdata = [];
    this._data.getInvoiceByMode("cod").subscribe((data: any) => {
      if (data[0].total) {
        this.Cash_On_Dlivery_Amount = data[0].total;
      } else {
        this.Cash_On_Dlivery_Amount = 0;
      }
    });
    this._data.getInvoiceByMode("wallet").subscribe((data: any) => {
      if (data[0].total) {
        this.wallet_amount = data[0].total;
      } else {
        this.wallet_amount = 0;
      }
    });
    this._data.getInvoiceByMode("paypal").subscribe((data: any) => {
      if (data[0].total) {
        this.paypalAmount = data[0].total;
      } else {
        this.paypalAmount = 0;
      }
      this.paymentdata.push(this.Cash_On_Dlivery_Amount);
      this.paymentdata.push(this.wallet_amount);
      this.paymentdata.push(this.paypalAmount);
      this.PieChart = new Chart('pieChart', {
        type: 'pie',
        data: {
          labels: ["Cash", "Wallet", "Paypal"],
          datasets: [{
            data: this.paymentdata,
            backgroundColor: [
              'rgba(0, 174, 90, 0.2)',
              'rgba(255, 114, 25, 0.2)',
              'rgba(0, 98, 255, 0.2)'
            ],
            borderColor: [
              'rgba(0, 174, 90, 1)',
              'rgba(255, 114, 25, 1)',
              'rgba(0, 98, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    });
  }

  getStatus(): void {
    this.statusData = [];
    this._data.getStatus().subscribe((data3: any) => {
      this.statusData.push(data3[0].Delivered);
      this.statusData.push(data3[0].Packing);
      this.statusData.push(data3[0].On_The_Way);
      this.DoughutChart = new Chart('doughnutChart', {
        type: 'doughnut',
        data: {
          labels: ["Delivered", "Packing", "On The Way"],
          datasets: [{
            data: this.statusData,
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255,99,132,1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    });
  }

  get_trending_product(): void {
    this.bill_data = [];
    this.bill_data_display = [];
    this.bill_data_name_display = [];
    this._data.getTopOrder().subscribe((data1: any[]) => {
      this.bill_data = data1;
      for (let i = 0; i < data1.length; i++) {
        this.bill_data_display.push(this.bill_data[i].total);
        this.bill_data_name_display.push(this.bill_data[i].pro_name);
      }
      this.BarChart = new Chart('barChart', {
        type: 'bar',
        data: {
          labels: this.bill_data_name_display,
          datasets: [{
            label: 'No. of Products',
            data: this.bill_data_display,
            borderColor: "rgba(234, 74, 42, 1)",
            backgroundColor: "rgba(234, 74, 42, 0.1)",
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    });
  }
}