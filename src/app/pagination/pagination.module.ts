import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationRoutingModule } from './pagination-routing.module';
import { ImageComponent } from './image/image.component';


@NgModule({
  declarations: [
    ImageComponent
  ],
  imports: [
    CommonModule,
    PaginationRoutingModule
  ]
})
export class PaginationModule { }
