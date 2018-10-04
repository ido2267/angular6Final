import { Component, OnInit,OnDestroy } from '@angular/core';
import {UsersObj} from '../types/users-obj';  
import {TasksObj} from '../types/tasks-obj';
import {PostsObj} from '../types/posts-obj';
import { Router, ActivatedRoute} from '@angular/router';
import {GetDataService} from '../servicefolder/get-data.service';
import {MatButtonModule, MatCheckboxModule, MatDialog} from '@angular/material';
 


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit ,OnDestroy{

  userId:number=0;
  singleUser:UsersObj;
  postsArr:PostsObj[]=[];
  tasksArr:TasksObj[]=[];
  usereDeleted:boolean=true;
  userUpdated:boolean=true;
  DataExists:boolean=true;
  emailPattern:string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";

  constructor(private userService:GetDataService ,private lastPage : Router ,
    private actRoute : ActivatedRoute, public dialog: MatDialog ) { }

  prev(){
    this.lastPage.navigate(['/users/show-users']);
 
  }

  ngOnInit() {
 
    this.actRoute.params.subscribe( data =>
      { this.userId = data['id'] 
            this.singleUser  = this.userService.getSingleUser(this.userId);   
            this.postsArr  = this.userService.getPostsForUser(this.userId);  
             this.tasksArr  = this.userService.getTasksForUser(this.userId).filter(x=> !x.taskObjCompleted) 
           }
        );

            if ( this.postsArr.length==0 &&  this.tasksArr.length ==0  )
            {
              this.DataExists = false;
            }

     }
     openDialog() {
          const dialogRef = this.dialog.open(DialogWindow);
          dialogRef.afterClosed().subscribe(result => {
            if (result==true) {this.deleteUser();}
          });
       }
 
    deleteUser(){
       this.usereDeleted =  this.userService.deleteUser(this.singleUser.UserObjUserId);
            if (this.usereDeleted){
              this.singleUser.UserObjUserId = 0;
              this.singleUser.UserObjName = "";
              this.singleUser.UserObjEmail = "";
              this.singleUser.UserObjCity ="";
              alert ('User deleted');
                }
                
          this.prev();      
    }

    updateUser(valid:boolean): void{
       if (!valid){
        alert ("Invalid data, User not updated");
        return;
      }
      this.userUpdated =  this.userService.updateUser(this.singleUser);
      if (this.userUpdated )
      { alert ("User updated! \n\ Name: " + this.singleUser.UserObjName
      + " \n\ Email: "  +  this.singleUser.UserObjEmail + " \n\ City: "
      + this.singleUser.UserObjCity  );;}

      this.prev(); 
    }
    ngOnDestroy(){}
   }

   
@Component({
  selector: 'dialog-window',
  templateUrl: 'dialog-window.html',
  styleUrls: ['./user-data.component.css']

})
export class DialogWindow {}
