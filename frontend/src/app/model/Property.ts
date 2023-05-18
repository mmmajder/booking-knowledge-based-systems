import {User} from "./User";

export class HotelResponse {
  id: number;
  name: string;
  address: string;
  image: string;
  country: string;
  city: string;
  rating: number;
  stars: number;

  constructor(id: number, name: string, address: string, image: string, country: string, city: string, rating: number, stars: number) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.image = image;
    this.country = country;
    this.city = city;
    this.rating = rating;
    this.stars = stars;
  }
}

export class PropertyDetails {
  id: string = "";
  image: string = "";
  address: string = "";
  name: string = "";
  type: PropertyType = PropertyType.HOUSE;
  owner: User = new User();
  tenants: User[] = [];
}

export enum PropertyType {
  HOUSE = "House",
  FLAT = "Flat",
  COTTAGE = "Cottage",
  BUSINESS_SPACE = "Business space",
  STORE = "Store"
}

export function getKeyFromValue(value: string | undefined): string | undefined {
  for (const [key, val] of Object.entries(PropertyType)) {
    if (val === value) {
      return (key as keyof typeof PropertyType);
    }
  }
  return undefined;
}

export function getValueByKey(value: string) {
  const indexOfS = Object.keys(PropertyType).indexOf(value as unknown as PropertyType);
  return Object.values(PropertyType)[indexOfS];
}
