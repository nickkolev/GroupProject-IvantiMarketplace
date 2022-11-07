import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
    selector: 'myaccount',
    templateUrl: './myaccount.component.html',
    styleUrls: ['./myaccount.component.css']
  })

  export class MyAccount{
    constructor(private authenticationService: AuthenticationService, private router: Router) {}
    ngOnInit(){
      if(this.authenticationService.getJwtToken() == ""){
        this.router.navigateByUrl("/login")
      }
    }
  }