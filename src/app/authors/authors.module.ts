import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorsAddComponent } from './authors-add/authors-add.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorsRoutingModule } from './authors-routing.module';


@NgModule({
  declarations: [
    AuthorsAddComponent,
    AuthorsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  AuthorsRoutingModule  ]
})
export class AuthorsModule { }
