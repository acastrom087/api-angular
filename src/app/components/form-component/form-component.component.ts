import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit  {

  users: User[]
  nombre: string = ""
  apellido: string = ""
  email: string = ""
  password:string = ""
  vacio: boolean = true


  constructor(private api: ApiService) {


  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.api.getUsers().subscribe((data:any) => {
      this.users = Object.values(data.users)
      
    });
  }

  setVacios(){
    this.vacio = false
    setTimeout(()=>{
      this.vacio = true
    },3000)
  }



   createUser() {
    if(this.nombre.trim().length == 0 || this.apellido.trim().length == 0 || this.email.trim().length == 0){
      console.log('vacios')
      this.setVacios()
      return
    }
    let user = new User(this.nombre, this.apellido, this.email, this.password);
    this.api.createUser(user).subscribe((data)=>{
      this.getUsers()
    })
    

  }




}
