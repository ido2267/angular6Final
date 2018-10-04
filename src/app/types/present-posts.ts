export class PresentPosts {
   postId:number;
   postUserId:number;
   postTitle:string;
   postUserName:string;
 constructor (_id:number,_userId:number,_title:string,_userName:string)
      {
           this.postId =_id;
           this.postUserId = _userId;
           this.postTitle = _title;
           this.postUserName = _userName;
       }
       
}
