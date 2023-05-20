export class SearchHotelsParams {
  name: string;
  destination: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  numAdults: number;
  numChildren: number;
  reviewScore: number[];
  starRating: number[];
  priceRangeStart: number;
  priceRangeEnd: number;
  distanceStart: number;
  distanceEnd: number;
  facilities: string[];
  meals: string[];

  constructor() {
    this.name = '';
    this.destination = '';
    this.startDate = undefined;
    this.endDate = undefined;
    this.numAdults = 2;
    this.numChildren = 0;
    this.reviewScore = [];
    this.starRating = [];
    this.priceRangeStart = 5;
    this.priceRangeEnd = 500;
    this.distanceStart = 0;
    this.distanceEnd = 5000;
    this.facilities = [];
    this.meals = [];
  }
}
