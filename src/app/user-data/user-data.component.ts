import { Component, OnInit } from '@angular/core';
import {UsersObj} from '../users-obj';  
import {TasksObj} from '../tasks-obj';
import {PostsObj} from '../posts-obj';
import { Router, ActivatedRoute} from '@angular/router';
import {GetDataService} from '../get-data.service';
import {MatButtonModule, MatCheckboxModule, MatDialog} from '@angular/material';
 


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

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
  //   this.lastPage.navigate(['sec-menu/:users']);
   this.lastPage.navigate(['/users/show-users']);
 
  }

  ngOnInit() {
     // recieves user's id from the parent component and retrieve the relevant data for this user
    // the data is retrieved from the arrays in service get-data.service 
    this.actRoute.params.subscribe( data =>
      { this.userId = data['id'] 
            this.singleUser  = this.userService.getSingleUser(this.userId);   
            this.postsArr  = this.userService.getPostsForUser(this.userId);  
            // only uncompleted tasks will be presented
            this.tasksArr  = this.userService.getTasksForUser(this.userId).filter(x=> !x.taskObjCompleted) 
           }
        );

            if ( this.postsArr.length==0 &&  this.tasksArr.length ==0  )
            {
              this.DataExists = false;
            }

     }
    // alert message before delete
    openDialog() {
          const dialogRef = this.dialog.open(DialogWindow);
          dialogRef.afterClosed().subscribe(result => {
            if (result==true) {this.deleteUser();}
          });
       }


    // Send a delete command to the service
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
   }

   
@Component({
  selector: 'dialog-window',
  templateUrl: 'dialog-window.html',
})
export class DialogWindow {}
