import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent  {

  constructor(){

   
  }
  @Input() users: User[]
 
  
  
  
  displayedColumns:string[] = ['nombre', 'apellido', 'email', 'acciones']


  
  
}
