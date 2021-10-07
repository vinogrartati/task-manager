import {Component, OnDestroy, OnInit} from '@angular/core';
import {TasksService} from "../shared/tasks.service";
import {Subscription} from "rxjs";
import {Task} from "../shared/interfaces";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  tasks: Task[]
  tSub: Subscription

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getTasks();
  }

  ngOnDestroy() {
    if (this.tSub) {
      this.tSub.unsubscribe();
    }
  }

  getTasks(): void {
    this.tSub = this.tasksService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }
}
