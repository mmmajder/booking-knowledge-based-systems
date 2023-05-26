export enum SeatClass {
  ECONOMY = "Economy class",
  PREMIUM = "Premium class",
  BUSINESS = "Business class",
  FIRST = "First class"
}

export const seatClassReverseMapping: { [key: string]: string } = {
  "Economy class": "ECONOMY",
  "Premium class": "PREMIUM",
  "Business class": "BUSINESS",
  "First class": "FIRST"
};

