import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenlibRoutingModule } from './openlib-routing.module';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    OpenlibRoutingModule
  ]
})
export class OpenlibModule { }
