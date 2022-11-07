import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from 'src/app/interface/package';

@Component({
    selector: 'packagedownload',
    templateUrl: './packagedownload.component.html',
    styleUrls: ['./packagedownload.component.css']
  })

  export class PackageDownload{
    constructor(private router: Router) { }
    @Input() item = {id:"", name:"", description:"", price:0.00};
  
    ngOnInit() {
    }

  }