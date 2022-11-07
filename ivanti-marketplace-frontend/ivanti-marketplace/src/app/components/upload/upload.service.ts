import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Package } from 'src/app/interface/package';
import { AuthenticationService } from '../authentication.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UploadService{

    private url = "http://localhost:8082";

    constructor(private httpClient: HttpClient, private authenticationservice: AuthenticationService) { }

    httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': '' }),
      params: new HttpParams()
    };

    public savefile(file: File): any{
        const formData = new FormData();

        formData.append("file", file);
        let jwtToken = this.authenticationservice.getJwtToken()
        this.httpOptions.headers = new HttpHeaders({ 
        'Authorization': jwtToken });

        return this.httpClient.post(this.url + "/packages/upload", formData, this.httpOptions);
    }

    public savePackage(uploadpackage: any){
      console.log("package", uploadpackage);
      let jwtToken = this.authenticationservice.getJwtToken()
      this.httpOptions.headers = new HttpHeaders({ 
      'Authorization': jwtToken });
      let userID = this.authenticationservice.getUserID()
      this.httpOptions.params = new HttpParams({fromString: "userID=" + userID});
      const upload$ = this.httpClient.post(this.url + "/packages", uploadpackage, this.httpOptions);
      upload$.subscribe();
      console.log("package success");
    }

    public saveImage(file: File){
      const formData = new FormData();

        formData.append("file", file);
        let jwtToken = this.authenticationservice.getJwtToken()
        this.httpOptions.headers = new HttpHeaders({ 
        'Authorization': jwtToken });

        return this.httpClient.post(this.url + "/packages/upload/image", formData, this.httpOptions)
    }
}