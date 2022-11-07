import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from 'src/app/interface/package';
import { AuthenticationService } from '../authentication.service';

@Component({
    selector: 'mydownload',
    templateUrl: './mydownload.component.html',
    styleUrls: ['./mydownload.component.css']
  })

  export class MyDownload{
    constructor(private router: Router, private authenticationService: AuthenticationService) { }
  

    packages: Package[] = [
        {id:"1", name:"1", price: 1, size: 1, description: "ddd", imageUrl: "ddd", packageUrl: "ddd"},
        {id:"1", name:"2", price: 2, size: 2, description: "ddd", packageUrl: "ddd", imageUrl: "ddd"}
    ];

    ngOnInit() {
      if(this.authenticationService.getJwtToken() == ""){
        this.router.navigateByUrl("/login")
      }
    }

  }