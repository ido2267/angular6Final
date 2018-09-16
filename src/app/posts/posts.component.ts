import { Component, OnInit } from '@angular/core';

 import {UsersObj} from '../users-obj';  
 import {PostsObj} from '../posts-obj';
import {PresentPosts} from '../present-posts';
 
import {GetDataService} from '../get-data.service';
import { Router, ActivatedRoute} from '@angular/router';
import {PostsForUserPipe} from '../posts-for-user.pipe';
  
   
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

   
  usersArr:UsersObj[]=[];
   postArr:PostsObj[]=[];
  postsForShow:PresentPosts[]=[];
 
//   menuItem:string="";
  inUserId:number=0;
  inUserName:string="";
  userExist:boolean=false;
  tasksStatus:string="all";
 
  constructor(private serviceInst:GetDataService,  private menuRoute : Router, private menuAr : ActivatedRoute) { }
  prev(){ // return to prevoius page 
    this.menuRoute.navigate(['']);
 }

 getUserId(userId:number){
  // search for the number in user's id of users array 
      this.inUserId = this.usersArr.map(y => y.UserObjUserId).filter(x => x == userId)[0] ;
          // if the number exists update the variable  userExist
      if   ( this.inUserId == userId)  
      {  this.userExist = true;  }
      else
            { this.userExist = false;
            this.inUserId = 0; }
          }

  

  ngOnInit() {    
        
           // this.menuAr.params.subscribe( data => this.menuItem = data['menu'] );
        this.postArr = this.serviceInst.getPostsArray();
        this.usersArr = this.serviceInst.getUsersArray();
        console.log('in posts'  this.postArr.length) ; // debug 
        // load posts into postsForShow array 
          this.postArr.forEach (x =>  {
          let str:string;
          str =   // Get user name by user id 
            this.usersArr.filter(y=> y.UserObjUserId == x.postObjUserId).map(z => z.UserObjName).reduce (
          (xx,yy) => xx);
          console.log('str ' + str); // debug 
            // create a class of post for presentation 
          let currPost:PresentPosts = new PresentPosts( x.postObjId,  x.postObjUserId, x.postObjTitle , str);
          // add class to the array
           this.postsForShow.push(currPost) 
            });
    }


}
