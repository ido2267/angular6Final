import { Component, OnInit } from '@angular/core';
import {UsersObj} from '../users-obj';  
import {TasksObj} from '../tasks-obj';
import {PostsObj} from '../posts-obj';
import {PresentPosts} from '../present-posts';
 
import {GetDataService} from '../get-data.service';
import { Router, ActivatedRoute} from '@angular/router';
import {PostsForUserPipe} from '../posts-for-user.pipe';
import {TasksPipePipe  }  from '../tasks-pipe.pipe';


@Component({
  selector: 'app-sec-menu',
  templateUrl: './sec-menu.component.html',
  styleUrls: ['./sec-menu.component.css']
})
export class SecMenuComponent implements OnInit {
   
  usersArr:UsersObj[]=[];
  tasksArr:TasksObj[]=[];
  postArr:PostsObj[]=[];
  postsForShow:PresentPosts[]=[];
  showUsers:boolean=false;
  showTasks:boolean=false;
  showPosts:boolean=false;
  menuItem:string="";
  inUserId:number=0;
  inUserName:string="";
  userExist:boolean=false;
  tasksStatus:string="all";
  taskColor:string="red";

  constructor(private serviceInst:GetDataService,  private menuRoute : Router, private menuAr : ActivatedRoute) { }
  prev(){ // return to prevoius page 
    this.menuRoute.navigate(['child-menu/']);
 }


  getUsers(){
    this.showUsers = !this.showUsers;
    this.showPosts = false;
    this.showTasks = false
      this.usersArr = this.serviceInst.usersArray;
  //   console.log('name  ' + this.usersArr[0].UserObjName + ' city ' +  this.usersArr[0].UserObjCity);
  }
  getUserId(userId:number){
     // search for the number in user's id of users array 
      this.inUserId =
       this.usersArr.map(y => y.UserObjUserId).filter(x => x == userId)[0] ;
  // if the number exists update the variable  userExist
   if   ( this.inUserId == userId)  
   {  this.userExist = true;  }
    else
         { this.userExist = false;
          this.inUserId = 0; }
  }

 

  getPosts(){
    this.showPosts = !this.showPosts;
    this.showUsers = false;
     this.showTasks = false
     this.postArr = this.serviceInst.postsArray;
     this.usersArr = this.serviceInst.usersArray;
     // load posts into postsForShow array 
      this.postArr.forEach (x =>  {
      let str:string;
      str =   // Get user name by user id 
        this.usersArr.filter(y=> y.UserObjUserId == x.postObjUserId).map(z => z.UserObjName).reduce (
      (xx,yy) => xx);
        // create a class of post for presentation 
      let currPost:PresentPosts = new PresentPosts( x.postObjId,  x.postObjUserId, x.postObjTitle , str);
      // add class to the array
       this.postsForShow.push(currPost) 
         });
        
 
   }
    
    // fill tasks array 
  getTasks( ){
    this.showTasks = !this.showTasks;
    this.showUsers = false;                  
    this.showPosts = false;
    this.tasksArr = this.serviceInst.tasksArray;
   }




  ngOnInit() {    
    console.log('in sec-menu');// debug 

    this.menuAr.params.subscribe( data => this.menuItem = data['menu'] );
 // determine the type of screen the user will se:
     switch(this.menuItem)
    {
      case "users":
      this.getUsers()
      break;
      case "tasks"   :
      this.getTasks()
      break;
      case "posts":
      this.getPosts();
      break;
      default:
     // this.menuRoute.navigate(['/main-menu']);
     this.getUsers();
    }
    
   }


}
