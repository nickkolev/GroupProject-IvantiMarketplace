import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from 'src/app/interface/package';
import { AuthenticationService } from '../authentication.service';
import { MarketplaceService } from '../content/marketplace/marketplace.service';

@Component({
    selector: 'myupload',
    templateUrl: './myupload.component.html',
    styleUrls: ['./myupload.component.css']
  })

  export class MyUpload{
    
    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    packages: Package[] = [
      {id:"1", name:"1", price: 1, size: 1, description: "ddd", imageUrl: "ddd", packageUrl: "ddd"},
      {id:"2", name:"3", price: 2, size: 2, description: "ddd", imageUrl: "ddd", packageUrl: "ddd"}
    ];

    ngOnInit() {
      if(this.authenticationService.getJwtToken() == ""){
        this.router.navigateByUrl("/login")
      }
    }

  }