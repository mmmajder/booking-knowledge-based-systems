import {SeatClass} from "./SeatClass";

export class FlightPriceRequest {
  flightIds!: number[];
  numberOfAdults!: number;
  numberOfChildren!: number;
  seatClass!: string;
}
