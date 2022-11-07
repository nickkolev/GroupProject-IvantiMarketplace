import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MarketplaceService } from './marketplace.service';

import { AuthenticationService } from '../../authentication.service';
import { SearchService } from '../../search.service';

@Component({
  selector: 'marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class Marketplace {
  constructor(private marketplaceService: MarketplaceService, private router: Router, private authenticationService: AuthenticationService, private searchService: SearchService) { 
    searchService.getSearchString.subscribe((searchString) => this.updateList(searchString))
  }
  

  packages = []

  ngOnInit() {
    if(this.authenticationService.getJwtToken() == ""){
      this.router.navigateByUrl("/login")
    }
    this.updateList(this.searchService.getSearch())
  }

  updateList(searchString: any){
    this.marketplaceService.sendGetRequest(searchString).subscribe((data: any)=>{
      this.packages = data;
      console.log(data);
    })
  }

  navigate(){
    this.router.navigateByUrl("");
  }
}

