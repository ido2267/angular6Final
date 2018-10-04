import {Injectable, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsersObj} from '../types/users-obj';  
import {TasksObj} from '../types/tasks-obj';
import {PostsObj} from '../types/posts-obj';
import {untilComponentDestroyed} from "@w11k/ngx-componentdestroyed";
 
const  usersUrl:string='https://jsonplaceholder.typicode.com/users';
const  tasksUrl:string='https://jsonplaceholder.typicode.com/todos';
const  postsUrl:string='https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class GetDataService implements OnDestroy {
  private currUser :UsersObj;
  private currTask :TasksObj;
  private currpost :PostsObj;

  private usersArray :UsersObj[]=[];
  private tasksArray :TasksObj[]=[];
  private postsArray :PostsObj[]=[];
  
  private userDeleted:boolean=false;
  private userUpdated:boolean=false;
  private index:number=0;
 
  constructor(private serviceHttp:HttpClient) { }

 getUsersArray():UsersObj[]{
      return this.usersArray;
}     

getPostsArray() :  PostsObj[] {
   return  this.postsArray;
}

getTasksArray():TasksObj[]{
   

       return this.tasksArray;
    }

 
getSingleUser (userId:number):UsersObj{
   
   this.currUser = this.usersArray.filter(x=> x.UserObjUserId == userId).reduce((xx,yy)=>
  {
    if (xx.UserObjUserId == yy.UserObjUserId)
    return xx;
  });  
     return this.currUser;

}
 
getPostsForUser (userId:number):PostsObj[]{
   

   return this.postsArray.filter(x=> x.postObjUserId == userId);

}
 

 getTasksForUser(userId:number):TasksObj[]{
   

     return  this.tasksArray.filter(x=> x.taskObjUserId == userId);
}
 
    deleteUser(userId:number):boolean
    {
       

      this.index = this.usersArray.map(x=> x.UserObjUserId).indexOf(userId) 
      if (this.index >= 0 )
      {
        this.usersArray.splice(this.index,1);
        this.userDeleted= true;
  this.serviceHttp.delete(usersUrl + "/" + userId).subscribe( (data) => console.log(data));
         }
      else
      {   this.userDeleted= false;}
      return this.userDeleted;
    }

 updateUser(changedUserObj:UsersObj):boolean
    {    

        this.index = this.usersArray.map(x=> x.UserObjUserId).indexOf(changedUserObj.UserObjUserId) 
      if (this.index >= 0 )
      {
        this.usersArray[this.index].UserObjCity = changedUserObj.UserObjCity;
        this.usersArray[this.index].UserObjEmail = changedUserObj.UserObjEmail;
        this.usersArray[this.index].UserObjName = changedUserObj.UserObjName;
        this.usersArray[this.index].UserObjUserId = changedUserObj.UserObjUserId;
       this.userUpdated= true;
  this.serviceHttp.put(usersUrl + "/" + changedUserObj.UserObjUserId,changedUserObj).subscribe( (data) => console.log(data));
 
            
       }
      else
      {   this.userUpdated= false;}
      return this.userUpdated;
    }
 
    addUser( newUser:UsersObj ):boolean{
       var userExists:boolean = true;
       userExists =  this.matchUser(newUser,0);
      if (userExists)
      {return false;}
       this.index = this.usersArray.map(x=> x.UserObjUserId).reduce((y,z)=> {
        if (z > y)
        {return z;}
        else
        {return y;} });
       this.index += 1;   
       newUser.UserObjUserId = this.index;
       this.usersArray.push(newUser);
      this.serviceHttp.post(usersUrl + "/" +  this.index,newUser).subscribe( (data) => console.log(data));
 
    }
     matchUser(newUser:UsersObj, userIndex:number):boolean
    {
      var userExists:boolean = true;
      var username:string = newUser.UserObjName;
      var userEmail:string = newUser.UserObjEmail;
      var userCity:string = newUser.UserObjCity;
        while (userExists)
      {
        
        this.index = this.usersArray.map(x=> x.UserObjName).indexOf(username,userIndex)
        if (this.index >=0 )
        {
         if (  this.usersArray[this.index].UserObjEmail == userEmail &&
            this.usersArray[this.index].UserObjCity == userCity)
            {
              return userExists;
            }
            else 
            {
              this.index +=1;
              this.matchUser(newUser, this.index);
            }
          }
        else {
          userExists = false;
        }  
      }
      return userExists;
    }

    loadArrays()  { 
      this.serviceHttp.get<any[]>(usersUrl).pipe(untilComponentDestroyed(this)).subscribe(response =>
        {
        for (let i = 0 ; i < response.length; i++)
         {
           this.currUser = new UsersObj(response[i].id, response[i].name, response[i].email,
           response[i].address.city);
           this.usersArray.push(this.currUser);}
        });
              
           this.serviceHttp.get<any[]>(postsUrl).pipe(untilComponentDestroyed(this)).subscribe(response =>
          {
          for (var i = 0 ; i < response.length; i++)
          { this.currpost = new PostsObj(response[i].id,response[i].userId, response[i].title, response[i].body );
          this.postsArray.push(this.currpost);
            }
          });
   
            this.serviceHttp.get<any[]>(tasksUrl).pipe(untilComponentDestroyed(this)).subscribe(response =>
            {
              for (var i = 0 ; i < response.length; i++)
                { this.currTask = new TasksObj(response[i].id, response[i].userId, response[i].title, response[i].completed);
                  this.tasksArray.push(this.currTask);
                  }
                });
       }
       ngOnDestroy() {
      }
}


