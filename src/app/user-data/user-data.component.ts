import { Component, OnInit } from '@angular/core';
import {UsersObj} from '../users-obj';  
import {TasksObj} from '../tasks-obj';
import {PostsObj} from '../posts-obj';
import { Router, ActivatedRoute} from '@angular/router';
import {GetDataService} from '../get-data.service';
 


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  userId:number=0;
  singleUser:UsersObj;
  postsArray:PostsObj[]=[];
  tasksArray:TasksObj[]=[];
  usereDeleted:boolean=true;
  userUpdated:boolean=true;
  DataExists:boolean=true;
  emailPattern:string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";

  constructor(private userService:GetDataService ,private lastPage : Router ,private actRoute : ActivatedRoute ) { }

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
            this.postsArray  = this.userService.getPostsForUser(this.userId);  
            this.tasksArray  = this.userService.getTasks(this.userId).filter(x=> !x.taskObjCompleted) 
           }
    );

    if ( this.postsArray.length==0 &&  this.tasksArray.length ==0  )
    {
      this.DataExists = false;
    }

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