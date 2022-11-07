import { Injectable } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
    @Output() getSearchString: EventEmitter<any> = new EventEmitter();

    public setSearch(searchString: any){
        localStorage.setItem("searchString", searchString);
        this.getSearchString.emit(this.getSearch())
    }
    public getSearch(): string{
        let searchString = localStorage.getItem("searchString");
        let returnString = "";
        if(searchString != null){
            returnString = searchString;
        }
        return returnString;
    }
}