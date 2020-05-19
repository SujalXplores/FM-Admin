import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThumbsDown } from 'angular-feather/icons';

@Injectable({
  providedIn: 'root'
})
export class DashboarddataService {

  url: string = 'http://localhost:3000/dashboardTrendingPro/';
  order_url: string = 'http://localhost:3000/ordersbyDate/';
  invoice_url: string = 'http://localhost:3000/invoicemode/';
  revenue_url: string = 'http://localhost:3000/revenue/';
  totalorder_url: string = 'http://localhost:3000/totalorders/';
  customer_url: string = 'http://localhost:3000/customers/';
  delivery_partner_url: string = 'http://localhost:3000/delivery_partner/';
  status_url: string = 'http://localhost:3000/track_status';

  constructor(public _http: HttpClient) { }

  getTopOrder(){
    return this._http.get(this.url);
  }

  getAllorder(selectedYear: number){
    return this._http.get(this.order_url + selectedYear);
  }

  getInvoiceByMode(PaymentMODE)
  {
    return this._http.get(this.invoice_url+PaymentMODE);
  }

  getRevenue(){
    return this._http.get(this.revenue_url);
  }

  getTotalOrder(){
    return this._http.get(this.totalorder_url);
  }

  getCustomer(){
    return this._http.get(this.customer_url);
  }

  getDeliveryPartner(){
    return this._http.get(this.delivery_partner_url);
  }

  getStatus(){
    return this._http.get(this.status_url);
  }
}
