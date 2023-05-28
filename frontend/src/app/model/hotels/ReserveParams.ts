export class ReserveHotelParams {
  hotelId!: number;
  userEmail!: string;
  start!: Date;
  end!: Date;
  numberOfAdults: number = 2;
  numberOfChildren: number = 0;
}

export class ReviewHotelParams {
  hotelId!: number;
  userEmail: string = "customer@gmail.com";
  comment: string = "";
  stars: number = 10;
}
