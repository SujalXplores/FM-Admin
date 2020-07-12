export class deliverdetails {
  public constructor(
    public detail_id: number,
    public date: string,
    public fk_u_email_id?: string,
    public fk_order_id?: number,
    public u_email_id?: string,
    public deliveryboy_id?: number,
    public deliveryboy_name?: string,
    public order_id?: number,
  ) { }
};