import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent} from "./user-login/user-login.component";
import {UserConvoPortalComponent} from "./user-convo-portal/user-convo-portal.component";

const routes: Routes = [
  {path: '' ,component:UserLoginComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'userConvoPortal', component: UserConvoPortalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
