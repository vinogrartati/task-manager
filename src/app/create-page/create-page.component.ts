import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Task } from "../shared/interfaces";
import { TasksService } from "../shared/tasks.service";
import * as moment from "moment";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  tasks: Task[];
  form: FormGroup;
  constructor(
    private tasksService: TasksService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('normal'),
      labels: new FormControl(['research']),
    });
    this.tasksService
      .getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const task: Task = {
      title: this.form.value.title,
      description: this.form.value.description,
      priority: this.form.value.priority,
      labels: this.form.value.labels,
      date: moment(new Date()).locale('ru').fromNow(),
      timestamp: moment(new Date()).unix(),
    };
    this.tasksService
      .addTask(task)
      .subscribe(task => this.tasks.push(task))

    this.router.navigate(['/'])
  }
}
