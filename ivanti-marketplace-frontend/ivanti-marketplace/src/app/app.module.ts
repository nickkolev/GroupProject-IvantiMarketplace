import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Navbar } from "./components/navbar/navbar.component";
import { ContentContainer } from "./components/content/contentContainer/contentContainer.component";

import { NotFoundPage } from './components/404/notFoundPage.component';

import { PackageDescriptionComponent } from './components/package-description/package-description.component';
import { Dropdown } from './components/dropdown/dropdown.component';
import { MyDownload } from './components/my-download/mydownload.component';
import { MyDownloadModule } from './components/my-download/mydownload.module';
import { MyUpload } from './components/my-uploads/myupload.component';
import { Upload } from './components/upload/upload.component';
import { Logout } from './components/logout/logout.component';
import { RegisterPage } from './components/register/register.component';
import { RegisterSuccessfulPage } from './components/register/register-successful/register-successful.component';
import { LoginPage } from './components/login/login.component';
import { Marketplace } from './components/content/marketplace/marketplace.component';
import { PackageCard } from './components/content/marketplace/package-card/package-card.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    ContentContainer,

    PackageDescriptionComponent,
    NotFoundPage,
    RegisterPage,
    LoginPage,
    Logout,
    Dropdown,
    Marketplace,
    PackageCard,
    MyUpload,
    Upload,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),

    MyDownloadModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
