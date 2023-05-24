import {SeatClass} from "./SeatClass";

export class FlightTickets {
  id!: number;
  row!: number;
  col!: number;
  seatClass!: SeatClass;
  name!: string;
  surname!: string;
  responsibleUser!: string;
}
