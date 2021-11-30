import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';
import { RequestedBooksComponent } from './requested-books/requested-books.component';

const routes: Routes = [
  {path:'book/add', component:AddBookComponent},
  {path:'book/list', component:BookListComponent},
  {path:'book/issued', component:IssuedBooksComponent},
  {path:'book/requested', component:RequestedBooksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
