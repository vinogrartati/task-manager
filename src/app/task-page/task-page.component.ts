import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from "../shared/tasks.service";
import {Task} from "../shared/interfaces";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";

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
    private route: ActivatedRoute,
    private router: Router,
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.tasksService.getTask(params['id'])
      })
    ).subscribe((task: Task) => {
      this.task = task;
    })
  }

  getTasks(): void {
    this.tSub = this.tasksService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  delete(id: number) {
    this.tasksService.deleteTask(id).subscribe()
    this.router.navigate(['/'])
  }
}
