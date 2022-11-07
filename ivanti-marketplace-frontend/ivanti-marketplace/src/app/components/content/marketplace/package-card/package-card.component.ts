import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.css']
})
export class PackageCard implements OnInit{

  constructor(private router: Router) { }
  @Input() item = {id:"", name:"", description:"", price:0.00, size:1024, imageUrl: ""};

  sizeDescription = "";
  title = "";
  description = "";

  image = "../../assets/images/placeholder.png"

  ngOnInit(){
    let suffixes = ["B", "KB", "MB", "GB", "TB"]
    let number = this.item.size;
    let suffixIndex = 0

    while(number/1000 > 0.1){
      number = number/1000;
      suffixIndex += 1;
    }

    this.sizeDescription = number.toFixed(0).toString() + " " + suffixes[suffixIndex];

    if(this.item.name.length > 20){
      this.item.name = this.item.name.substr(0, 19) + "...";
    }
    if(this.item.description.length > 65){
      this.item.description = this.item.description.substr(0, 65) + "...";
    }

    if(this.item.imageUrl != ""){
      this.image = this.item.imageUrl;
    }


  }
}
