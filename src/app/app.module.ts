

import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule}      from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SecMenuComponent } from './sec-menu/sec-menu.component';
import { PlatformComponent } from './platform/platform.component';
import { PostsForUserPipe } from './posts-for-user.pipe';
import { TasksPipePipe } from './tasks-pipe.pipe';
import { ChildMenuComponent } from './child-menu/child-menu.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostsComponent } from './posts/posts.component';
 
const appRoutes : Routes = [
   {path: '', component:PlatformComponent},
//  { path : '' , component : MainMenuComponent } ,
   { path : 'main-menu' , component : MainMenuComponent } ,
   { path : 'child-menu' , component :ChildMenuComponent} ,
   
   { path : 'show-users' , component : ShowUsersComponent },
   { path : 'user-data/:id' , component : UserDataComponent },
  { path : 'sec-menu/:menu' , component : SecMenuComponent }  ];

@NgModule({
  declarations: [
    AppComponent,
     UserDataComponent,
    MainMenuComponent,
    SecMenuComponent,
   PlatformComponent,
    PostsForUserPipe,
    TasksPipePipe,
    ChildMenuComponent,
    ShowUsersComponent,
    SearchUserComponent,
    AddUserComponent,
    TasksComponent,
    PostsComponent 
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
