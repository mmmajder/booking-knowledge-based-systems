import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {environment} from "../environment.development";
import {HotelResponse, PropertyDetails} from "../model/Property";
import {SearchHotelsParams} from "../model/hotels/SearchHotelsParams";
import {ReserveHotelParams, ReviewHotelParams} from "../model/hotels/ReserveParams";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private readonly propertiesUrl: string;

  constructor(private http: HttpClient) {
    this.propertiesUrl = environment.apiUrl + '/hotels';
  }

  public getProperties(search: SearchHotelsParams): Observable<HotelResponse[]> {
    return this.http.post<HotelResponse[]>(this.propertiesUrl, search, AuthService.getHttpOptions());
  }

  getProperty(id: number): Observable<PropertyDetails> {
    return this.http.get<PropertyDetails>(this.propertiesUrl + "/" + id, AuthService.getHttpOptions());
  }

  getPopularHotels() {
    return this.http.get<HotelResponse[]>(this.propertiesUrl + "/popular", AuthService.getHttpOptions());
  }

  reserve(params: ReserveHotelParams) {
    return this.http.post<boolean>(this.propertiesUrl + "/reserve", params, AuthService.getHttpOptions());
  }

  review(params: ReviewHotelParams) {
    return this.http.post<void>(this.propertiesUrl + "/review", params, AuthService.getHttpOptions());
  }
}
