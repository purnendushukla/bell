import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent} from "./auth/user-login/user-login.component";
import {UserConvoPortalComponent} from "./user-convo-portal/user-convo-portal.component";
import {UserMessageComponent} from './user-convo-portal/user-message/user-message.component';
import {UserConvoStartPortalComponent} from './user-convo-portal/user-convo-start-portal/user-convo-start-portal.component';
import {UserRegisterComponent} from './auth/user-register/user-register.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'register', component: UserRegisterComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'portal', component: UserConvoPortalComponent, children: [
      {path: '', component: UserConvoStartPortalComponent},
      {path: 'messageBy/:id', component: UserMessageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
