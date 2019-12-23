export class order {

  public constructor(
    public order_id: string,
    public pro_name: string,
    public u_email_id: string,
    public order_date: Date,
    public order_quantity: number,
    public order_status: string,
    public deliveryboy_id: number
  ) {}
}
