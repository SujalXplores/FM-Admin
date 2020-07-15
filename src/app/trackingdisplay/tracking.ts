export class tracking {
  public constructor(
    public track_id: number,
    public status: string,
    public fk_detail_id?: number,
    public detail_id?: number
  ) { }
}