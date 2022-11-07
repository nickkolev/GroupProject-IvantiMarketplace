import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PackageDescriptionService {

  private URL = "http://localhost:8082/packages/";

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': '' })
  };

  public sendGetRequest(id: string){
    let jwtToken = this.authenticationService.getJwtToken()
    this.httpOptions.headers = new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': jwtToken })

    return this.httpClient.get(this.URL + id, this.httpOptions);
  }

  public sendOwnerGetRequest(id: string){
    let jwtToken = this.authenticationService.getJwtToken()
    this.httpOptions.headers = new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': jwtToken })

    return this.httpClient.get(this.URL + id + "/owner", this.httpOptions);
  }
}