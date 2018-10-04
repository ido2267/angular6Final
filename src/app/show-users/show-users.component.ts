import { Component, OnInit,OnDestroy } from '@angular/core';
import {UsersObj} from '../types/users-obj';  
import {TasksObj} from '../types/tasks-obj';
import {PostsObj} from '../types/posts-obj';
import {PresentPosts} from '../types/present-posts';
 
import {GetDataService} from '../servicefolder/get-data.service';
import { Router, ActivatedRoute} from '@angular/router';
import {PostsForUserPipe} from '../servicefolder/posts-for-user.pipe';
import {TasksPipePipe  }  from '../servicefolder/tasks-pipe.pipe';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit ,OnDestroy{
  usersArr:UsersObj[]=[];
  flag:boolean=false;

  constructor(private serviceInst:GetDataService,  private menuRoute : Router) { }

  ngOnInit() {
      this.usersArr = this.serviceInst.getUsersArray();
   }
  ngOnDestroy(){}
}
