import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.html',
  styleUrls: ['./dropdown.css']
})
export class Dropdown implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
    authenticationService.getLoggedIn.subscribe(() => this.update())
   }

  loggedIn = false

  ngOnInit() {
    this.update()
  }

  public update() {
    if(this.authenticationService.getJwtToken() != ""){
      this.loggedIn = true
    }
    else this.loggedIn = false
  }

}