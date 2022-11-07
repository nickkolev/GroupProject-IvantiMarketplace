import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class Logout implements OnInit  {
  constructor(private authenticationSerivce: AuthenticationService, private router: Router) {}

  ngOnInit(){
    this.authenticationSerivce.clearJwtToken();
    this.authenticationSerivce.clearUser();
    this.router.navigateByUrl("/login");
  }
}