import {NumberOfStops} from "./NumberOfStops";

export class SearchFlightsParams {
  private seatClass: string;
  private from: string;
  private to: string;
  private numberOfChildren: number;
  private numberOfAdults: number;
  private selectedNumberOfStops: string;
  private returnTicket: boolean;
  private singleDate: Date;
  private dateRangeStart: Date;
  private dateRangeEnd: Date;

  constructor(
    seatClass: string,
    from: string,
    to: string,
    numberOfChildren: number,
    numberOfAdults: number,
    selectedNumberOfStops: string,
    returnTicket: boolean,
    singleDate: Date,
    dateRangeStart: Date,
    dateRangeEnd: Date
  ) {
    this.seatClass = seatClass;
    this.from = from;
    this.to = to;
    this.numberOfChildren = numberOfChildren;
    this.numberOfAdults = numberOfAdults;
    this.selectedNumberOfStops = selectedNumberOfStops;
    this.returnTicket = returnTicket;
    this.singleDate = singleDate;
    this.dateRangeStart = dateRangeStart;
    this.dateRangeEnd = dateRangeEnd;
  }
}
