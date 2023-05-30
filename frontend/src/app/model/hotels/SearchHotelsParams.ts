export class SearchHotelsParams {
  name: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  numAdults: number;
  numChildren: number;
  reviewScore: number;
  starRating: number[];
  priceRangeStart: number;
  priceRangeEnd: number;
  distanceStart: number;
  distanceEnd: number;
  facilities: string[];
  meals: string;

  constructor() {
    this.name = '';
    this.destination = '';
    this.startDate = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.endDate = tomorrow;
    this.numAdults = 2;
    this.numChildren = 0;
    this.reviewScore = 1;
    this.starRating = [];
    this.priceRangeStart = 0;
    this.priceRangeEnd = 1000;
    this.distanceStart = 0;
    this.distanceEnd = 5000;
    this.facilities = [];
    this.meals = "ALL_INCLUSIVE";
  }
}
