import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../../authentication.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  private baseURL = "http://localhost:8082/packages/search";

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': '' }),
    params: new HttpParams()
  };

  public sendGetRequest(searchString: any){
    const opts = { params: new HttpParams({fromString: "string="}) };

    let jwtToken = this.authenticationService.getJwtToken()
    this.httpOptions.headers = new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': jwtToken });
    this.httpOptions.params = new HttpParams({fromString: "string=" + searchString});

    let URL = this.baseURL;
    return this.httpClient.get(URL, this.httpOptions);
  }
}