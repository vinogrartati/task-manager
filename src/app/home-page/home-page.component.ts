import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {TasksService} from "../shared/tasks.service";
import { Subscription} from "rxjs";
import {Task} from "../shared/interfaces";
import * as _ from 'lodash';
import {SortTasksPipe} from "../shared/pipes/sort-tasks.pipe";
import {FilterTasksPipe} from "../shared/pipes/filter-tasks.pipe";
import {list} from "../shared/interfaces";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy, DoCheck {
  tasks: Task[]
  tSub: Subscription
  batch = 15

  public priorityList: list = {
    low: localStorage.getItem('low') === null ? true : localStorage.getItem('low') === 'true',
    normal: localStorage.getItem('normal') === null ? true : localStorage.getItem('normal') === 'true',
    high: localStorage.getItem('high') === null ? true : localStorage.getItem('high') === 'true'
  }

  public labelList: list = {
    research: localStorage.getItem('research') === null ? true : localStorage.getItem('research') === 'true',
    design: localStorage.getItem('design') === null ? true : localStorage.getItem('design') === 'true',
    development: localStorage.getItem('development') === null ? true : localStorage.getItem('development') === 'true'
  }

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    this.getTasks();
  }

  ngDoCheck() {
    this.getTasks()
  }

  ngOnDestroy() {
    if (this.tSub) {
      this.tSub.unsubscribe();
    }
  }

  getTasks(v = false): void {
    this.tSub = this.tasksService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks
        this.tasks = SortTasksPipe.prototype.transform(this.tasks, localStorage.getItem('sortBy'))
        this.tasks = FilterTasksPipe.prototype.transform(this.tasks, this.priorityList, this.labelList)
        this.tasks = _.slice(this.tasks, 0, this.batch)
        if (v) {
          this.batch += 15
        }
      })
  }

  onScroll() {
    this.getTasks(true)
    console.log(this.priorityList)
  }

  savePriority(value: string) {
    localStorage.setItem(value, String(this.priorityList[value]))
  }

  saveLabel(value: string) {
    localStorage.setItem(value, String(this.labelList[value]))
  }
}

