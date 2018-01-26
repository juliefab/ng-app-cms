import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { UserService } from './user.service';
import { AppRoutingModule } from './/app-routing.module';
import { UserViewComponent } from './user-view/user-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { FormsModule }   from '@angular/forms';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PostsComponent } from './posts/posts.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserViewComponent,
    UserCreateComponent,
    UserEditComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
     FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
