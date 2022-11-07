import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { PackageDescriptionService } from './package-description.service';

@Component({
  selector: 'app-package-description',
  templateUrl: './package-description.component.html',
  styleUrls: ['./package-description.component.css']
})
export class PackageDescriptionComponent implements OnInit {

  constructor(private packageDescriptionService: PackageDescriptionService, private router: Router, private authenticationService: AuthenticationService) { }

  image = "../../assets/images/placeholder.png"

  package = {
    id: "",
    name: "",
    description: "",
    size: 0,
    price: 0,
    packageUrl: "",
    imageUrl: ""
  }

  owner= {
    name: "",
    email: "",
    role: ""
  }

  ngOnInit(): void {
    if(this.authenticationService.getJwtToken() == ""){
      this.router.navigateByUrl("/login")
    }

    let baseURL = "/package/"
    let id = this.router.url.replace(baseURL, "")
    this.packageDescriptionService.sendGetRequest(id).subscribe((data: any)=>{
      console.log(data);
      this.package = data;
      if(this.package.imageUrl != ""){
        this.image = this.package.imageUrl;
      }
    })  

    this.packageDescriptionService.sendOwnerGetRequest(id).subscribe((data: any) => {
      this.owner = data;
    })
  }
}
