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
  userEmail!: string;
  comment: string = "";
  stars: number = 10;
}
