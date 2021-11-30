import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { RequestedBooksComponent } from './requested-books/requested-books.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RequestedBooksComponent,
    IssuedBooksComponent,
    BookListComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
FormsModule,
ReactiveFormsModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
