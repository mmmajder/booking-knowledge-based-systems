import {FlightResponse} from "./FlightResponse";
import {PlaneSeat} from "./PlaneSeat";
import {AdditionalServicesPrice} from "./AdditionalServicesPrice";
import {User} from "../User";

export class AdditionalServicesRequestEvent {
   flight!: FlightResponse;
   luggageWeight!: number;
   priorityBoarding!: boolean;
   specificSeats!: boolean;
   seats!: PlaneSeat[];
   additionalServicesPrice?: AdditionalServicesPrice;
   executionTime!: Date;
   customer?: User;
}
