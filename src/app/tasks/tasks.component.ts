import { Component, OnInit } from '@angular/core';
 
 import {TasksObj} from '../tasks-obj';
 
 import {GetDataService} from '../get-data.service';
import { Router, ActivatedRoute} from '@angular/router';
 import {TasksPipePipe  }  from '../tasks-pipe.pipe';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

     
   tasksArr:TasksObj[]=[];
 
//menuItem:string="";
 
  tasksStatus:string="all";
 
  constructor(private serviceInst:GetDataService,  private menuRoute : Router, private menuAr : ActivatedRoute) { }
  prev(){ // return to prevoius page 
    this.menuRoute.navigate(['']);
 }


  ngOnInit() {    
 
    // this.menuAr.params.subscribe( data => this.menuItem = data['menu'] );
    this.tasksArr = this.serviceInst.getTasksArray();

    
   }


}
