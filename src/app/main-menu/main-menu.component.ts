import { Component, OnInit,OnDestroy } from '@angular/core';
import {GetDataService} from '../servicefolder/get-data.service';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit ,OnDestroy {
 
  constructor(private menuRoute : Router,  private serviceInst:GetDataService) { }
 
  nevigate(menuItem:string): void{
   
     this.menuRoute.navigate(['/' + menuItem +'/']);

   }

  ngOnInit() {
    this.serviceInst.loadArrays();
    this.menuRoute.navigate(['users']);

    }
  ngOnDestroy(){
    
  }
}
