import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../get-data.service';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
 
  constructor(private menuRoute : Router,  private serviceInst:GetDataService) { }
  window:string="users";

  nevigate(menuItem:string): void{
   
     this.menuRoute.navigate(['/sec-menu/' + menuItem]);

   }

  ngOnInit() {
   //  this.serviceInst.loadArrays();
   this.window ="users";

    }

}
