export class OrderBoyAssign {
  public constructor(
    public deliveryboy_name?: string,
    public order_id?: number,
    public fk_u_email_id?: string,
    public fk_deliveryboy_email?: string,
    public order_date?: string,
    public order_amount?: number,
    public payment_type?: string,
    public order_status?: string,
    public detail_id?: number,
    public deliveryboy_id?: string,
    public fk_order_id?: number,
    public date?: string
  ) {}
}
