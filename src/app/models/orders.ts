export class Orders{
  constructor(
    public order_id: number,
    public user_id: number,
    public product_id: number
    public order_date: any,
    public order_status: number
  ){}
}
