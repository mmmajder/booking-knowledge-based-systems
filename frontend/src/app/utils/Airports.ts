export class Airport {
  name: string;
  country: string;
  code: string;

  constructor(name: string, country: string, code: string) {
    this.name = name;
    this.country = country;
    this.code = code;
  }
}

export const airports: Airport[] = [
  new Airport("Aarhus", "Denmark", "AAR"),
  new Airport("Belgrad (Beograd) - Belgrade Nikola Tesla International", "Serbia", "BEG"),
  new Airport("Sofia - Vrazhdebna", "Bulgaria", "SOF"),
  new Airport("Nis", "Serbia", "INI"),
  new Airport("Istanbul - Istanbul Atatürk Airport", "Turkey", "IST"),
  new Airport("Amsterdam - Amsterdam Airport Schiphol", "Netherlands", "AMS"),
  new Airport("Paris", "France", "PAR"),
  new Airport("Muenchen (Munich) - Franz Josef Strauss", "Germany", "MUC"),
  new Airport("Zurich (Zürich) - Kloten", "Switzerland", "ZRH")
];
