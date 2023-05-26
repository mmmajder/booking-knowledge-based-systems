import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {environment} from "../environment.development";
import {HotelResponse, PropertyDetails} from "../model/Property";
import {SearchHotelsParams} from "../model/hotels/SearchHotelsParams";

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
}
