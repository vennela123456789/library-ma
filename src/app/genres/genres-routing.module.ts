import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresAddComponent } from './genres-add/genres-add.component';
import { GenresListComponent } from './genres-list/genres-list.component';

const routes: Routes = [
  {path:'genres/add', component:GenresAddComponent},
  {path:'genres/list', component:GenresListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule { }
