export class cart_details {

  public constructor(
    public qty: number,
    public total: number,
    public cart_detail_id ?: number,
    public fk_cart_id ?: number,
    public fk_pro_id ?: number,
    public cart_id?: number,
    public pro_id?: number,
  ) {}
}
