import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { TasksService } from "../shared/tasks.service";
import { Task } from "../shared/interfaces";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})

export class EditPageComponent implements OnInit {
  task: Task;
  form: FormGroup;

  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params: Params) => this.tasksService.getTask(params['id'])))
      .subscribe((task: Task) => {
        this.task = task;
        this.form = new FormGroup( {
          title: new FormControl(task.title, Validators.required),
          description: new FormControl(task.description, Validators.required),
          priority: new FormControl(task.priority),
          labels: new FormControl(task.labels)
        });
      });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.tasksService.updateTask({
      ...this.task,
      title : this.form.value.title,
      description : this.form.value.description,
      priority : this.form.value.priority,
      labels: this.form.value.labels
    }).subscribe();

    this.router.navigate([`/task/${this.task.id}`]);
  }
}
