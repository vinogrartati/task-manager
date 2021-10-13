import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {TasksService} from "../shared/tasks.service";
import {Subscription} from "rxjs";
import {Task} from "../shared/interfaces";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy, DoCheck {
  tasks: Task[]
  tSub: Subscription

  sortBy = '';
  highValue = localStorage.getItem('high') === null ? true : localStorage.getItem('high') === 'true';
  normalValue = localStorage.getItem('normal') === null ? true : localStorage.getItem('normal') === 'true';
  lowValue = localStorage.getItem('low') === null ? true : localStorage.getItem('low') === 'true';
  public priorityList = {
    low: this.lowValue,
    normal: this.normalValue,
    high: this.highValue
  }

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

  ngDoCheck() {
  }

  saveHigh() {
    localStorage.setItem('high', String(!this.highValue))
  }

  saveNormal() {
    localStorage.setItem('normal', String(!this.normalValue))
  }

  saveLow() {
    localStorage.setItem('low', String(!this.lowValue))
  }
}
