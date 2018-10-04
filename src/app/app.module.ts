import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule}      from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {untilComponentDestroyed} from "@w11k/ngx-componentdestroyed";


import { AppComponent } from './app.component';
import { UserDataComponent ,DialogWindow } from './user-data/user-data.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
  import { PostsForUserPipe } from './servicefolder/posts-for-user.pipe';
import { TasksPipePipe } from './servicefolder/tasks-pipe.pipe';
 import { ShowUsersComponent } from './show-users/show-users.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { AddUserComponent} from './add-user/add-user.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule 
} from '@angular/material';

const appRoutes : Routes = [
  { path : '' , component : MainMenuComponent } ,
  { path : 'users' , component :UsersComponent, children :[
  { path : 'search-user' , component : SearchUserComponent },
  { path : 'add-user' , component : AddUserComponent },
  { path : 'show-users' , component : ShowUsersComponent},
  { path : 'user-data/:id' , component : UserDataComponent }  ]},
  { path : 'posts', component : PostsComponent},
  { path : 'tasks', component : TasksComponent}  ];

  @NgModule({
    exports: [
      CdkTableModule,
      CdkTreeModule,
      MatAutocompleteModule,
      MatBadgeModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatStepperModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTreeModule,
    ]
  })
  export class DemoMaterialModule {}
  
@NgModule({
  declarations: [
    AppComponent,
     UserDataComponent, DialogWindow,
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
        
    RouterModule.forRoot(appRoutes) ,
    BrowserAnimationsModule, MatDialogModule,
    MatButtonModule, MatCheckboxModule ],
    entryComponents: [UserDataComponent, DialogWindow],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
