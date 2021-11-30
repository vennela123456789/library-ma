import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminService } from './admin.service';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { GenresModule } from './genres/genres.module';
import { OpenlibModule } from './openlib/openlib.module';
import { PaginationModule } from './pagination/pagination.module';
import { PublisherModule } from './publisher/publisher.module';
import { RoleModule } from './role/role.module';
import { AuthorsService } from './services/authors.service';
import { BooksService } from './services/books.service';
import { GenresService } from './services/genres.service';
import { RoleService } from './services/role.service';
import { UsersService } from './services/users.service';
import { UsersModule } from './users/users.module';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AuthorsModule,
    GenresModule,
    PublisherModule,
    AdminModule,
    UsersModule,
    RoleModule,
    BooksModule,
    OpenlibModule,
    PaginationModule,
    AppRoutingModule
  ],
  providers: [AuthorsService, GenresService,AdminService,UsersService,RoleService,BooksService],
  bootstrap: [AppComponent],
})
export class AppModule { }
