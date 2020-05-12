export class prescription {

  public constructor(
    public pre_id: number,
    public pre_title: string,
    public pre_doc: string,
    public pre_date: Date,
    public pre_by: string,
    public fk_u_email_id: string,
    public status: string,
  ) {}
}
