import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DashboarddataService {

  url: string = environment.db + 'dashboardTrendingPro/';
  order_url: string = environment.db + 'ordersbyDate/';
  invoice_url: string = environment.db + 'invoicemode/';
  revenue_url: string = environment.db + 'revenue/';
  totalorder_url: string = environment.db + 'totalorders/';
  customer_url: string = environment.db + 'customers/';
  delivery_partner_url: string = environment.db + 'delivery_partner/';
  status_url: string = environment.db + 'track_status';

  constructor(public _http: HttpClient) { }

  getTopOrder() {
    return this._http.get(this.url);
  }

  getAllorder(selectedYear: number) {
    return this._http.get(this.order_url + selectedYear);
  }

  getInvoiceByMode(PaymentMODE) {
    return this._http.get(this.invoice_url + PaymentMODE);
  }

  getRevenue() {
    return this._http.get(this.revenue_url);
  }

  getTotalOrder() {
    return this._http.get(this.totalorder_url);
  }

  getCustomer() {
    return this._http.get(this.customer_url);
  }

  getDeliveryPartner() {
    return this._http.get(this.delivery_partner_url);
  }

  getStatus() {
    return this._http.get(this.status_url);
  }
}