import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-child-menu',
  templateUrl: './child-menu.component.html',
  styleUrls: ['./child-menu.component.css']
})
export class ChildMenuComponent implements OnInit {

  window:string="";

  constructor() { }

  ngOnInit() {

    this.window ="All";
  }

}
