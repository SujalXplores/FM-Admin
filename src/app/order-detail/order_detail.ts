export class order_detail {
  public constructor(
    public order_detail_id: number,
    public qty: number,
    public fk_order_id?: number,
    public fk_pro_id?: number,
    public order_id?: number,
    public pro_id?: number,
    public pro_name?: string,
  ) {}
}