import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../get-data.service';
import { Router, ActivatedRoute} from '@angular/router';
import {UsersObj} from '../users-obj';  
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  UserName:string="";
  userCity:string="";
  userEmail:string="";
  userValid:boolean=true;
  emailPattern:string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
  newUser:UsersObj;
  
  constructor(private menuRoute : Router,  private serviceInst:GetDataService) { }
 
  nevigate( ): void{
   
     this.menuRoute.navigate(['/users/show-users']);

   }
   userSubmit(valid:boolean):void {
     if (valid)
     {
       this.newUser = new UsersObj(0,this.UserName,this.userEmail,this.userCity);
       this.serviceInst.addUser(this.newUser);
     }
   }

  
  ngOnInit() {
  }

}
