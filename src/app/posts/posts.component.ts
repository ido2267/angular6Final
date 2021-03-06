import { Component, OnInit,OnDestroy } from '@angular/core';
import {UsersObj} from '../types/users-obj';  
import {PostsObj} from '../types/posts-obj';
import {PresentPosts} from '../types/present-posts';
 
import {GetDataService} from '../servicefolder/get-data.service';
import { Router, ActivatedRoute} from '@angular/router';
import {PostsForUserPipe} from '../servicefolder/posts-for-user.pipe';
  
   
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit ,OnDestroy{

   
  usersArr:UsersObj[]=[];
  postArr:PostsObj[]=[];
  postsForShow:PresentPosts[]=[];
  inUserId:number=0;
  inUserName:string="";
  userExist:boolean=false;
  tasksStatus:string="all";
 
  constructor(private serviceInst:GetDataService,  private menuRoute : Router, private menuAr : ActivatedRoute) { }
  prev(){ // return to prevoius page 
     this.menuRoute.navigate(['/users/show-users']);

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
         // load posts into postsForShow array 
          this.postArr.forEach (x =>  {
          let str:string;
          str =   // Get user name by user id 
            this.usersArr.filter(y=> y.UserObjUserId == x.postObjUserId).map(z => z.UserObjName).reduce (
          (xx,yy) => {if ( xx == yy ) return xx;});
            // create a class of post for presentation 
          let currPost:PresentPosts = new PresentPosts( x.postObjId,  x.postObjUserId, x.postObjTitle , str);
          // add class to the array
           this.postsForShow.push(currPost) 
            });
    }

  ngOnDestroy(){}
}
