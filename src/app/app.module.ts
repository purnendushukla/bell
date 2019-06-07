import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserConvoPortalComponent } from './user-convo-portal/user-convo-portal.component';
import { UserListComponent } from './user-convo-portal/user-list/user-list.component';
import { UserMessageComponent } from './user-convo-portal/user-message/user-message.component';
import { UsersComponent } from './user-convo-portal/user-list/users/users.component';
import { UserConvoStartPortalComponent } from './user-convo-portal/user-convo-start-portal/user-convo-start-portal.component';
import { AuthComponent } from './auth/auth.component';
import { UserRegisterComponent } from './auth/user-register/user-register.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    UserConvoPortalComponent,
    UserListComponent,
    UserMessageComponent,
    UsersComponent,
    UserConvoStartPortalComponent,
    AuthComponent,
    UserRegisterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
