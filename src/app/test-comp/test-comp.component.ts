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


  constructor(private serviceInst:GetDataService) { }

  ngOnInit() { 
     this.serviceInst.loadUsers().subscribe(response=> this.usersArr = response);
     console.log( 'users ' + this.usersArr.length); // => users 0 

      this.serviceInst.loasPosts();
      this.postArr = this.serviceInst.postsArray;
     this.tasksArr =  this.serviceInst.loadTasks();

     // this.tasksArr = this.serviceInst.tasksArray;
     console.log( 'tasks ' + this.tasksArr.length); // => tasks 0 
     console.log( 'posts ' + this.postArr.length); // => posts 0 

  //   this.serviceInst.loadTasks();
   }

}
