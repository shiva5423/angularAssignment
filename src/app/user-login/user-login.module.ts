import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoginRoutingModule } from './user-login-routing.module';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';


@NgModule({
  declarations: [UserDashBoardComponent, TasksComponent, PostsComponent, AlbumsComponent],
  imports: [
    CommonModule,
    UserLoginRoutingModule
  ]
})
export class UserLoginModule { }
