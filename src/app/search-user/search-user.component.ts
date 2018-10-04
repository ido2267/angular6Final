import { Component, OnDestroy } from '@angular/core';
import {UsersObj} from '../types/users-obj';  
import {GetDataService} from '../servicefolder/get-data.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent  implements OnDestroy{
 
  public usersList:UsersObj[]=[];
   
  constructor(private serviceInst:GetDataService,  private menuRoute : Router, private menuAr : ActivatedRoute) { }
  prev()
    {                                // return to prevoius page 
      this.menuRoute.navigate(['/users/show-users']);

     }

     getUsers(phrase:string)
     {
      this.usersList =  this.serviceInst.getUsersArray();
      this.usersList =  this.usersList.filter(x=> this.matchFound(phrase, x.UserObjName));


     }
 
  // check if the phrase is in the given user name 
  matchFound(phrase:string, userName:string):boolean
   {   
    
       var index:number=-1;
     // substr   = userName.substring(0,endUserName);
        index = userName.indexOf(phrase);
        if (index >=0)
        {
          return true;
         }
         else
         {
           return false;
         }
   
    }
ngOnDestroy(){}

}
