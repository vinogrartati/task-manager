import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../tasks.service";
import {Subscription} from "rxjs";
import {Task} from "../../interfaces";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  tasks: Task[]
  tSub: Subscription

  highValue = localStorage.getItem('high') === null ? true : localStorage.getItem('high') === 'true';
  normalValue = localStorage.getItem('normal') === null ? true : localStorage.getItem('normal') === 'true';
  lowValue = localStorage.getItem('low') === null ? true : localStorage.getItem('low') === 'true';

  public priorityList = {
    low: this.lowValue,
    normal: this.normalValue,
    high: this.highValue
  }

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.tSub = this.tasksService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
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
