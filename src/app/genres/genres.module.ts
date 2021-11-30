import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresAddComponent } from './genres-add/genres-add.component';
import { GenresListComponent } from './genres-list/genres-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GenresAddComponent,
    GenresListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GenresRoutingModule
  ]
})
export class GenresModule { }
