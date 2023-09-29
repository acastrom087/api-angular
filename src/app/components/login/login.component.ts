import { Token } from '@angular/compiler';
import { ApplicationInitStatus, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

  constructor(private api:ApiService, private router:Router, private cookie:CookieService) {

  }

  
  userName:string =""
  password:string = ""

  login(){
    
    this.api.login(this.userName, this.password).subscribe((res:any)=>{
      this.cookie.set('Authorization', res.token, 3/24)
      this.router.navigate(['/main'])
    },err=> console.log(err.error))
  }

 
  
 
}
