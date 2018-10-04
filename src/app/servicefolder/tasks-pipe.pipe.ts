import { Pipe, PipeTransform } from '@angular/core';
import {TasksObj}              from '../types/tasks-obj'
@Pipe({
  name: 'tasksPipe'
})
export class TasksPipePipe implements PipeTransform {
  
// this pipe sorts tasks accorsing to status: completed, uncompeted or all   
  transform( tasksList:TasksObj[],str:string ):TasksObj[]  {
  
   switch(str)
    {
      case "all":
      return tasksList;
       case "Completed":
      return tasksList.filter(x=> x.taskObjCompleted == true);
       case "Uncompleted":
      return tasksList.filter(x=> x.taskObjCompleted == false);
       default:
      return tasksList;
    }
    

 
 }

}
