import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserConvoPortalComponent } from './user-convo-portal/user-convo-portal.component';
import { UserListComponent } from './user-convo-portal/user-list/user-list.component';
import { UserMessageComponent } from './user-convo-portal/user-message/user-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    UserConvoPortalComponent,
    UserListComponent,
    UserMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
