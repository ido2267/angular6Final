import { Pipe, PipeTransform } from '@angular/core';
import {TasksObj}              from '../types/tasks-obj'
const all:string="all";
const completed:string="Completed";
const uncompleted:string="Uncompleted";
@Pipe({
  name: 'tasksPipe'
})
export class TasksPipePipe implements PipeTransform {
  
// this pipe sorts tasks accorsing to status: completed, uncompeted or all   
  transform( tasksList:TasksObj[],str:string ):TasksObj[]  {
  
   switch(str)
    {
      case all:
      return tasksList;
       case completed :
      return tasksList.filter(x=> x.taskObjCompleted == true);
       case uncompleted:
      return tasksList.filter(x=> x.taskObjCompleted == false);
       default:
      return tasksList;
    }
    

 
 }

}
