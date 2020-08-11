export class wallet {
    public constructor(
      public wallet_id: number,
      public wallet_amount: number,
      public fk_u_email_id: string
    ) { }
  }