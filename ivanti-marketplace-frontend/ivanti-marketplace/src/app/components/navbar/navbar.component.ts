import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class Navbar {
  constructor(private authenticationService: AuthenticationService, private router: Router, private searchService: SearchService) {
    authenticationService.getLoggedIn.subscribe(() => this.update())
    searchService.getSearchString.subscribe(() => this.searchString = searchService.getSearch())
   }

  loggedIn = false
  searchString = ""

  ngOnInit() {
    this.update();
    this.searchString = this.searchService.getSearch();
  }

  search(event: any){
    this.searchService.setSearch(event.target.value);
  }

  getSearchString() {
    return this.searchString
  }

  confirmSearch(event: any) {
    this.searchService.setSearch(event.target.value);
    this.router.navigateByUrl("/");
  }

  public update() {
    if(this.authenticationService.getJwtToken() != ""){
      this.loggedIn = true
    }
    else this.loggedIn = false
  }

}