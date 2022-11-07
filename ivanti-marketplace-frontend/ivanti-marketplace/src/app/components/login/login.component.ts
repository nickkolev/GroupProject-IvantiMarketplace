import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'loginPage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPage {
  email = "";
  password = "";

  constructor(private loginService: LoginService) {}

  updateEmail(event: any){
    this.email = event.target.value;
  }

  updatePassword(event: any){
    this.password = event.target.value;
  }

  sendLoginRequest(){
    this.loginService.sendLoginRequest(this.email, this.password);
  }
}