import { NgModule }             from '@angular/core';
import { UserViewComponent }   from './user-view/user-view.component';
import { PostViewComponent }   from './post-view/post-view.component';
// 1. Routing Libraries
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent }   from './user-create/user-create.component';
// 2. Import the UserComponent
import { UsersComponent }   from './users/users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PostsComponent } from './posts/posts.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
// 3. Declare your routes
const routes: Routes = [
  // 4. The default route
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  // 5. Map /users to the UsersComponent
  { path: 'users', component: UsersComponent },
  { path: 'users/view/:id', component: UserViewComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/view/:id', component: PostViewComponent },
  { path: 'posts/create', component: PostCreateComponent },
  { path: 'posts/edit/:id', component: PostEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
