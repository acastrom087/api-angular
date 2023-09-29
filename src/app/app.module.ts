import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './services/api.service';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsersComponentComponent } from './components/users-component/users-component.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponentComponent } from './components/tasks-component/tasks-component.component';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { MensajeComponentComponent } from './components/mensaje-component/mensaje-component.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CookieService } from 'ngx-cookie-service';



const appRoutes:Routes =[
  { path: '', component:LoginComponent},
  { path: 'main', component:FormComponentComponent},
  { path: 'delete/:id', component:UserComponentComponent},
  { path: 'tasks/:id', component:TasksComponentComponent},
  { path: 'task/:id', component:TaskDetailComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponentComponent,
    FormComponentComponent,
    UserComponentComponent,
    TasksComponentComponent,
    MensajeComponentComponent,
    TaskTableComponent,
    TaskDetailComponent,
    LoginComponent,
    

  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [
    ApiService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
