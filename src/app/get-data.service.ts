

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsersObj} from './users-obj';  
import {TasksObj} from './tasks-obj';
import {PostsObj} from './posts-obj';
import { Observable, of } from 'rxjs';



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


  public usersArray :UsersObj[]=[];
  public tasksArray :TasksObj[]=[];
  public postsArray :PostsObj[]=[];

  constructor(private serviceHttp:HttpClient) { }


  loadUsers():Observable<UsersObj[]>  {

    // load users array 
    this.serviceHttp.get<any[]>(this.usersUrl).subscribe(response =>
      {
      for (let i = 0 ; i < response.length; i++)
       {
         this.currUser = new UsersObj(response[i].id, response[i].name, response[i].email,
         response[i].address.city);
         this.usersArray.push(this.currUser);
         }
      });
      return of (this.usersArray);
            
    }

    
        // load tasks array 
loadTasks(): TasksObj[]
{
this.serviceHttp.get<any[]>(this.postsUrl).subscribe(response =>
{
for (var i = 0 ; i < response.length; i++)
{ this.currpost = new PostsObj(response[i].id,response[i].userId, response[i].title, response[i].completed);
 this.postsArray.push(this.currpost);
  }
});
return this.tasksArray;

}
         // load posts array 

  loasPosts():void
  {

      this.serviceHttp.get<any[]>(this.tasksUrl).subscribe(response =>
        {
       for (var i = 0 ; i < response.length; i++)
         { this.currTask = new TasksObj(response[i].id, response[i].userId, response[i].title, response[i].body);
          this.tasksArray.push(this.currTask);
           }
        });
    //  return this.postsArray;
      }




}
