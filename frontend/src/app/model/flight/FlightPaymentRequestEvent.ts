import {FlightResponse} from "./FlightResponse";
import {PlaneSeat} from "./PlaneSeat";

export class FlightPaymentRequestEvent {
  flights!: FlightResponse[];
  totalPrice!: number;
  seats!: PlaneSeat[][];
}
