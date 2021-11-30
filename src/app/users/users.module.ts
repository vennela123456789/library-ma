import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AllUsersComponent } from './all-users/all-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { AllRolesComponent } from './all-roles/all-roles.component';


@NgModule({
  declarations: [
    AllUsersComponent,
    AddUsersComponent,
    AllRolesComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
