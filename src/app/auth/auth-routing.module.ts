import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordConfirmationComponent } from './forgotpassword-confirmation/forgotpassword-confirmation.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { LoginnComponent } from './loginn/loginn.component';

const routes: Routes = [
  {path:'auth/forgot', component:ForgotpasswordComponent },
  {path:'auth/login', component:LoginComponent },
  {path:'auth/loginn', component:LoginnComponent },
  {path:'auth/forgotconfirm', component:ForgotpasswordConfirmationComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
