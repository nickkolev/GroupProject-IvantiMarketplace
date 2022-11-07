import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private URL = "http://localhost:8082/users";

  constructor(private httpClient: HttpClient) { }

  public sendRegisterRequest(user: object): Observable<boolean>{
    let success = new Subject<boolean>();
    this.httpClient.post(this.URL, user, {observe: 'response'})
    .subscribe((response) => {

      // You can access status:
      success.next(true);
   },
   (error) => {
      success.next(false);
   });

   return success.asObservable();
  }

  public checkEmail(email: string): Observable<boolean>{
    let available = new Subject<boolean>();
    let emailURL = "http://localhost:8082/users/email/" + email;
    this.httpClient.get(emailURL)
    .subscribe((response) => {
      available.next(false);
    },
    (error) => {
      available.next(true);
    })
    

    return available.asObservable(); 
  }

}