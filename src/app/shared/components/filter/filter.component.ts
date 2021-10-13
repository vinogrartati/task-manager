import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {TasksService} from "../../tasks.service";
import {Subscription} from "rxjs";
import {Task} from "../../interfaces";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

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


  researchValue = localStorage.getItem('research') === null ? true : localStorage.getItem('research') === 'true';
  designValue = localStorage.getItem('design') === null ? true : localStorage.getItem('design') === 'true';
  developmentValue = localStorage.getItem('development') === null ? true : localStorage.getItem('development') === 'true';

  public labelsList = {
    research: this.researchValue,
    design: this.designValue,
    development: this.developmentValue
  }
  constructor(
    private tasksService: TasksService
  ) { }

  getTasks(): void {
    this.tSub = this.tasksService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.getTasks();
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

  saveResearch() {
    localStorage.setItem('research', String(!this.researchValue))
  }

  saveDesign() {
    localStorage.setItem('design', String(!this.designValue))
  }

  saveDevelopment() {
    localStorage.setItem('development', String(!this.developmentValue))
  }

  ngOnDestroy() {
    if (this.tSub) {
      this.tSub.unsubscribe();
    }
  }
}
