import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsAddComponent } from './authors-add/authors-add.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';


const routes: Routes = [
    {path:'author/add', component:AuthorsAddComponent},
    {path:'author/list', component:AuthorsListComponent}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class AuthorsRoutingModule { }
