import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleAddComponent } from './role-add/role-add.component';

const routes: Routes = [
  {path:'role/add', component:RoleAddComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
