import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'registerPage',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterPage {
  emailAvailable = true;
  emailValid = false;

  user = {
    email: "",
    name: "",
    password: "",
    userType: "USER"
  }

  constructor(private registerService: RegisterService, private router: Router) {}

  updateEmail(event: any){
    this.user.email = event.target.value;
    this.checkEmailAvailable();
    this.checkEmailValid();
  }

  updateUsername(event: any){
    this.user.name = event.target.value;
  }

  updatePassword(event: any){
    this.user.password = event.target.value;
  }

  sendRegisterRequest(){
    let response = this.registerService.sendRegisterRequest(this.user);
    response.subscribe(success => {
      console.log(success);
      if(success){
        this.successfulRegister();
      }
      else{
        alert("Could not register: This email is already in use");
      }
    });
  }

  successfulRegister(){
    this.router.navigateByUrl("register/successful");
  }

  checkEmailAvailable(){
    this.registerService.checkEmail(this.user.email)
    .subscribe(available => {
      this.emailAvailable = available;
    });
  }

  checkEmailValid(){
    this.emailValid = this.validateEmail(this.user.email);
  }

  validateEmail(email: string){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
}