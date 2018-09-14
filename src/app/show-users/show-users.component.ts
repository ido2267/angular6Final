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
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  usersArr:UsersObj[]=[];
  flag:boolean=false;

  constructor(private serviceInst:GetDataService,  private menuRoute : Router, private menuAr : ActivatedRoute) { }

  ngOnInit() {
    this.usersArr = this.serviceInst.usersArray;
    this.flag = sessionStorage["listUpdated"]

  }

}
