// this class determine the type "posts" 

export class PostsObj {
    
 public postObjUserId:number=0;
 public postObjId:number=0;

 public postObjTitle:string="";
 public postObjBody:string="";

 constructor (_id:number ,_userId:number,_title:string,_Body:string)
 {
  this.postObjId = _id;
  this.postObjUserId = _userId;

  this.postObjTitle = _title;
  this.postObjBody = _Body;
 }
 
}
