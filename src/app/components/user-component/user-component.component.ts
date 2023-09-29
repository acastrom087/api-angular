import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router) {
    this.id = this.route.snapshot.params['id'];
    
  }
  
  user:User;
  id:number;
  cargando:boolean = false;

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.api.getUser(this.id).subscribe((user:any) => {
      this.user = user.user;
      setTimeout(() => {
        this.cargando = true;
      },100)
      
    })
  }

  eliminar(id:number) {
    this.api.deleteUser(id).subscribe((res) => {
      this.router.navigate(['/main'])
    })
    
}

editUser() {
  this.api.setUser(this.user).subscribe((data)=>{
    this.router.navigate(['/main'])
  })
  

}
}
