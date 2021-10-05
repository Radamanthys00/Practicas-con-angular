import { Component, Input } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './interface/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ExampleAPIs';

  constructor(private TaskService: TaskService){}

  Tasks:Task[]=[];

  ngOnInit(): void {
    this.TaskService.getAllTasks().subscribe(tasks =>{
      console.log('Api-games' + JSON.stringify(tasks))
      const getAllTasks = JSON.stringify(tasks)
      const events = JSON.parse(getAllTasks)
      this.Tasks = events;
      console.log('variable: ' + events)
    })
  }

  getAllTasks() {
    this.TaskService.getAllTasks()
    .subscribe(tasks=>{
      console.log(tasks)
    })
  }

  getTask() {
    this.TaskService.getTask('2')
    .subscribe(task=>{
      console.log(task)
    })
  }
}
