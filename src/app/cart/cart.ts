export class cart {

  public constructor(
    public cart_id: number,
    public qty: number,
    public fk_u_email_id ?: string,
    public fk_pro_id ?: number,
    public u_email_id ?: string,
    public pro_id ?: number,
    public pro_name ?: string,
  ) {}
}
