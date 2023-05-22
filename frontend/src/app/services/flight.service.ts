import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../environment.development";
import {AuthService} from "./auth.service";
import {SearchFlightsParams} from "../model/flight/SearchFlightsParams";
import {FlightResponse} from "../model/flight/FlightResponse";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private readonly flightUrl: string;

  constructor(private http: HttpClient) {
    this.flightUrl = environment.apiUrl + '/flights';
  }

  public searchFlights(searchParams: SearchFlightsParams): Observable<FlightResponse> {
    return this.http.post<FlightResponse>(this.flightUrl, searchParams, AuthService.getHttpOptions());
  }

  // addTokens(tokens: number) {
  //   return this.http.put<number>(this.customerUrl + "/tokens", {numberOfTokens: tokens}, AuthService.getHttpOptions());
  // }
}
