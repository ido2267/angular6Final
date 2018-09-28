

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsersObj} from './users-obj';  
import {TasksObj} from './tasks-obj';
import {PostsObj} from './posts-obj';



@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private usersUrl:string='https://jsonplaceholder.typicode.com/users';
  private tasksUrl:string=' https://jsonplaceholder.typicode.com/todos';
  private postsUrl:string=' https://jsonplaceholder.typicode.com/posts';

// a single object will be generated with a "new" command for each member and then 
// added to the relevant array with "push" command 

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

// The arrays will be private so the user needs functions to access the data
getUsersArray():UsersObj[]{
   
       return this.usersArray;
}     

getPostsArray() :  PostsObj[] {
   

          return  this.postsArray;
}

getTasksArray():TasksObj[]{
   

       return this.tasksArray;
    }


 
// a function for getting a single user out of an array 
getSingleUser (userId:number):UsersObj{
   

   this.currUser = this.usersArray.filter(x=> x.UserObjUserId == userId).reduce((xx,yy)=>
  {
    if (xx.UserObjUserId == yy.UserObjUserId)
    return xx;
  });  
     return this.currUser;

}

// a function for getting all the the posts for certain user id 
getPostsForUser (userId:number):PostsObj[]{
   

   return this.postsArray.filter(x=> x.postObjUserId == userId);

}
// a function for getting all the the tasks for certain user id 

 getTasksForUser(userId:number):TasksObj[]{
   

     return  this.tasksArray.filter(x=> x.taskObjUserId == userId);
}
// a function for deleting a given user from the array  

    deleteUser(userId:number):boolean
    {
       

      this.index = this.usersArray.map(x=> x.UserObjUserId).indexOf(userId) 
      if (this.index >= 0 )
      {
        this.usersArray.splice(this.index,1);
        this.userDeleted= true;
//   delete the data from the database as well:
 this.serviceHttp.delete(this.usersUrl + "/" + userId).subscribe( (data) => console.log(data));
         }
      else
      {   this.userDeleted= false;}
      return this.userDeleted;
    }

// a function for updating  a given user in the array  
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
//  update the data in the database as well:
 this.serviceHttp.put(this.usersUrl + "/" + changedUserObj.UserObjUserId,changedUserObj).subscribe( (data) => console.log(data));
 
            
       }
      else
      {   this.userUpdated= false;}
      return this.userUpdated;
    }
// a function for adding  a given user to the array  

    addUser( newUser:UsersObj ):boolean{
       

      var userExists:boolean = true;
      // first let's see if user's details allready exists 
      userExists =  this.matchUser(newUser,0);
      if (userExists)
      {return false;}
      // next  we should find a free user's Id 
      this.index = this.usersArray.map(x=> x.UserObjUserId).reduce((y,z)=> {
        if (z > y)
        {return z;}
        else
        {return y;} });
       this.index += 1;   
       newUser.UserObjUserId = this.index;
       this.usersArray.push(newUser);
      //   add the data in the database as well:
     this.serviceHttp.post(this.usersUrl + "/" +  this.index,newUser).subscribe( (data) => console.log(data));
 
    }
  // a function that find existing user with details of new user 
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
       

        // load users array 
      this.serviceHttp.get<any[]>(this.usersUrl).subscribe(response =>
        {
        for (let i = 0 ; i < response.length; i++)
         {
           this.currUser = new UsersObj(response[i].id, response[i].name, response[i].email,
           response[i].address.city);
           this.usersArray.push(this.currUser);}
        });
              
         // load posts array 
          this.serviceHttp.get<any[]>(this.postsUrl).subscribe(response =>
          {
          for (var i = 0 ; i < response.length; i++)
          { this.currpost = new PostsObj(response[i].id,response[i].userId, response[i].title, response[i].body );
          this.postsArray.push(this.currpost);
            }
          });
         // load tasks array 
  
            this.serviceHttp.get<any[]>(this.tasksUrl).subscribe(response =>
            {
              for (var i = 0 ; i < response.length; i++)
                { this.currTask = new TasksObj(response[i].id, response[i].userId, response[i].title, response[i].completed);
                  this.tasksArray.push(this.currTask);
                  }
                });
       }
    
}


