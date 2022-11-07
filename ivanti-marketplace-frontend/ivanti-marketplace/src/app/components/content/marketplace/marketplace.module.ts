import { NgModule } from '@angular/core';
import { Marketplace } from './marketplace.component';
import { PackageCard } from './package-card/package-card.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
      Marketplace,
      PackageCard
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [
        Marketplace
    ],
    exports: [
        Marketplace
    ]
  })
  export class MarketplaceModule {
   }
  