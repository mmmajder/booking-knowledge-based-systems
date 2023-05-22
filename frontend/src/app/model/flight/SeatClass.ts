export enum SeatClass {
  ECONOMIC = "Economy class",
  PREMIUM = "Premium class",
  BUSINESS = "Business class",
  FIRST = "First class"
}

export const seatClassReverseMapping: { [key: string]: string } = {
  "Economy class": "ECONOMIC",
  "Premium class": "PREMIUM",
  "Business class": "BUSINESS",
  "First class": "FIRST"
};
