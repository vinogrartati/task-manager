import { Component, OnInit } from '@angular/core';
import {TasksService} from "../shared/tasks.service";
import {Task} from "../shared/interfaces";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  tasks: Task[]
  task: Task
  tSub: Subscription

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    //this.task = this.tasksService.getTask()
  }

  getTasks(): void {
    this.tSub = this.tasksService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  delete(id: number) {
    this.tasksService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id)
    })
  }
}
