import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { UploadService } from './upload.service';
import { Package } from 'src/app/interface/package';
import { Router } from '@angular/router';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class Upload {
  fileName = '';
  package: any;
  file:File;
  image: File;
  
    constructor(private uploadservice: UploadService, private router: Router) {
      this.package = {
        name: "",
        description: "",
        size: 0,
        price: 0,
        packageUrl: "",
        imageUrl: ""
      }
    }

    onFileSelected(event: any) {
        this.file = event.target.files[0];      
        console.log("file" ,this.file);  
    }

    OnImageSelected(event: any) {
      this.image = event.target.files[0];       
      console.log("image" ,this.image);  
  }

    updateName(event: any){
      this.package.name = event.target.value;
    }

    updatePrice(event: any){
      this.package.price = event.target.value;
    }

    updateDescription(event: any){
      this.package.description = event.target.value;
    }

    sleep(ms: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }

    async navigateHome(){
      await this.sleep(500);
      this.router.navigateByUrl("/");
    }

    confirm(){
      if (this.file && this.package != null && this.image != null) {
        this.uploadservice.savefile(this.file).subscribe((fileData: any) => {
          console.log(fileData)
          this.package.packageUrl = fileData[0]
          console.log(fileData[1])
          this.package.size = parseFloat(fileData[1])

          this.uploadservice.saveImage(this.image).subscribe((imageData: any) => {
            console.log(imageData)
            this.package.imageUrl = imageData[0]
            console.log(this.package)
            this.uploadservice.savePackage(this.package);

            this.navigateHome();
          })
        })
      }
    }
}
