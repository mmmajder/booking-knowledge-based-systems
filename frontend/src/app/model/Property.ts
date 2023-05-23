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
  id: number = 0;
  name: string = "";
  address: string = "";
  imageUrl: string = "";
  country: string = "";
  city: string = "";
  rating: number = 0;
  stars: number = 5;
  reviews: any = [];
  facilities: any = [];
  distanceFromCenter: number = 0;
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
