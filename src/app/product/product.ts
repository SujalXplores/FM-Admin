export class product {

  public constructor(
    public pro_id: number,
    public pro_name: string,
    public pro_mfg: string,
    public pro_price: string,
    public pro_desc: string,
    public fk_cat_id?: number,
    public c_id?: number,
    public c_name?: string,
  ) {}
}
