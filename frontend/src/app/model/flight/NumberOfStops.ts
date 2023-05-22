export enum NumberOfStops {
  ANY = "Any",
  NONE="No stops",
  ONE_MAX="Max one stop",
}

export const numberOfStopsReverseMapping: { [key: string]: string } = {
  "Any": "ANY",
  "No stops": "NONE",
  "Max one stop": "ONE_MAX"
};
