import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = "http://localhost:8082/login";

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': '' }),
  };

  public sendLoginRequest(email: string, password: string){
    let user = {
      email: email,
      password: password
    }
    let retrievedUser = {
      id: "",
      name: "",
      role: ""
    }
    let emailURL = "http://localhost:8082/users/email/" + email;
    this.httpClient.get(emailURL).subscribe((data: any) => {
      retrievedUser.id = data.id;
      retrievedUser.name = data.name;
      retrievedUser.role = data.role;

      this.authenticationService.setUser(retrievedUser)
    })

    this.httpClient.post(this.URL, user).subscribe(data => {
      let templateData:any = {Authorization: ""}
      templateData = data
      this.authenticationService.setJwtToken(templateData.Authorization)
      this.router.navigateByUrl("/");
    },
    error => {
      alert("Could not log in")
    })
  }
}