import {Airport} from "../../utils/Airports";
import {PriceCatalogFlight} from "./PriceCatalogFlight";
import {PlaneBusyness} from "./PlaneBusyness";

export class FlightResponse {
  id: number;
  departureTime: number;
  arrivalTime: number;
  departureAirport: Airport;
  arrivalAirport: Airport;
  airline: string;
  priceCatalog: PriceCatalogFlight | null = null;
  planeBusyness: PlaneBusyness | null = null;

  constructor(
    id: number,
    fromDate: number,
    toDate: number,
    startAirport: Airport,
    endAirport: Airport,
    airline: string,
  ) {
    this.id = id;
    this.departureTime = fromDate;
    this.arrivalTime = toDate;
    this.departureAirport = startAirport;
    this.arrivalAirport = endAirport;
    this.airline = airline;
  }
}
