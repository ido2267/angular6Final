import { Component, OnInit ,OnDestroy} from '@angular/core';
 
 import {TasksObj} from '../types/tasks-obj';
 
 import {GetDataService} from '../servicefolder/get-data.service';
import { Router, ActivatedRoute} from '@angular/router';
 import {TasksPipePipe  }  from '../servicefolder/tasks-pipe.pipe';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {
    
   tasksArr:TasksObj[]=[];
   
  tasksStatus:string="all";
 
  constructor(private serviceInst:GetDataService,  private menuRoute : Router, private menuAr : ActivatedRoute) { }
  prev(){ 
     this.menuRoute.navigate(['/users/show-users']);

 }

  ngOnInit() {    
 
     this.tasksArr = this.serviceInst.getTasksArray();

    
   }
  ngOnDestroy(){}

}
