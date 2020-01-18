export class cart {

  public constructor(
    public cart_id: number,
    public fk_u_email_id ?: string,
    public u_email_id ?: string,
  ) {}
}
