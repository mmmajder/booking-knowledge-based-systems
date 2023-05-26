import {FlightResponse} from "./FlightResponse";
import {PlaneSeat} from "./PlaneSeat";
import {AdditionalServicesPrice} from "./AdditionalServicesPrice";

export class AdditionalServicesRequestEvent {
   flight!: FlightResponse;
   luggageWeight!: number;
   priorityBoarding!: boolean;
   specificSeats!: boolean;
   seats!: PlaneSeat[];
   additionalServicesPrice?: AdditionalServicesPrice;
   executionTime?: Date = new Date();
}
