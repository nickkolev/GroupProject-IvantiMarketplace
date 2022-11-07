import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MyDownload } from './mydownload.component';
import { PackageDownload } from './package/packagedownload.component';

@NgModule({
    declarations: [
     MyDownload,
     PackageDownload,
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [
        MyDownload
    ],
    exports: [
        MyDownload
    ]
  })
  export class MyDownloadModule {
   }
  