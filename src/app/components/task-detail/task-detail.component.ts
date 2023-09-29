import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private api:TaskService, private location:Location ){

    this.id = this.route.snapshot.params['id']

  }

  ngOnInit() {
    this.getTask()
  }

  id:string;
  task:Task;
  loading:boolean = false;
  

  getTask(){
    this.api.getTask(this.id).subscribe((res:any) =>{
      this.task = res.task
      this.loading = true
    })
  }

  editTask(){
    this.api.editTask(this.task, this.id).subscribe((res:any) =>{
      console.log(res)
      this.getTask()
      this.location.back()
      
    })
}

  deleteTask(){
    this.api.deleteTask(this.id).subscribe((res:any) =>{
      console.log(res)
      this.location.back()
    })
  }

}
