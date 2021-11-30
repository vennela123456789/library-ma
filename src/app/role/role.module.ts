import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleListComponent } from './role-list/role-list.component';


@NgModule({
  declarations: [
    RoleAddComponent,
    RoleListComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }
