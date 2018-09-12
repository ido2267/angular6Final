import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {GetDataService} from '../get-data.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  constructor(private menuRoute : Router,  private serviceInst:GetDataService) { }

  ngOnInit() {
  this.serviceInst.loadArrays();

   this.menuRoute.navigate(['/main-menu/']);
 
}
}
