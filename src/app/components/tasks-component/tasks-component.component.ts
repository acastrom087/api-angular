import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-component',
  templateUrl: './tasks-component.component.html',
  styleUrls: ['./tasks-component.component.css']
})
export class TasksComponentComponent implements OnInit {

  constructor(private api: TaskService, private route:ActivatedRoute) {
    this.idUsuario = parseInt(this.route.snapshot.params['id']);
    
  }

  titulo:string =""
  descripcion:string =""
  done:boolean = false
  task:Task;
  idUsuario:Number;

  cargando:boolean = false

  tasks:Task[]

  ngOnInit() {
    this.getTasks()
  }
  

  createTask(){
    this.task = new Task(this.titulo,this.descripcion,this.done, this.idUsuario)
    this.api.createTask(this.task).subscribe(res =>{
      this.getTasks()
    })

  }

  getTasks(){
    this.api.getTasks(this.idUsuario).subscribe((res:any) =>{
      this.tasks = Object.values(res.Tasks)
    })
  
   }


}
