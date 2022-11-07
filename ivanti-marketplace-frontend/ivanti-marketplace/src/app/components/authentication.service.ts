import { Injectable } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor(private searchService: SearchService) {}
    @Output() getLoggedIn: EventEmitter<any> = new EventEmitter();

    public getJwtToken(): any{
        let token = localStorage.getItem("jwtToken");
        if(token == null){
            token = "";
        }
        return token;
    }
    public setJwtToken(token: string): void{
        localStorage.setItem("jwtToken", token);
        this.getLoggedIn.emit(true);
    }
    
    public clearJwtToken(): void{
        this.searchService.setSearch("")
        localStorage.removeItem("jwtToken")
        this.getLoggedIn.emit(false);
    }

    public setUser(user: object) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    public getUserID(): string{
        let user = {
            id: "",
            name: "",
            role: ""
        }
        let retrievedUser = localStorage.getItem("user");
        if(retrievedUser != null){
            user = JSON.parse(retrievedUser);
            console.log("not null");
        }
        console.log(user.id);
        return user.id;
    }

    public clearUser(){
        localStorage.removeItem("user")
    }
}