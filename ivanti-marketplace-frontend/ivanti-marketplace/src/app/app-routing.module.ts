import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageDescriptionComponent } from './components/package-description/package-description.component';
import { ContentContainer } from './components/content/contentContainer/contentContainer.component';

import { NotFoundPage } from './components/404/notFoundPage.component';
import { LoginPage } from './components/login/login.component';
import { MyAccount } from './components/my-account/myaccount.component';
import { MyDownload } from './components/my-download/mydownload.component';
import { MyUpload } from './components/my-uploads/myupload.component';
import { Upload } from './components/upload/upload.component';
import { RegisterPage } from './components/register/register.component';
import { RegisterSuccessfulPage } from './components/register/register-successful/register-successful.component';
import { Logout } from './components/logout/logout.component';

const routes: Routes = [
  {path: '', component: ContentContainer },
  {path: 'package/:id', component: PackageDescriptionComponent },
  {path: 'login', component: LoginPage},
  {path: 'Account', component: MyAccount},
  {path: 'Downloads', component: MyDownload},
  {path: 'Uploads', component: MyUpload},
  {path: 'Upload', component: Upload},
  {path: 'register' , component: RegisterPage},
  {path: 'register/successful', component: RegisterSuccessfulPage},
  {path: 'logout', component: Logout},

  //404 page
  {path: '**', pathMatch: 'full',  component: NotFoundPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
