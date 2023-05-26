export class PriceCatalogFlight {
  id!: number;
  economyPrice!: number;
  premiumPrice!: number;
  businessPrice!: number;
  firstClassPrice!: number;
  discountForChildren!: number;
  discountForMultipleTickets: DiscountForMultipleFlightTickets[] = [];
  luggagePrices: LuggagePrice[] = [];
  priorityBoardingPrice!: number;
  chooseSeatPrice!: number;
  holidaysPriceIncreaseInPercent!: number;
}

export class DiscountForMultipleFlightTickets {
  id!: number;
  numberOfTicketsThreshold!: number;
  discount!: number;
}

export class LuggagePrice {
  id!: number;
  weightThreshold!: number;
  price!: number;
}
