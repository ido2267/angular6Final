import { Component, OnInit } from '@angular/core';
import {UsersObj} from '../users-obj';  
import {TasksObj} from '../tasks-obj';
import {PostsObj} from '../posts-obj';
import {GetDataService} from '../get-data.service';
 
@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {
  
// testing if the arrays are loaded 
  
  usersArr:UsersObj[]=[];
  tasksArr:TasksObj[]=[];
  postArr:PostsObj[]=[];
  showUsers:boolean=false;
  showTasks:boolean=false;
  showPosts:boolean=false;

  constructor(private serviceInst:GetDataService) { }
  getUsers(){
    this.showUsers = !this.showUsers;
    this.showPosts = false;
    this.showTasks = false
     this.usersArr = this.serviceInst.usersArray;
  //   console.log('name  ' + this.usersArr[0].UserObjName + ' city ' +  this.usersArr[0].UserObjCity);
  }

  getPosts(){
    this.showPosts = !this.showPosts;
    this.showUsers = false;
     this.showTasks = false
     this.postArr = this.serviceInst.postsArray;
 
   }

   
  getTasks(){
    this.showTasks = ! this.showTasks;
    this.showUsers = false;
    this.showPosts = false;
      this.tasksArr = this.serviceInst.tasksArray;
   }


  ngOnInit() { 
     this.serviceInst.loadArrays();
   }

}
