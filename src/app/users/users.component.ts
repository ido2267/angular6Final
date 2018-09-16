import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  constructor(private menuRoute : Router ) { }
  
  nevigate(menuItem:string): void{
      switch(menuItem){
        case 'all':
          this.menuRoute.navigate(['/users/show-users']);
           break;
        case 'add':
           this.menuRoute.navigate(['/users/add-user']);
            break;
        case 'search':
          this.menuRoute.navigate(['/users/search-user']);
           break;
       default:
          this.menuRoute.navigate(['/users/show-users']);
    }
 

  }
  ngOnInit() {

    this.nevigate('all');
  }

}
