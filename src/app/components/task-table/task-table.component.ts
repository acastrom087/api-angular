import { Component,  Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit  {

  
  constructor(){
  

  }
  ngOnInit() {


  }
  
  @Input() tasks: Task[]
  
  
  displayedColumns:string[] = ['titulo','estado','acciones'];

  
}
