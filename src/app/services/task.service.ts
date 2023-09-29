import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
  url:string = 'http://localhost:30001/tasks'
  url2:string = 'http://localhost:30001/task'

  createTask(task: Task) {
    console.log(task)
    console.log(typeof( task.UserId))
    return this.http.post(this.url, task,{ withCredentials: true })
  }

  getTasks(id:Number){   
    console.log(`${this.url}User/${id}`)
    return this.http.get(`${this.url}User/${id}`,{ withCredentials: true })
  }

  getTask(id: string){
    console.log(`${this.url2}/${id}`)
    return this.http.get(`${this.url}/${id}`,{ withCredentials: true })
  }

  editTask(task: Task, id:string){
    console.log(task, "Editando")
    return this.http.put(`${this.url2}/${id}`, task,{ withCredentials: true })
  }

  deleteTask(id:string){
    console.log(id)
    console.log(`${this.url2}/${id}`)
    return this.http.delete(`${this.url2}/${id}`,{ withCredentials: true })
  }
}
