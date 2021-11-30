import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './add-users/add-users.component';
import { AllRolesComponent } from './all-roles/all-roles.component';
import { AllUsersComponent } from './all-users/all-users.component';

const routes: Routes = [
  {path:'users/add', component:AddUsersComponent},
  {path:'users/all', component:AllUsersComponent},
  {path:'users/roles', component:AllRolesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
