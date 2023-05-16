import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../environment.development";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly customerUrl: string;

  constructor(private http: HttpClient) {
    this.customerUrl = environment.apiUrl + '/customer';
  }

  public getNumberOfTokens(): Observable<number> {
    return this.http.get<number>(this.customerUrl + "/tokens", AuthService.getHttpOptions());
  }

  addTokens(tokens: number) {
    return this.http.put<number>(this.customerUrl + "/tokens", {numberOfTokens: tokens}, AuthService.getHttpOptions());
  }
}
