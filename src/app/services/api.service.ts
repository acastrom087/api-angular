import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:8080/users'



  constructor(private http: HttpClient, private cookie: CookieService) {


  }



  users: User[]

  userLog = {
    email: "",
    password: ""
  }

  permiso() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.cookie.get('Authorization')
      })
    }
    return httpOptions
  }


  getUsers() {
    return this.http.get(this.url, this.permiso())
  }

  createUser(user: User) {
    return this.http.post(this.url, user)
  }

  setUser(user: User) {
    return this.http.put(`${this.url}/${user.ID}`, user, { withCredentials: true })

  }

  deleteUser(id: number) {
    console.log(id)
    return this.http.delete(`${this.url}/${id}`, { withCredentials: true })
  }

  getUser(id: number) {
    return this.http.get(this.url + "/" + id, { withCredentials: true })
  }

  login(userName: string, password: string) {
    this.userLog.password = password
    this.userLog.email = userName
    console.log(`${this.url}/login`);
    
    return this.http.post(`${this.url}/login`, this.userLog, { withCredentials: true })
  }

}
