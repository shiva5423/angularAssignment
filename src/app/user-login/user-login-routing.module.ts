import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { TasksComponent } from './tasks/tasks.component';
import { AlbumsComponent } from './albums/albums.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [{path:"userDashBoard",component:UserDashBoardComponent,
children:[{path:"tasks",component:TasksComponent},
{path:"posts",component:PostsComponent},
{path:"albums",component:AlbumsComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLoginRoutingModule { }
