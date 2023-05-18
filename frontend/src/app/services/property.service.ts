import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this.http.get<PropertyDetails>(this.propertiesUrl, AuthService.getHttpOptions(queryParams));
  }
}
