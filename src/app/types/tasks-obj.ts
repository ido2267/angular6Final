// this class determine the type "tasks" (todos)


export class TasksObj {

 public taskObjUserId:number=0;
 public taskObjId:number=0;

 public taskObjTitle:string="";
 public taskObjCompleted:boolean= false;

 constructor (_id:number ,_userId:number,_title:string,_completed:boolean)
 {
  this.taskObjId = _id;
  this.taskObjUserId = _userId;

  this.taskObjTitle = _title;
  this.taskObjCompleted = _completed;
 }
 
}
