import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterConfirmationComponent } from './register-confirmation/register-confirmation.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordConfirmationComponent } from './reset-password-confirmation/reset-password-confirmation.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ForgotpasswordConfirmationComponent } from './forgotpassword-confirmation/forgotpassword-confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginnComponent } from './loginn/loginn.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterConfirmationComponent,
    ResetPasswordComponent,
    ResetPasswordConfirmationComponent,
    ForgotpasswordComponent,
    ForgotpasswordConfirmationComponent,
    LoginnComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
