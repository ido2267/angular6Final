

import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule}      from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
 
import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
  import { PostsForUserPipe } from './posts-for-user.pipe';
import { TasksPipePipe } from './tasks-pipe.pipe';
 import { ShowUsersComponent } from './show-users/show-users.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
 
const appRoutes : Routes = [
  { path : '' , component : MainMenuComponent } ,
  { path : 'users' , component :UsersComponent, children :[
  { path : 'search-user' , component : SearchUserComponent },
  { path : 'add-user' , component : AddUserComponent },
  { path : 'show-users' , component : ShowUsersComponent},
  { path : 'user-data/:id' , component : UserDataComponent }  ]},
  { path : 'posts', component : PostsComponent},
  { path : 'tasks', component : TasksComponent}

   //,{ path : 'sec-menu/:menu' , component : SecMenuComponent }  
  ];

@NgModule({
  declarations: [
    AppComponent,
     UserDataComponent,
    MainMenuComponent,
      PostsForUserPipe,
    TasksPipePipe,
     ShowUsersComponent,
    SearchUserComponent,
    AddUserComponent,
    TasksComponent,
    PostsComponent,
    UsersComponent 
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
