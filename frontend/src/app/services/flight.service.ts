import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../environment.development";
import {AuthService} from "./auth.service";
import {SearchFlightsParams} from "../model/flight/SearchFlightsParams";
import {FlightResponse} from "../model/flight/FlightResponse";
import {FlightBasePriceResponse} from "../model/flight/FlightBasePriceResponse";
import {FlightPriceRequest} from "../model/flight/FlightPriceRequest";
import {AdditionalServicesRequestEvent} from "../model/flight/AdditionalServicesRequestEvent";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private readonly flightUrl: string;

  constructor(private http: HttpClient) {
    this.flightUrl = environment.apiUrl + '/flights';
  }

  public searchFlights(searchParams: SearchFlightsParams): Observable<FlightResponse[][]> {
    return this.http.post<FlightResponse[][]>(this.flightUrl, searchParams, AuthService.getHttpOptions());
  }

  public getBasePrice(requestBody: FlightPriceRequest): Observable<FlightBasePriceResponse[]> {
    return this.http.post<FlightBasePriceResponse[]>(this.flightUrl + "/base-price", requestBody, AuthService.getHttpOptions());
  }

  public getAdditionalServicesPrice(requestBody: AdditionalServicesRequestEvent[]): Observable<AdditionalServicesRequestEvent[]> {
    return this.http.post<AdditionalServicesRequestEvent[]>(this.flightUrl + "/additional-services", requestBody, AuthService.getHttpOptions());
  }

  public getGrandTotalPrice(): Observable<number> {
    return this.http.get<number>(this.flightUrl + "/grand-total-price", AuthService.getHttpOptions());
  }

  public reserveFlights(requestBody: { totalPrice: number; flights: FlightResponse[] }): Observable<AdditionalServicesRequestEvent[]> {
    return this.http.post<AdditionalServicesRequestEvent[]>(this.flightUrl + "/reserve", requestBody, AuthService.getHttpOptions());
  }
}
