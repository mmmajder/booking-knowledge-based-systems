import {Airport} from "../../utils/Airports";

export class FlightResponse {
  private fromDate: Date;
  private toDate: Date;
  private startAirport: Airport;
  private endAirport: Airport;
  private numberOfStops: number;
  private airlines: string[];

  constructor(
    fromDate: Date,
    toDate: Date,
    startAirport: Airport,
    endAirport: Airport,
    numberOfStops: number,
    airlines: string[]
  ) {
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.startAirport = startAirport;
    this.endAirport = endAirport;
    this.numberOfStops = numberOfStops;
    this.airlines = airlines;
  }
}
